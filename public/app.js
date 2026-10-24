const state = {
  data: null,
  filtered: [],
  query: "",
  category: "All",
  level: "All",
  book: "all",
  includeReferences: true,
  visible: 40,
  selected: null,
  mode: "all",
  bookmarks: new Set(JSON.parse(localStorage.getItem("eka-bookmarks") || "[]")),
  studied: new Set(JSON.parse(localStorage.getItem("eka-studied") || "[]")),
};

const $ = selector => document.querySelector(selector);
const elements = {
  loginView: $("#loginView"), appShell: $("#appShell"), loginForm: $("#loginForm"),
  username: $("#usernameInput"), password: $("#passwordInput"), loginButton: $("#loginButton"),
  loginError: $("#loginError"), togglePassword: $("#togglePassword"), logout: $("#logoutButton"),
  search: $("#searchInput"), categoryFilters: $("#categoryFilters"), levelFilter: $("#levelFilter"),
  bookFilter: $("#bookFilter"), referenceToggle: $("#referenceToggle"), reset: $("#resetButton"),
  list: $("#recordList"), count: $("#resultCount"), title: $("#resultTitle"), eyebrow: $("#resultEyebrow"),
  activeFilters: $("#activeFilters"), loadMore: $("#loadMoreButton"), empty: $("#emptyState"),
  reader: $("#reader"), readerEmpty: $("#readerEmpty"), readerArticle: $("#readerArticle"),
  readerMeta: $("#readerMeta"), readerTitle: $("#readerTitle"), readerSource: $("#readerSource"),
  readerContent: $("#readerContent"), ocrNote: $("#ocrNote"), markStudied: $("#markStudied"),
  bookmarkRecord: $("#bookmarkRecord"), closeReader: $("#closeReader"),
  bookmarksButton: $("#bookmarksButton"), studiedButton: $("#studiedButton"),
  bookmarkCount: $("#bookmarkCount"), studiedCount: $("#studiedCount"),
  sidebar: $("#sidebar"), sidebarScrim: $("#sidebarScrim"), mobileFilter: $("#mobileFilterButton"),
  closeFilters: $("#closeFilters"), unitStat: $("#unitStat"),
};

const categoryOrder = ["Grammar", "Vocabulary", "Collocations", "Idioms", "Phrasal Verbs"];
const levelOrder = ["Elementary", "Pre-intermediate & Intermediate", "Intermediate", "Upper-intermediate", "Advanced"];

function escapeHTML(value = "") {
  return String(value).replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
}

function normalize(value = "") {
  return String(value).toLocaleLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
}

function decodeBase64(value) {
  return Uint8Array.from(atob(value), character => character.charCodeAt(0));
}

async function decryptLibrary(username, password) {
  const configResponse = await fetch("./data/auth.json", {cache: "no-store"});
  if (!configResponse.ok) throw new Error("The encrypted library is unavailable.");
  const config = await configResponse.json();
  const encryptedResponse = await fetch(`./data/${config.file}`);
  if (!encryptedResponse.ok) throw new Error("The encrypted library is unavailable.");

  const material = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(`${username}\u0000${password}`),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  const key = await crypto.subtle.deriveKey(
    {name: "PBKDF2", salt: decodeBase64(config.salt), iterations: config.iterations, hash: "SHA-256"},
    material,
    {name: "AES-GCM", length: 256},
    false,
    ["decrypt"]
  );
  const decrypted = await crypto.subtle.decrypt(
    {name: "AES-GCM", iv: decodeBase64(config.iv), additionalData: new TextEncoder().encode(config.aad)},
    key,
    await encryptedResponse.arrayBuffer()
  );
  if (config.compression !== "gzip" || !("DecompressionStream" in window)) {
    throw new Error("This browser cannot open the compressed library.");
  }
  const stream = new Blob([decrypted]).stream().pipeThrough(new DecompressionStream("gzip"));
  return JSON.parse(await new Response(stream).text());
}

function compactSnippet(record) {
  const plain = record.content.replace(/\s+/g, " ").trim();
  if (!state.query) return plain.slice(0, 165);
  const at = normalize(plain).indexOf(normalize(state.query));
  const start = Math.max(0, at > -1 ? at - 55 : 0);
  return `${start ? "…" : ""}${plain.slice(start, start + 180)}${plain.length > start + 180 ? "…" : ""}`;
}

function persist() {
  localStorage.setItem("eka-bookmarks", JSON.stringify([...state.bookmarks]));
  localStorage.setItem("eka-studied", JSON.stringify([...state.studied]));
  elements.bookmarkCount.textContent = state.bookmarks.size;
  elements.studiedCount.textContent = state.studied.size;
  elements.bookmarksButton.classList.toggle("active", state.mode === "bookmarks");
  elements.studiedButton.classList.toggle("active", state.mode === "studied");
}

function setupFilters() {
  const counts = state.data.meta.categories;
  const total = state.data.meta.unitCount;
  elements.categoryFilters.innerHTML = ["All", ...categoryOrder].map(category => `
    <button class="category-button ${category === state.category ? "active" : ""}" type="button" data-category="${escapeHTML(category)}">
      <span class="category-dot"></span>
      <span>${category === "All" ? "All knowledge" : escapeHTML(category)}</span>
      <small>${category === "All" ? total : counts[category]}</small>
    </button>`).join("");

  elements.levelFilter.innerHTML = ["All", ...levelOrder].map(level =>
    `<option value="${escapeHTML(level)}">${level === "All" ? "All levels" : escapeHTML(level)}</option>`
  ).join("");
  elements.levelFilter.value = state.level;

  const books = [...state.data.books].sort((a, b) => `${a.category}${a.level}`.localeCompare(`${b.category}${b.level}`));
  elements.bookFilter.innerHTML = `<option value="all">All 13 books</option>` + books.map(book =>
    `<option value="${book.id}">${escapeHTML(book.category)} · ${escapeHTML(book.level)}</option>`
  ).join("");
  elements.bookFilter.value = state.book;
}

function renderActiveFilters() {
  const filters = [];
  if (state.query) filters.push(`Search: ${state.query}`);
  if (state.category !== "All") filters.push(state.category);
  if (state.level !== "All") filters.push(state.level);
  if (state.book !== "all") filters.push("Selected source");
  if (!state.includeReferences) filters.push("Units only");
  if (state.mode === "bookmarks") filters.push("Bookmarks");
  if (state.mode === "studied") filters.push("Studied");
  elements.activeFilters.hidden = filters.length === 0;
  elements.activeFilters.innerHTML = filters.map(filter => `<span class="active-filter">${escapeHTML(filter)}</span>`).join("");
}

function applyFilters({resetVisible = true} = {}) {
  if (!state.data) return;
  if (resetVisible) state.visible = 40;
  const query = normalize(state.query.trim());
  state.filtered = state.data.records.filter(record => {
    if (state.mode === "bookmarks" && !state.bookmarks.has(record.id)) return false;
    if (state.mode === "studied" && !state.studied.has(record.id)) return false;
    if (state.category !== "All" && record.category !== state.category) return false;
    if (state.level !== "All" && record.level !== state.level) return false;
    if (state.book !== "all" && record.bookId !== state.book) return false;
    if (!state.includeReferences && record.kind === "reference") return false;
    return !query || record._search.includes(query);
  });

  const heading = state.mode === "bookmarks" ? "Bookmarks" : state.mode === "studied" ? "Studied" : state.category === "All" ? "Browse the library" : state.category;
  elements.title.textContent = heading;
  elements.eyebrow.textContent = state.query ? `Results for “${state.query}”` : state.level !== "All" ? state.level : "All knowledge";
  elements.count.textContent = `${state.filtered.length.toLocaleString()} result${state.filtered.length === 1 ? "" : "s"}`;
  setupFilters();
  renderActiveFilters();
  renderRecords();
  persist();
}

function renderRecords() {
  const records = state.filtered.slice(0, state.visible);
  elements.list.innerHTML = records.map(record => {
    const isStudied = state.studied.has(record.id);
    const number = record.kind === "unit" ? record.unit : "Ref";
    return `<button class="record-card ${state.selected?.id === record.id ? "active" : ""}" type="button" data-record-id="${record.id}" data-category="${escapeHTML(record.category)}">
      <span class="unit-number">${number}</span>
      <span>
        <h2>${escapeHTML(record.title)}</h2>
        <p>${escapeHTML(compactSnippet(record))}</p>
        <span class="record-meta"><span>${escapeHTML(record.level)}</span><span>·</span><span>${escapeHTML(record.category)}</span>${record.ocr ? "<span>· OCR</span>" : ""}</span>
      </span>
      <span class="record-state" aria-label="${isStudied ? "Studied" : state.bookmarks.has(record.id) ? "Bookmarked" : ""}">${isStudied ? "✓" : state.bookmarks.has(record.id) ? "★" : ""}</span>
    </button>`;
  }).join("");
  elements.loadMore.hidden = state.visible >= state.filtered.length;
  elements.empty.hidden = state.filtered.length !== 0;
}

function renderReader(record) {
  state.selected = record;
  elements.readerEmpty.hidden = true;
  elements.readerArticle.hidden = false;
  elements.reader.classList.add("open");
  elements.reader.setAttribute("aria-hidden", "false");
  elements.readerMeta.textContent = `${record.category} · ${record.level} · ${record.kind === "unit" ? `Unit ${record.unit}` : "Reference"}`;
  elements.readerTitle.textContent = record.title;
  elements.readerSource.textContent = `${record.bookTitle} · PDF page ${record.sourcePage}`;
  elements.readerContent.textContent = record.content;
  elements.ocrNote.hidden = !record.ocr;
  elements.markStudied.classList.toggle("active", state.studied.has(record.id));
  elements.markStudied.textContent = state.studied.has(record.id) ? "Studied ✓" : "Mark studied";
  elements.bookmarkRecord.classList.toggle("active", state.bookmarks.has(record.id));
  elements.bookmarkRecord.textContent = state.bookmarks.has(record.id) ? "Bookmarked ★" : "Bookmark";
  history.replaceState(null, "", `#${encodeURIComponent(record.id)}`);
  renderRecords();
  elements.readerArticle.scrollTop = 0;
}

function closeReader() {
  state.selected = null;
  elements.reader.classList.remove("open");
  elements.reader.setAttribute("aria-hidden", "true");
  elements.readerArticle.hidden = true;
  elements.readerEmpty.hidden = false;
  history.replaceState(null, "", location.pathname + location.search);
  renderRecords();
}

function resetAll() {
  state.query = "";
  state.category = "All";
  state.level = "All";
  state.book = "all";
  state.includeReferences = true;
  state.mode = "all";
  elements.search.value = "";
  elements.referenceToggle.checked = true;
  applyFilters();
}

function toggleSidebar(open) {
  elements.sidebar.classList.toggle("open", open);
  elements.sidebarScrim.hidden = !open;
}

function initializeLibrary(data) {
  state.data = data;
  state.data.records.forEach(record => {
    record._search = normalize(`${record.title} ${record.bookTitle} ${record.category} ${record.level} ${record.content}`);
  });
  elements.unitStat.textContent = state.data.meta.unitCount.toLocaleString();
  elements.loginView.hidden = true;
  elements.appShell.hidden = false;
  window.scrollTo(0, 0);
  setupFilters();
  persist();
  applyFilters();
  const requested = decodeURIComponent(location.hash.slice(1));
  if (requested) {
    const record = state.data.records.find(item => item.id === requested);
    if (record) renderReader(record);
  }
  requestAnimationFrame(() => elements.search.focus());
}

function lockLibrary() {
  state.data = null;
  state.filtered = [];
  state.selected = null;
  elements.list.innerHTML = "";
  elements.readerContent.textContent = "";
  elements.password.value = "";
  elements.appShell.hidden = true;
  elements.loginView.hidden = false;
  window.scrollTo(0, 0);
  history.replaceState(null, "", location.pathname + location.search);
  requestAnimationFrame(() => elements.username.focus());
}

function bindEvents() {
  elements.loginForm.addEventListener("submit", async event => {
    event.preventDefault();
    elements.loginError.hidden = true;
    elements.loginButton.disabled = true;
    elements.loginButton.firstElementChild.textContent = "Decrypting…";
    try {
      const data = await decryptLibrary(elements.username.value.trim(), elements.password.value);
      elements.password.value = "";
      initializeLibrary(data);
    } catch (error) {
      console.warn("Library unlock failed", error.name);
      elements.loginError.textContent = error.message.includes("browser") || error.message.includes("unavailable")
        ? error.message
        : "The username or password is incorrect.";
      elements.loginError.hidden = false;
      elements.password.select();
    } finally {
      elements.loginButton.disabled = false;
      elements.loginButton.firstElementChild.textContent = "Unlock library";
    }
  });
  elements.togglePassword.addEventListener("click", () => {
    const visible = elements.password.type === "text";
    elements.password.type = visible ? "password" : "text";
    elements.togglePassword.textContent = visible ? "Show" : "Hide";
    elements.togglePassword.setAttribute("aria-label", visible ? "Show password" : "Hide password");
  });
  elements.logout.addEventListener("click", lockLibrary);

  let searchTimer;
  elements.search.addEventListener("input", event => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.query = event.target.value; state.mode = "all"; applyFilters(); }, 110);
  });
  elements.categoryFilters.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    state.mode = "all";
    applyFilters();
    toggleSidebar(false);
  });
  elements.levelFilter.addEventListener("change", event => { state.level = event.target.value; state.mode = "all"; applyFilters(); });
  elements.bookFilter.addEventListener("change", event => { state.book = event.target.value; state.mode = "all"; applyFilters(); });
  elements.referenceToggle.addEventListener("change", event => { state.includeReferences = event.target.checked; applyFilters(); });
  elements.reset.addEventListener("click", resetAll);
  elements.loadMore.addEventListener("click", () => { state.visible += 40; renderRecords(); });
  elements.list.addEventListener("click", event => {
    const button = event.target.closest("[data-record-id]");
    if (!button) return;
    const record = state.data.records.find(item => item.id === button.dataset.recordId);
    if (record) renderReader(record);
  });
  elements.closeReader.addEventListener("click", closeReader);
  elements.markStudied.addEventListener("click", () => {
    if (!state.selected) return;
    state.studied.has(state.selected.id) ? state.studied.delete(state.selected.id) : state.studied.add(state.selected.id);
    persist(); renderReader(state.selected);
  });
  elements.bookmarkRecord.addEventListener("click", () => {
    if (!state.selected) return;
    state.bookmarks.has(state.selected.id) ? state.bookmarks.delete(state.selected.id) : state.bookmarks.add(state.selected.id);
    persist(); renderReader(state.selected);
  });
  elements.bookmarksButton.addEventListener("click", () => { state.mode = state.mode === "bookmarks" ? "all" : "bookmarks"; applyFilters(); });
  elements.studiedButton.addEventListener("click", () => { state.mode = state.mode === "studied" ? "all" : "studied"; applyFilters(); });
  elements.mobileFilter.addEventListener("click", () => toggleSidebar(true));
  elements.closeFilters.addEventListener("click", () => toggleSidebar(false));
  elements.sidebarScrim.addEventListener("click", () => toggleSidebar(false));
  document.addEventListener("keydown", event => {
    if (!state.data) return;
    if (event.key === "/" && document.activeElement !== elements.search) { event.preventDefault(); elements.search.focus(); }
    if (event.key === "Escape") { if (state.selected) closeReader(); else toggleSidebar(false); }
  });
}

bindEvents();
elements.username.focus();
