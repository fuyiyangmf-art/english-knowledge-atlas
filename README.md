# English Knowledge Atlas

A private English learning site with structured paths, cloud-synced bookmarks and progress, active recall, a complete source library, and English, Turkish, and Chinese interface modes.

## Privacy model

The study dataset is not committed as readable JSON. The repository contains one AES-256-GCM encrypted content bundle. After Firebase Authentication succeeds, the browser reads the content key from an authenticated-only Firestore document and decrypts the library locally.

No email, password, decryption key, plaintext dataset, or source PDF is stored in this repository. Anonymous visitors can download the encrypted bundle, but Firestore rules prevent them from reading the key.

Anyone can create a learner account with an email and password. Learning accounts are Firebase Authentication users only: they have no GitHub, Firebase Console, deployment, rules, or site-editing permission. Firestore rules let authenticated learners read the shared content key and restrict each learner's profile and progress to their own UID. Local browser progress is also namespaced by UID.

Password resets are sent through Firebase Authentication. Site administration remains in GitHub and the Firebase/Google console. Never commit the plaintext knowledge JSON, the content key, or any learner password.

## Deployment

Every push to `main` deploys the contents of `public/` through the official GitHub Pages Actions workflow.
