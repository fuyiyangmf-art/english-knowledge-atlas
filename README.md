# English Knowledge Atlas

A compact, searchable English reference library published with GitHub Pages.

## Privacy model

The study dataset is not committed as readable JSON. It is compressed and encrypted with AES-256-GCM. The browser derives the decryption key from the username and password with PBKDF2-SHA256 (600,000 iterations), then decrypts the library locally after a successful sign-in.

No username, password, or plaintext source PDF is stored in this repository. A strong password is essential because a static encrypted site cannot prevent offline password attempts.

## Deployment

Every push to `main` deploys the contents of `public/` through the official GitHub Pages Actions workflow.
