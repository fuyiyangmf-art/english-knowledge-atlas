# English Knowledge Atlas

A private English learning site with structured paths, active recall, a complete source library, and English, Turkish, and Chinese interface modes.

## Privacy model

The study dataset is not committed as readable JSON. Each approved learner receives an independently encrypted AES-256-GCM bundle. The browser derives that account's decryption key from its username and password with PBKDF2-SHA256 (600,000 iterations), then decrypts the library locally after a successful sign-in.

No username, password, or plaintext source PDF is stored in this repository. A strong password is essential because a static encrypted site cannot prevent offline password attempts.

Learning accounts are Firebase Authentication users only. They have no GitHub, Firebase Console, deployment, rules, or site-editing permission. Firestore rules restrict every learner to their own progress document, and local browser progress is also namespaced by username.

Adding another learner requires three coordinated changes: create the Firebase Authentication user, add its public username-to-auth-email mapping, and generate a new account-specific encrypted bundle from the private source dataset. Never commit the plaintext knowledge JSON or any learner password.

## Deployment

Every push to `main` deploys the contents of `public/` through the official GitHub Pages Actions workflow.
