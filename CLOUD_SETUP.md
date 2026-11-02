# Cloud progress setup

The site includes a Firebase Authentication and Firestore adapter. Until a project is configured, it keeps using browser-local progress.

Required Firebase configuration:

1. Enable Email/Password authentication. Public accounts are created by the site.
2. Create the default Firestore database and deploy `firestore.rules`.
3. Register `fuyiyangmf-art.github.io` and every future custom domain as authorized authentication domains.
4. Put the public web app values in `public/cloud-config.js`:

```js
window.EKA_CLOUD_CONFIG = {
  apiKey: "PUBLIC_FIREBASE_WEB_API_KEY",
  projectId: "FIREBASE_PROJECT_ID",
};
```

Firebase web configuration is public by design. Access is enforced by Authentication and Firestore rules. New profiles start on the protected `free` plan. Learners can read and write only their own profile/progress, while plan, status, role, content-key writes, and site administration remain server/admin controlled.
