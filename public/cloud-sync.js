(() => {
  const config = window.EKA_CLOUD_CONFIG;
  let session = null;

  const available = () => Boolean(config?.apiKey && config?.projectId);

  async function request(url, options = {}) {
    const response = await fetch(url, options);
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      const code = body?.error?.message || body?.error?.status || `CLOUD_${response.status}`;
      const error = new Error(code);
      error.code = code;
      error.status = response.status;
      throw error;
    }
    return body;
  }

  async function authRequest(endpoint, payload, headers = {}) {
    return request(`https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=${encodeURIComponent(config.apiKey)}`, {
      method: "POST",
      headers: {"Content-Type": "application/json", ...headers},
      body: JSON.stringify(payload),
    });
  }

  function setSession(auth, profile = {}) {
    session = {
      uid: auth.localId,
      email: auth.email || profile.email || "",
      displayName: auth.displayName || profile.displayName || "",
      idToken: auth.idToken,
      refreshToken: auth.refreshToken,
      expiresAt: Date.now() + Number(auth.expiresIn || 3600) * 1000,
    };
  }

  async function refreshToken() {
    if (!session?.refreshToken) throw new Error("NO_CLOUD_SESSION");
    const body = new URLSearchParams({grant_type: "refresh_token", refresh_token: session.refreshToken});
    const refreshed = await request(`https://securetoken.googleapis.com/v1/token?key=${encodeURIComponent(config.apiKey)}`, {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body,
    });
    session.idToken = refreshed.id_token;
    session.refreshToken = refreshed.refresh_token;
    session.expiresAt = Date.now() + Number(refreshed.expires_in || 3600) * 1000;
  }

  async function token() {
    if (!session) throw new Error("NO_CLOUD_SESSION");
    if (Date.now() > session.expiresAt - 60_000) await refreshToken();
    return session.idToken;
  }

  function firestoreUrl(path) {
    return `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(config.projectId)}/databases/(default)/documents/${path}`;
  }

  function progressUrl() {
    return firestoreUrl(`users/${encodeURIComponent(session.uid)}/progress/state`);
  }

  function profileUrl() {
    return firestoreUrl(`users/${encodeURIComponent(session.uid)}/profile/state`);
  }

  async function loadProgress() {
    try {
      const doc = await request(progressUrl(), {headers: {Authorization: `Bearer ${await token()}`}});
      const raw = doc?.fields?.data?.stringValue;
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      if (error.status === 404) return null;
      throw error;
    }
  }

  async function loadContentKey() {
    const doc = await request(firestoreUrl("config/content"), {headers: {Authorization: `Bearer ${await token()}`}});
    const contentKey = doc?.fields?.key?.stringValue;
    if (!contentKey) throw new Error("CONTENT_KEY_UNAVAILABLE");
    return contentKey;
  }

  async function saveProfile() {
    await request(profileUrl(), {
      method: "PATCH",
      headers: {Authorization: `Bearer ${await token()}`, "Content-Type": "application/json"},
      body: JSON.stringify({fields: {
        displayName: {stringValue: session.displayName},
        email: {stringValue: session.email},
        role: {stringValue: "learner"},
        updatedAt: {timestampValue: new Date().toISOString()},
      }}),
    });
  }

  async function finishAuthentication(auth, profile = {}, createProfile = false) {
    setSession(auth, profile);
    if (createProfile) await saveProfile();
    const [progress, contentKey] = await Promise.all([loadProgress(), loadContentKey()]);
    return {enabled: true, progress, contentKey, user: getUser()};
  }

  async function signUp(displayName, email, password) {
    if (!available()) throw new Error("CLOUD_UNAVAILABLE");
    const created = await authRequest("signUp", {email: email.trim(), password, returnSecureToken: true});
    const updated = await authRequest("update", {idToken: created.idToken, displayName: displayName.trim(), returnSecureToken: true});
    return finishAuthentication(updated, {email: email.trim(), displayName: displayName.trim()}, true);
  }

  async function signIn(email, password) {
    if (!available()) throw new Error("CLOUD_UNAVAILABLE");
    const auth = await authRequest("signInWithPassword", {email: email.trim(), password, returnSecureToken: true});
    return finishAuthentication(auth);
  }

  async function saveProgress(progress) {
    if (!session) return false;
    await request(progressUrl(), {
      method: "PATCH",
      headers: {Authorization: `Bearer ${await token()}`, "Content-Type": "application/json"},
      body: JSON.stringify({fields: {
        schema: {integerValue: "2"},
        updatedAt: {timestampValue: new Date().toISOString()},
        data: {stringValue: JSON.stringify(progress)},
      }}),
    });
    return true;
  }

  async function changePassword(currentPassword, newPassword) {
    if (!session?.email) throw new Error("NO_CLOUD_SESSION");
    const reauthenticated = await authRequest("signInWithPassword", {email: session.email, password: currentPassword, returnSecureToken: true});
    const previous = session;
    setSession(reauthenticated, previous);
    const updated = await authRequest("update", {idToken: await token(), password: newPassword, returnSecureToken: true});
    setSession(updated, previous);
    return true;
  }

  async function requestPasswordReset(email, language = "en") {
    const locale = {en: "en", tr: "tr", zh: "zh-CN"}[language] || "en";
    await authRequest("sendOobCode", {requestType: "PASSWORD_RESET", email: email.trim()}, {"X-Firebase-Locale": locale});
    return true;
  }

  function getUser() {
    if (!session) return null;
    return {uid: session.uid, email: session.email, displayName: session.displayName, role: "learner"};
  }

  function signOut() { session = null; }
  function isAuthenticated() { return Boolean(session); }

  window.EKACloud = {available, signUp, signIn, saveProgress, changePassword, requestPasswordReset, getUser, signOut, isAuthenticated};
})();
