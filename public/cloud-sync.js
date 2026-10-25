(() => {
  const config = window.EKA_CLOUD_CONFIG;
  let session = null;

  const available = () => Boolean(config?.apiKey && config?.projectId && config?.authEmail);

  async function request(url, options = {}) {
    const response = await fetch(url, options);
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(body?.error?.message || body?.error?.status || `Cloud request failed (${response.status})`);
      error.status = response.status;
      throw error;
    }
    return body;
  }

  async function refreshToken() {
    if (!session?.refreshToken) throw new Error("No cloud session");
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
    if (!session) throw new Error("No cloud session");
    if (Date.now() > session.expiresAt - 60_000) await refreshToken();
    return session.idToken;
  }

  function documentUrl() {
    return `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(config.projectId)}/databases/(default)/documents/users/${encodeURIComponent(session.uid)}/progress/state`;
  }

  async function loadProgress() {
    try {
      const doc = await request(documentUrl(), {headers: {Authorization: `Bearer ${await token()}`}});
      const raw = doc?.fields?.data?.stringValue;
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      if (error.status === 404) return null;
      throw error;
    }
  }

  async function signIn(username, password) {
    if (!available()) return {enabled: false, progress: null};
    if (config.username && username !== config.username) throw new Error("INVALID_LOGIN_CREDENTIALS");
    const auth = await request(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${encodeURIComponent(config.apiKey)}`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email: config.authEmail, password, returnSecureToken: true}),
    });
    session = {
      uid: auth.localId,
      idToken: auth.idToken,
      refreshToken: auth.refreshToken,
      expiresAt: Date.now() + Number(auth.expiresIn || 3600) * 1000,
    };
    return {enabled: true, progress: await loadProgress()};
  }

  async function saveProgress(progress) {
    if (!session) return false;
    await request(documentUrl(), {
      method: "PATCH",
      headers: {Authorization: `Bearer ${await token()}`, "Content-Type": "application/json"},
      body: JSON.stringify({fields: {
        schema: {integerValue: "1"},
        updatedAt: {timestampValue: new Date().toISOString()},
        data: {stringValue: JSON.stringify(progress)},
      }}),
    });
    return true;
  }

  function signOut() { session = null; }
  function isAuthenticated() { return Boolean(session); }

  window.EKACloud = {available, signIn, saveProgress, signOut, isAuthenticated};
})();
