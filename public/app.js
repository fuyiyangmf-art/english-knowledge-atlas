const CATEGORY_META = {
  Grammar: {zh:"语法体系", letter:"G", index:"01", accent:"#245f50", tint:"#e1eee8", description:"从时态、句法到高级结构，建立完整的英语语法框架。"},
  Vocabulary: {zh:"主题词汇", letter:"V", index:"02", accent:"#c66644", tint:"#f4e6df", description:"按照真实生活主题扩展词义、用法和表达范围。"},
  Collocations: {zh:"自然搭配", letter:"C", index:"03", accent:"#a87a27", tint:"#f3ecd9", description:"学习母语者习惯组合在一起使用的词语。"},
  Idioms: {zh:"习语表达", letter:"I", index:"04", accent:"#795477", tint:"#eee5ed", description:"理解常用习语的意义、语境和表达效果。"},
  "Phrasal Verbs": {zh:"短语动词", letter:"P", index:"05", accent:"#4f6f9e", tint:"#e4eaf2", description:"按意义和使用场景掌握高频短语动词。"},
};

const TOPICS = {
  Grammar: [
    ["tenses","时态与时间","Tenses & time",/present|past|future|tense|perfect|continuous|time\b|used to/i],
    ["modals","情态动词","Modal verbs",/modal|\bcan\b|could|may\b|might|must|should|would|need(?:n't| to)|ought|have to/i],
    ["conditionals","条件、愿望与假设","Conditionals & wishes",/condition|\bif\b|wish|would rather|hypothetical/i],
    ["passive","被动与使役","Passive & causative",/passive|causative|have something done|be done|being done/i],
    ["reported","转述与间接引语","Reported speech",/reported|reporting|indirect speech|said|told/i],
    ["questions","问句、否定与强调","Questions & emphasis",/question|negative|auxiliary|emphasis|do you|tag question|short answer/i],
    ["verb-patterns","动词形式与句型","Verb patterns",/infinitive|gerund|verb \+|doing|to do|participle|verb pattern/i],
    ["nouns","名词、冠词与限定词","Nouns & determiners",/noun|article|\ba\/an\b|\bthe\b|determiner|countable|uncountable|some|any|much|many|few|little/i],
    ["clauses","从句、关系词与连接","Clauses & linking",/clause|relative|who|which|that|conjunction|linking|although|because|despite/i],
    ["description","形容词、副词与比较","Description & comparison",/adjective|adverb|compar|superlative|too|enough|so |such /i],
    ["prepositions","介词与语序","Prepositions & word order",/preposition|word order|position|in at on|at in on/i],
    ["structures","其他核心结构","Other structures",/.*/i],
  ],
  Vocabulary: [
    ["people","人物、关系与性格","People & relationships",/people|person|family|relationship|friend|character|personality|appearance|feelings|emotion|love/i],
    ["work","工作、学习与商业","Work, study & business",/work|job|career|business|money|office|study|education|school|university|academic|employment/i],
    ["daily-life","日常生活与居家","Daily life & home",/home|house|daily|food|clothes|shopping|cooking|sleep|routine|leisure|hobby/i],
    ["travel","旅行、交通与地点","Travel & places",/travel|transport|journey|holiday|hotel|city|country|place|road|car|train|flight/i],
    ["health","身体、健康与医疗","Health & body",/health|body|illness|medicine|medical|doctor|hospital|sport|fitness/i],
    ["nature","自然、环境与动物","Nature & environment",/nature|environment|weather|animal|plant|earth|climate|sea|land/i],
    ["technology","科技、媒体与交流","Technology & media",/technology|computer|internet|media|phone|communication|news|film|television|music/i],
    ["society","社会、法律与文化","Society & culture",/society|law|crime|politic|government|culture|war|religion|community/i],
    ["concepts","抽象概念与语言","Ideas & language",/idea|thought|knowledge|language|word|meaning|change|cause|effect|problem|success/i],
    ["general","综合词汇","General vocabulary",/.*/i],
  ],
  Collocations: [
    ["concepts","概念、变化与程度","Concepts & change",/change|cause|effect|difference|degree|amount|quantity|quality|success|failure|problem|solution/i],
    ["people","人物、情绪与关系","People & feelings",/people|person|relationship|family|friend|emotion|feeling|behaviour|character/i],
    ["work","工作、学习与社会","Work & society",/work|job|business|study|education|money|law|crime|society|politic/i],
    ["daily","日常活动与生活","Everyday life",/home|food|travel|weather|health|sport|time|day|life|conversation/i],
    ["language","语言模式与固定组合","Language patterns",/verb|noun|adjective|adverb|preposition|collocation|word|expression/i],
    ["general","综合搭配","General collocations",/.*/i],
  ],
  Idioms: [
    ["feelings","情绪与态度","Feelings & attitudes",/feeling|emotion|happy|sad|angry|fear|attitude|mood/i],
    ["people","人物与关系","People & relationships",/people|person|relationship|family|friend|character|body/i],
    ["work","工作、成功与金钱","Work, success & money",/work|business|success|failure|money|job|career/i],
    ["communication","沟通、思考与观点","Communication & ideas",/communication|speaking|talk|think|idea|opinion|knowledge|understand/i],
    ["situations","行动、处境与变化","Actions & situations",/action|situation|problem|change|decision|effort|difficulty/i],
    ["time","时间、数量与程度","Time & degree",/time|number|amount|degree|speed|frequency/i],
    ["general","综合习语","General idioms",/.*/i],
  ],
  "Phrasal Verbs": [
    ["movement","移动、旅行与位置","Movement & travel",/move|travel|journey|come|go|get|take|bring|turn|place|position/i],
    ["communication","沟通、信息与思考","Communication & thinking",/communicat|talk|speak|write|read|think|find out|point out|information/i],
    ["work","工作、学习与事务","Work & study",/work|business|study|job|task|plan|deal|carry out|set up/i],
    ["people","人物、关系与情绪","People & relationships",/people|relationship|family|friend|feeling|emotion|social/i],
    ["change","变化、问题与解决","Change & problems",/change|problem|solution|break|fix|improve|reduce|increase|end|start/i],
    ["daily","日常行为","Everyday actions",/home|food|clothes|daily|clean|sleep|wake|eat|buy|use/i],
    ["patterns","助词规律与语法","Particles & patterns",/particle|grammar|noun|verb|adverb|meaning|register|formal|informal/i],
    ["general","综合短语动词","General phrasal verbs",/.*/i],
  ],
};

const LEVELS = ["All","Elementary","Pre-intermediate & Intermediate","Intermediate","Upper-intermediate","Advanced"];
const state = {
  data:null, records:[], view:"dashboard", category:"Grammar", topic:null, level:"All", lessonLimit:12,
  currentLesson:null, lessonOrigin:"path", recall:false, reviewIndex:0, reviewRevealed:false,
  bookId:null, bookLimit:18, cloudEnabled:false,
  completed:new Set(JSON.parse(localStorage.getItem("eka-v2-completed") || localStorage.getItem("eka-studied") || "[]")),
  review:new Set(JSON.parse(localStorage.getItem("eka-v2-review") || localStorage.getItem("eka-bookmarks") || "[]")),
  history:JSON.parse(localStorage.getItem("eka-v2-history") || "[]"),
  last:localStorage.getItem("eka-v2-last") || null,
};

const $ = selector => document.querySelector(selector);
const els = {
  loginView:$("#loginView"), appShell:$("#appShell"), loginForm:$("#loginForm"), username:$("#usernameInput"), password:$("#passwordInput"),
  togglePassword:$("#togglePassword"), loginButton:$("#loginButton"), loginError:$("#loginError"), logout:$("#logoutButton"),
  dashboard:$("#dashboardView"), path:$("#pathView"), lesson:$("#lessonView"), library:$("#libraryView"), review:$("#reviewView"),
  bookGrid:$("#bookGrid"), bookLessonGrid:$("#bookLessonGrid"), bookCurriculum:$("#bookCurriculum"),
  bookDetailMeta:$("#bookDetailMeta"), bookDetailTitle:$("#bookDetailTitle"), bookDetailCount:$("#bookDetailCount"), showMoreBook:$("#showMoreBookLessons"),
  coverageSeal:$("#coverageSeal"), coverageStrip:$("#coverageStrip"), syncStatus:$("#syncStatus"), securityNote:$("#securityNote"),
  today:$("#todayLabel"), continueCard:$("#continueCard"), progressStrip:$("#progressStrip"), pathGrid:$("#pathGrid"), reviewCallout:$("#reviewCallout"),
  pathHero:$("#pathHero"), levelTabs:$("#levelTabs"), topicGrid:$("#topicGrid"), topicSummary:$("#topicSummary"),
  curriculumTitle:$("#curriculumTitle"), curriculumCount:$("#curriculumCount"), lessonGrid:$("#lessonGrid"), showMore:$("#showMoreLessons"),
  lessonOutline:$("#lessonOutline"), lessonPage:$("#lessonPage"), reviewCount:$("#reviewCount"), reviewStage:$("#reviewStage"),
  openSearch:$("#openSearch"), searchDialog:$("#searchDialog"), closeSearch:$("#closeSearch"), searchInput:$("#searchInput"), searchResults:$("#searchResults"),
  progressText:$("#headerProgressText"), progressBar:$("#headerProgressBar"), toast:$("#toast"),
};

function escapeHTML(value="") { return String(value).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }
function normalize(value="") { return String(value).toLocaleLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,""); }
function repairWrappedTitle(record) {
  if (record.category!=="Vocabulary" || !/\b(?:and|or)$/i.test(record.title)) return record.title;
  const lines=record.content.split("\n").map(line=>line.replace(/\s+/g," ").trim()).filter(Boolean);
  if (!lines.length) return record.title;
  const unit=String(record.unit ?? ""), strip=value=>value.replace(new RegExp(`^\\s*${unit}\\s+`),"").replace(new RegExp(`\\s*${unit}\\s*$`),"").replace(/^[ .:\-–—]+|[ .:\-–—]+$/g,"");
  const first=strip(lines[0]);
  if (first.length>record.title.length && first.toLowerCase().startsWith(record.title.toLowerCase())) return first;
  if (first.toLowerCase()===record.title.toLowerCase() && lines[1]) {
    const continuation=strip(lines[1]);
    if (continuation.length>=2 && continuation.length<=70) return `${record.title} ${continuation}`;
  }
  return record.title;
}
function decodeBase64(value) { return Uint8Array.from(atob(value),c=>c.charCodeAt(0)); }
function unitRecords() { return state.records.filter(r=>r.kind === "unit"); }
function topicDefinition(category,id) { return TOPICS[category].find(t=>t[0]===id) || TOPICS[category].at(-1); }
function topicFor(record) {
  if (record.kind === "reference") return ["reference","参考资料","Reference material",/.*/];
  const topics = TOPICS[record.category];
  const specific = topics.slice(0,-1);
  const titleMatch = specific.find(topic=>topic[3].test(record.title));
  return titleMatch || topics.at(-1);
}
function percent(done,total) { return total ? Math.round(done/total*100) : 0; }
function dateKey(date=new Date()) { return new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Berlin",year:"numeric",month:"2-digit",day:"2-digit"}).format(date); }

async function decryptLibrary(username,password) {
  const config = await (await fetch("./data/auth.json",{cache:"no-store"})).json();
  const encrypted = await (await fetch(`./data/${config.file}`)).arrayBuffer();
  const material = await crypto.subtle.importKey("raw",new TextEncoder().encode(`${username}\u0000${password}`),"PBKDF2",false,["deriveKey"]);
  const key = await crypto.subtle.deriveKey({name:"PBKDF2",salt:decodeBase64(config.salt),iterations:config.iterations,hash:"SHA-256"},material,{name:"AES-GCM",length:256},false,["decrypt"]);
  const decrypted = await crypto.subtle.decrypt({name:"AES-GCM",iv:decodeBase64(config.iv),additionalData:new TextEncoder().encode(config.aad)},key,encrypted);
  const stream = new Blob([decrypted]).stream().pipeThrough(new DecompressionStream("gzip"));
  return JSON.parse(await new Response(stream).text());
}

function persist() {
  localStorage.setItem("eka-v2-completed",JSON.stringify([...state.completed]));
  localStorage.setItem("eka-v2-review",JSON.stringify([...state.review]));
  localStorage.setItem("eka-v2-history",JSON.stringify([...new Set(state.history)].slice(-120)));
  if (state.last) localStorage.setItem("eka-v2-last",state.last);
  renderHeaderProgress();
  scheduleCloudSave();
}

function renderHeaderProgress() {
  const units = unitRecords();
  const done = units.filter(r=>state.completed.has(r.id)).length;
  const value = percent(done,units.length);
  els.progressText.textContent = `${value}%`;
  els.progressBar.style.width = `${value}%`;
}

function studyStreak() {
  const dates = new Set(state.history);
  let streak=0;
  const cursor=new Date();
  if (!dates.has(dateKey(cursor))) cursor.setDate(cursor.getDate()-1);
  while (dates.has(dateKey(cursor))) { streak++; cursor.setDate(cursor.getDate()-1); }
  return streak;
}

function showToast(message) {
  els.toast.textContent=message; els.toast.hidden=false;
  clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>els.toast.hidden=true,1800);
}

function progressSnapshot() {
  return {
    completed:[...state.completed], review:[...state.review], history:[...new Set(state.history)].slice(-120),
    last:state.last, updatedAt:new Date().toISOString(),
  };
}

function setSyncStatus(status,label) {
  els.syncStatus.dataset.state=status;
  els.syncStatus.lastElementChild.textContent=label;
}

let cloudSaveTimer;
function scheduleCloudSave() {
  if (!state.cloudEnabled || !window.EKACloud?.isAuthenticated()) return;
  clearTimeout(cloudSaveTimer); setSyncStatus("syncing","同步中");
  cloudSaveTimer=setTimeout(async()=>{
    try { await window.EKACloud.saveProgress(progressSnapshot()); setSyncStatus("synced","已同步"); }
    catch(error) { setSyncStatus("error","等待同步"); }
  },600);
}

function setView(view) {
  state.view=view;
  [els.dashboard,els.path,els.lesson,els.library,els.review].forEach(section=>section.hidden=true);
  ({dashboard:els.dashboard,path:els.path,lesson:els.lesson,library:els.library,review:els.review}[view]).hidden=false;
  const activeNav=view==="lesson"?(state.lessonOrigin==="library"?"library":"paths"):(view==="path"?"paths":view);
  document.querySelectorAll("[data-nav]").forEach(button=>button.classList.toggle("active",button.dataset.nav===activeNav));
  window.scrollTo(0,0);
}

function nextLesson() {
  const units=unitRecords();
  if (state.last) {
    const lastIndex=units.findIndex(r=>r.id===state.last);
    if (lastIndex>=0 && !state.completed.has(units[lastIndex].id)) return units[lastIndex];
    for(let offset=1;offset<=units.length;offset++) { const candidate=units[(lastIndex+offset)%units.length]; if(!state.completed.has(candidate.id)) return candidate; }
  }
  return units.find(r=>!state.completed.has(r.id)) || units[0];
}

function renderDashboard() {
  setView("dashboard");
  history.replaceState(null,"","#home");
  const now=new Date();
  els.today.textContent=new Intl.DateTimeFormat("zh-CN",{timeZone:"Europe/Berlin",month:"long",day:"numeric",weekday:"long"}).format(now);
  const next=nextLesson();
  const topic=topicFor(next);
  els.continueCard.innerHTML=`<p class="eyebrow">继续学习 · ${escapeHTML(CATEGORY_META[next.category].zh)}</p><h2>${escapeHTML(next.title)}</h2><p>${escapeHTML(topic[1])} · ${escapeHTML(next.level)} · Unit ${escapeHTML(next.unit)}</p><button type="button" data-open-lesson="${next.id}">继续这一课 →</button>`;
  const units=unitRecords(), done=units.filter(r=>state.completed.has(r.id)).length;
  els.progressStrip.innerHTML=`
    <div class="stat-cell"><strong>${percent(done,units.length)}%</strong><span>总体完成度</span></div>
    <div class="stat-cell"><strong>${done}</strong><span>已完成课程</span></div>
    <div class="stat-cell"><strong>${state.review.size}</strong><span>等待复习</span></div>
    <div class="stat-cell"><strong>${studyStreak()}</strong><span>连续学习天数</span></div>`;
  els.pathGrid.innerHTML=Object.entries(CATEGORY_META).map(([category,meta])=>{
    const lessons=units.filter(r=>r.category===category), completed=lessons.filter(r=>state.completed.has(r.id)).length, value=percent(completed,lessons.length);
    return `<button class="path-card" type="button" data-open-path="${category}" data-letter="${meta.letter}" style="--accent:${meta.accent};--tint:${meta.tint}"><span class="path-index">${meta.index} · ${category}</span><h3>${meta.zh}</h3><p>${meta.description}</p><footer><span>${completed}/${lessons.length} 课</span><i class="mini-progress"><b style="width:${value}%"></b></i></footer></button>`;
  }).join("");
  const reviewCount=state.review.size;
  els.reviewCallout.innerHTML=`<p class="eyebrow">Review queue</p><h2>${reviewCount?`${reviewCount} 个知识点等你复习`:"复习队列还是空的"}</h2><p>${reviewCount?"先主动回忆，再查看完整讲解。答对的知识点会标记为完成。":"学习课程时点击“加入复习”，这里就会生成回忆卡片。"}</p><button type="button" data-nav="review">${reviewCount?"开始复习 →":"了解复习模式 →"}</button>`;
  persist();
}

function bookRecords(bookId) { return state.records.filter(record=>record.bookId===bookId); }

function renderLibrary() {
  setView("library");
  if (!state.bookId || !state.data.books.some(book=>book.id===state.bookId)) state.bookId=state.data.books[0]?.id || null;
  history.replaceState(null,"",`#library=${encodeURIComponent(state.bookId || "")}`);
  const units=unitRecords(), references=state.records.filter(record=>record.kind==="reference");
  els.coverageStrip.innerHTML=`
    <div class="coverage-stat"><strong>${state.data.books.length}</strong><span>本原书</span></div>
    <div class="coverage-stat"><strong>${units.length.toLocaleString()}</strong><span>正式单元</span></div>
    <div class="coverage-stat"><strong>${references.length}</strong><span>附录与参考页</span></div>
    <div class="coverage-stat"><strong>${state.records.length.toLocaleString()}</strong><span>知识记录总数</span></div>`;
  els.bookGrid.innerHTML=state.data.books.map(book=>{
    const records=bookRecords(book.id), lessons=records.filter(record=>record.kind==="unit");
    const done=lessons.filter(record=>state.completed.has(record.id)).length;
    return `<button class="book-card ${book.id===state.bookId?"active":""}" type="button" data-open-book="${book.id}"><span>${escapeHTML(book.category)} · ${escapeHTML(book.level)}</span><h3>${escapeHTML(book.title)}</h3><p>${lessons.length} 个单元${records.length-lessons.length?` · ${records.length-lessons.length} 页参考资料`:""}</p><footer><b>${percent(done,lessons.length)}%</b><i><em style="width:${percent(done,lessons.length)}%"></em></i></footer></button>`;
  }).join("");
  renderBookCurriculum();
}

function renderBookCurriculum() {
  const book=state.data.books.find(item=>item.id===state.bookId); if(!book) return;
  const records=bookRecords(book.id), lessons=records.filter(record=>record.kind==="unit"), references=records.filter(record=>record.kind==="reference");
  els.bookDetailMeta.textContent=`${book.category} · ${book.level}`;
  els.bookDetailTitle.textContent=book.title;
  els.bookDetailCount.textContent=`${lessons.length} 个单元${references.length?` + ${references.length} 页参考资料`:""}`;
  els.bookLessonGrid.style.cssText=`--category-accent:${CATEGORY_META[book.category].accent}`;
  els.bookLessonGrid.innerHTML=records.slice(0,state.bookLimit).map(record=>`<button class="lesson-card ${state.completed.has(record.id)?"complete":""}" type="button" data-open-lesson="${record.id}"><span class="lesson-number">${record.kind==="unit"?`Unit ${escapeHTML(record.unit)}`:"Reference"}</span>${state.completed.has(record.id)?'<span class="lesson-check">✓</span>':""}<h3>${escapeHTML(record.title)}</h3><p>PDF page ${record.sourcePage}${record.ocr?" · OCR":""}</p></button>`).join("");
  els.showMoreBook.hidden=state.bookLimit>=records.length;
}

function categoryRecords(category,{unitsOnly=false}={}) { return state.records.filter(r=>r.category===category && (!unitsOnly||r.kind==="unit")); }
function topicStats(category,level) {
  const source=categoryRecords(category).filter(r=>level==="All"||r.level===level);
  const map=new Map();
  source.forEach(record=>{ const topic=topicFor(record); if(!map.has(topic[0])) map.set(topic[0],{topic,records:[]}); map.get(topic[0]).records.push(record); });
  return [...map.values()];
}

function renderPath() {
  setView("path");
  history.replaceState(null,"",`#path=${encodeURIComponent(state.category)}&level=${encodeURIComponent(state.level)}`);
  const meta=CATEGORY_META[state.category];
  const categoryUnits=categoryRecords(state.category,{unitsOnly:true});
  const complete=categoryUnits.filter(r=>state.completed.has(r.id)).length;
  els.pathHero.style.cssText=`--accent:${meta.accent};--tint:${meta.tint}`;
  els.pathHero.innerHTML=`<div><button class="back-button" type="button" data-nav="dashboard">← 返回学习主页</button><p class="eyebrow">${state.category} learning path</p><h1>${meta.zh}</h1><p>${meta.description} 已按主题和难度重新组织，不再按照搜索结果堆成长列表。</p></div><div class="path-progress"><span>路径完成度</span><strong>${percent(complete,categoryUnits.length)}%</strong><i><b style="width:${percent(complete,categoryUnits.length)}%"></b></i></div>`;
  els.levelTabs.innerHTML=LEVELS.map(level=>`<button type="button" class="${level===state.level?"active":""}" data-level="${escapeHTML(level)}">${level==="All"?"全部难度":escapeHTML(level)}</button>`).join("");
  const stats=topicStats(state.category,state.level);
  if (!state.topic || !stats.some(s=>s.topic[0]===state.topic)) state.topic=stats[0]?.topic[0] || null;
  els.topicSummary.textContent=`${stats.length} 个主题`;
  els.topicGrid.style.cssText=`--category-accent:${meta.accent};--category-tint:${meta.tint}`;
  els.topicGrid.innerHTML=stats.map(({topic,records})=>{
    const lessons=records.filter(r=>r.kind==="unit"), done=lessons.filter(r=>state.completed.has(r.id)).length;
    return `<button class="topic-card ${state.topic===topic[0]?"active":""}" type="button" data-topic="${topic[0]}"><span>${topic[2]}</span><h3>${topic[1]}</h3><p>${lessons.length} 课${done?` · 已完成 ${done}`:""}${records.some(r=>r.kind==="reference")?` · 含参考资料`:""}</p></button>`;
  }).join("");
  renderCurriculum();
}

function renderCurriculum() {
  const meta=CATEGORY_META[state.category];
  const records=categoryRecords(state.category).filter(r=>(state.level==="All"||r.level===state.level) && topicFor(r)[0]===state.topic);
  const topic=records[0]?topicFor(records[0]):["","课程单元","Lessons"];
  els.curriculumTitle.textContent=topic[1];
  els.curriculumCount.textContent=`${records.length} 个知识单元`;
  els.lessonGrid.style.cssText=`--category-accent:${meta.accent}`;
  els.lessonGrid.innerHTML=records.slice(0,state.lessonLimit).map(record=>`<button class="lesson-card ${state.completed.has(record.id)?"complete":""}" type="button" data-open-lesson="${record.id}"><span class="lesson-number">${record.kind==="unit"?`Unit ${escapeHTML(record.unit)}`:"Reference"}</span>${state.completed.has(record.id)?'<span class="lesson-check">✓</span>':""}<h3>${escapeHTML(record.title)}</h3><p>${escapeHTML(record.level)} · ${escapeHTML(record.bookTitle)}</p></button>`).join("");
  els.showMore.hidden=state.lessonLimit>=records.length;
}

function relatedLessons(record) {
  if (state.lessonOrigin==="library") return bookRecords(record.bookId);
  const topicId=topicFor(record)[0];
  return state.records.filter(r=>r.category===record.category && topicFor(r)[0]===topicId && r.level===record.level);
}

function openLesson(id) {
  const record=state.records.find(r=>r.id===id); if(!record) return;
  if (state.view!=="lesson") state.lessonOrigin=state.view==="library"?"library":"path";
  state.currentLesson=record; state.last=id; state.recall=false;
  persist(); setView("lesson"); renderLesson();
  history.replaceState(null,"",`#lesson=${encodeURIComponent(id)}`);
}

function renderLesson() {
  const record=state.currentLesson, meta=CATEGORY_META[record.category], topic=topicFor(record), related=relatedLessons(record), index=related.findIndex(r=>r.id===record.id);
  const nearby=related.slice(Math.max(0,index-3),Math.min(related.length,index+5));
  const back=state.lessonOrigin==="library"?`<button class="back-button" type="button" data-back-library>← ${escapeHTML(record.bookTitle)}</button>`:`<button class="back-button" type="button" data-back-path>← ${escapeHTML(meta.zh)}</button>`;
  els.lessonOutline.innerHTML=`${back}<p class="outline-label">${state.lessonOrigin==="library"?"原书顺序":escapeHTML(topic[1])}</p>${nearby.map(r=>`<button class="outline-item ${r.id===record.id?"active":""}" type="button" data-open-lesson="${r.id}"><span class="${state.completed.has(r.id)?"done":""}">${state.completed.has(r.id)?"✓":r.kind==="unit"?escapeHTML(r.unit):"·"}</span><span>${escapeHTML(r.title)}</span></button>`).join("")}`;
  const body=state.recall?`<div class="recall-panel"><span>Active recall</span><h2>不看讲解，你能说出“${escapeHTML(record.title)}”的核心规则和一个例句吗？</h2><p>先在脑中或大声复述，再揭晓完整内容。</p><button type="button" data-reveal-lesson>查看完整讲解</button></div>`:`<div class="lesson-content">${escapeHTML(record.content)}</div>`;
  const previous=related[index-1], next=related[index+1];
  els.lessonPage.innerHTML=`<div class="lesson-actions"><button class="${state.recall?"active":""}" type="button" data-toggle-recall>${state.recall?"退出回忆":"回忆模式"}</button><button class="${state.review.has(record.id)?"active":""}" type="button" data-toggle-review>${state.review.has(record.id)?"已加入复习":"加入复习"}</button><button class="${state.completed.has(record.id)?"active":""}" type="button" data-complete-lesson>${state.completed.has(record.id)?"已完成 ✓":"标记完成"}</button></div><p class="lesson-breadcrumb">${escapeHTML(record.category)} · ${escapeHTML(topic[1])} · ${escapeHTML(record.level)}</p><h1>${escapeHTML(record.title)}</h1><p class="lesson-source">${escapeHTML(record.bookTitle)} · PDF page ${record.sourcePage}${record.ocr?" · OCR": ""}</p>${body}<nav class="lesson-nav">${previous?`<button type="button" data-open-lesson="${previous.id}"><small>← 上一课</small>${escapeHTML(previous.title)}</button>`:"<span></span>"}${next?`<button type="button" data-open-lesson="${next.id}"><small>下一课 →</small>${escapeHTML(next.title)}</button>`:""}</nav>`;
}

function completeCurrent() {
  const id=state.currentLesson.id;
  if(state.completed.has(id)) { state.completed.delete(id); showToast("已取消完成标记"); }
  else { state.completed.add(id); state.history.push(dateKey()); showToast("课程已完成"); }
  persist(); renderLesson();
}
function toggleCurrentReview() {
  const id=state.currentLesson.id;
  if(state.review.has(id)) { state.review.delete(id); showToast("已移出复习队列"); }
  else { state.review.add(id); showToast("已加入复习队列"); }
  persist(); renderLesson();
}

function reviewQueue() { return [...state.review].map(id=>state.records.find(r=>r.id===id)).filter(Boolean); }
function renderReview() {
  setView("review");
  history.replaceState(null,"","#review");
  const queue=reviewQueue();
  els.reviewCount.textContent=`${queue.length} 张卡片`;
  if(!queue.length) { els.reviewStage.innerHTML=`<div class="empty-review"><h2>复习队列还是空的</h2><p>进入任意课程，点击“加入复习”。之后你可以在这里逐张回忆。</p><button type="button" data-nav="paths">去选择学习路径</button></div>`; return; }
  if(state.reviewIndex>=queue.length) state.reviewIndex=0;
  const record=queue[state.reviewIndex],topic=topicFor(record);
  els.reviewStage.innerHTML=`<article class="review-card"><p class="review-meta">${escapeHTML(record.category)} · ${escapeHTML(topic[1])} · ${state.reviewIndex+1}/${queue.length}</p><h2>${escapeHTML(record.title)}</h2>${state.reviewRevealed?`<div class="review-answer">${escapeHTML(record.content)}</div><div class="review-controls"><button class="again-button" type="button" data-review-again>还不熟，再来一次</button><button class="known-button" type="button" data-review-known>记住了 ✓</button></div>`:`<div class="review-prompt">请先复述：它是什么意思？什么时候使用？你能不能自己造一个例句？</div><div class="review-controls"><button class="reveal-button" type="button" data-review-reveal>揭晓答案</button></div>`}</article>`;
}

function openSearch() { els.searchDialog.showModal(); els.searchInput.value=""; els.searchResults.innerHTML='<p class="search-hint">输入关键词开始搜索。搜索只是辅助入口，学习顺序请从“学习路径”进入。</p>'; requestAnimationFrame(()=>els.searchInput.focus()); }
function renderSearch(query) {
  const normalized=normalize(query.trim());
  if(!normalized) { els.searchResults.innerHTML='<p class="search-hint">输入关键词开始搜索。搜索只是辅助入口，学习顺序请从“学习路径”进入。</p>'; return; }
  const matches=state.records.filter(r=>r._search.includes(normalized)).slice(0,20);
  els.searchResults.innerHTML=matches.length?matches.map(record=>`<button class="search-result" type="button" data-search-lesson="${record.id}"><span><strong>${escapeHTML(record.title)}</strong><small>${escapeHTML(CATEGORY_META[record.category].zh)} · ${escapeHTML(topicFor(record)[1])} · ${escapeHTML(record.level)}</small></span><span>→</span></button>`).join(""):'<p class="search-hint">没有找到匹配内容，试试更短的关键词。</p>';
}

function mergeCloudProgress(remote) {
  if (!remote) return;
  const valid=new Set(state.records.map(record=>record.id));
  state.completed=new Set([...state.completed,...(remote.completed||[])].filter(id=>valid.has(id)));
  state.review=new Set([...state.review,...(remote.review||[])].filter(id=>valid.has(id)));
  state.history=[...new Set([...state.history,...(remote.history||[])])].slice(-120);
  state.last=remote.last && valid.has(remote.last)?remote.last:state.last;
}

function initialize(data,cloud={enabled:false,progress:null}) {
  state.data=data; state.records=data.records;
  state.records.forEach(record=>{ record.title=repairWrappedTitle(record); record._search=normalize(`${record.title} ${record.bookTitle} ${record.category} ${record.level} ${record.content}`); });
  state.cloudEnabled=Boolean(cloud.enabled); mergeCloudProgress(cloud.progress);
  setSyncStatus("synced","已同步");
  if (!state.cloudEnabled) setSyncStatus("local","本机保存");
  els.loginView.hidden=true; els.appShell.hidden=false; window.scrollTo(0,0);
  const lessonHash=location.hash.match(/^#lesson=(.+)$/);
  const route=new URLSearchParams(location.hash.replace(/^#/,""));
  const routeCategory=route.get("path"), routeLevel=route.get("level"), routeBook=route.get("library");
  if(lessonHash && state.records.some(r=>r.id===decodeURIComponent(lessonHash[1]))) openLesson(decodeURIComponent(lessonHash[1]));
  else if(location.hash==="#review") renderReview();
  else if(routeBook && state.data.books.some(book=>book.id===routeBook)) { state.bookId=routeBook; state.bookLimit=18; renderLibrary(); }
  else if(routeCategory && CATEGORY_META[routeCategory]) { state.category=routeCategory; state.level=LEVELS.includes(routeLevel)?routeLevel:"All"; state.topic=null; renderPath(); }
  else renderDashboard();
}

function lockLibrary() {
  clearTimeout(cloudSaveTimer); window.EKACloud?.signOut(); state.cloudEnabled=false; setSyncStatus("local","本机保存");
  state.data=null; state.records=[]; state.currentLesson=null;
  els.password.value=""; els.appShell.hidden=true; els.loginView.hidden=false;
  history.replaceState(null,"",location.pathname); window.scrollTo(0,0); requestAnimationFrame(()=>els.username.focus());
}

function bindEvents() {
  els.loginForm.addEventListener("submit",async event=>{
    event.preventDefault(); els.loginError.hidden=true; els.loginButton.disabled=true; els.loginButton.firstElementChild.textContent="正在验证并解密……";
    try {
      const username=els.username.value.trim(), password=els.password.value;
      const [data,cloud]=await Promise.all([decryptLibrary(username,password),window.EKACloud.signIn(username,password)]);
      initialize(data,cloud); els.password.value="";
    }
    catch(error) { els.loginError.textContent="用户名或密码不正确，或暂时无法连接云端。"; els.loginError.hidden=false; els.password.select(); }
    finally { els.loginButton.disabled=false; els.loginButton.firstElementChild.textContent="进入学习空间"; }
  });
  els.togglePassword.addEventListener("click",()=>{ const shown=els.password.type==="text"; els.password.type=shown?"password":"text"; els.togglePassword.textContent=shown?"显示":"隐藏"; });
  els.logout.addEventListener("click",lockLibrary);
  document.addEventListener("click",event=>{
    const nav=event.target.closest("[data-nav]");
    if(nav) { const target=nav.dataset.nav; if(target==="dashboard") renderDashboard(); if(target==="paths") { state.category="Grammar"; state.topic=null; state.level="All"; state.lessonLimit=12; renderPath(); } if(target==="library") { state.bookLimit=18; renderLibrary(); } if(target==="review") { state.reviewRevealed=false; renderReview(); } return; }
    const path=event.target.closest("[data-open-path]"); if(path) { state.category=path.dataset.openPath; state.topic=null; state.level="All"; state.lessonLimit=12; renderPath(); return; }
    const book=event.target.closest("[data-open-book]"); if(book) { state.bookId=book.dataset.openBook; state.bookLimit=18; renderLibrary(); requestAnimationFrame(()=>els.bookCurriculum.scrollIntoView({behavior:"smooth",block:"start"})); return; }
    const lesson=event.target.closest("[data-open-lesson]"); if(lesson) { openLesson(lesson.dataset.openLesson); return; }
    const level=event.target.closest("[data-level]"); if(level) { state.level=level.dataset.level; state.topic=null; state.lessonLimit=12; renderPath(); return; }
    const topic=event.target.closest("[data-topic]"); if(topic) { state.topic=topic.dataset.topic; state.lessonLimit=12; renderPath(); requestAnimationFrame(()=>$("#curriculumSection").scrollIntoView({behavior:"smooth",block:"start"})); return; }
    if(event.target.closest("[data-back-path]")) { state.category=state.currentLesson.category; state.topic=topicFor(state.currentLesson)[0]; state.level=state.currentLesson.level; state.lessonLimit=12; renderPath(); return; }
    if(event.target.closest("[data-back-library]")) { state.bookId=state.currentLesson.bookId; state.bookLimit=18; renderLibrary(); return; }
    if(event.target.closest("[data-toggle-recall]")) { state.recall=!state.recall; renderLesson(); return; }
    if(event.target.closest("[data-reveal-lesson]")) { state.recall=false; renderLesson(); return; }
    if(event.target.closest("[data-complete-lesson]")) { completeCurrent(); return; }
    if(event.target.closest("[data-toggle-review]")) { toggleCurrentReview(); return; }
    if(event.target.closest("[data-review-reveal]")) { state.reviewRevealed=true; renderReview(); return; }
    if(event.target.closest("[data-review-known]")) { const queue=reviewQueue(); const record=queue[state.reviewIndex]; if(record){ state.completed.add(record.id); state.review.delete(record.id); state.history.push(dateKey()); persist(); } state.reviewRevealed=false; renderReview(); return; }
    if(event.target.closest("[data-review-again]")) { state.reviewIndex=(state.reviewIndex+1)%reviewQueue().length; state.reviewRevealed=false; renderReview(); return; }
    const searchLesson=event.target.closest("[data-search-lesson]"); if(searchLesson) { els.searchDialog.close(); openLesson(searchLesson.dataset.searchLesson); }
  });
  els.showMore.addEventListener("click",()=>{ state.lessonLimit+=12; renderCurriculum(); });
  els.showMoreBook.addEventListener("click",()=>{ state.bookLimit+=18; renderBookCurriculum(); });
  els.openSearch.addEventListener("click",openSearch); els.closeSearch.addEventListener("click",()=>els.searchDialog.close());
  els.searchInput.addEventListener("input",event=>renderSearch(event.target.value));
  els.searchDialog.addEventListener("click",event=>{ if(event.target===els.searchDialog) els.searchDialog.close(); });
  document.addEventListener("keydown",event=>{ if(!state.data)return; if(event.key==="/"&&!els.searchDialog.open){event.preventDefault();openSearch();} if(event.key==="Escape"&&els.searchDialog.open)els.searchDialog.close(); });
}

if (window.EKACloud?.available()) {
  els.securityNote.lastChild.textContent=" 教材内容只在浏览器内解密；学习进度会加密传输并绑定云端账号。";
} else {
  els.securityNote.lastChild.textContent=" 教材内容只在浏览器内解密；云同步启用前继续保存在本机。";
}
bindEvents(); els.username.focus();
