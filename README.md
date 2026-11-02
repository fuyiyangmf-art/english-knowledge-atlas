# English Knowledge Atlas

An account-based American English learning platform with structured paths, cloud-synced bookmarks and progress, active recall, a complete course library, and English, Turkish, and Chinese interface modes.

## Privacy model

The study dataset is not committed as readable JSON. The repository contains one AES-256-GCM encrypted content bundle. After Firebase Authentication succeeds, the browser reads the content key from an authenticated-only Firestore document and decrypts the library locally.

No email, password, decryption key, plaintext dataset, or source PDF is stored in this repository. Anonymous visitors can download the encrypted bundle, but Firestore rules prevent them from reading the key.

Public registration is enabled through Firebase Authentication. Learner accounts have no GitHub, Firebase Console, deployment, rules, or site-editing permission. Firestore rules create every account with a protected `free` plan and restrict each learner's profile and progress to their own UID. Plan, status, and role fields cannot be changed by the learner client, so a trusted billing backend can safely add paid tiers later. Local browser progress is also namespaced by UID.

Password resets are sent through Firebase Authentication. Site administration remains in GitHub and the Firebase/Google console. Never commit the plaintext knowledge JSON, the content key, or any learner password.

## Deployment

Firebase Hosting is the production-ready deployment target. `firebase.json` serves `public/`, applies security headers, and deploys the Firestore rules used by registration and cloud progress.

Every push to `main` deploys a small redirect through the official GitHub Pages Actions workflow. The old `github.io` address forwards visitors to Firebase Hosting, so passwords and the future paid product are not served from GitHub Pages.

The site uses relative asset URLs and is ready for a custom domain. Configure the chosen domain in Firebase Hosting, add its DNS records, and add the domain to Firebase Authentication's authorized domains. See `CUSTOM_DOMAIN.md`.
