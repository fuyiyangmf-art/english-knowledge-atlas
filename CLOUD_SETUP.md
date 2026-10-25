# Cloud progress setup

The site includes a Firebase Authentication and Firestore adapter. Until a project is configured, it keeps using browser-local progress.

Required Firebase configuration:

1. Enable Email/Password authentication and create the single Atlas user.
2. Create the default Firestore database and deploy `firestore.rules`.
3. Register `fuyiyangmf-art.github.io` as an authorized authentication domain.
4. Put the public web app values in `public/cloud-config.js`:

```js
window.EKA_CLOUD_CONFIG = {
  apiKey: "PUBLIC_FIREBASE_WEB_API_KEY",
  projectId: "FIREBASE_PROJECT_ID",
  authEmail: "ATLAS_ACCOUNT_EMAIL",
  username: "atlas-owner",
};
```

Firebase web configuration is public by design. Access is enforced by Authentication and the Firestore rules, which permit a signed-in user to read and write only their own progress document.
