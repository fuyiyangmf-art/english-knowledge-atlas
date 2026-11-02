# Custom domain and paid-plan readiness

The application is domain-independent: assets and routes use relative URLs, so no code rewrite is required when moving away from `github.io`.

## Connect a domain

1. Buy or select the final domain (a short `.com` is the preferred commercial default).
2. In Firebase Console: **Hosting → Add custom domain**, enter the domain and complete ownership verification.
3. Add the DNS records shown by Firebase and wait for the HTTPS certificate to become available.
4. Add both the apex and `www` forms that will serve the site to Firebase Authentication's authorized domains.
5. Update canonical/Open Graph URLs when the final domain is known, then test registration, login, password reset, encrypted-content access, and progress sync from the final HTTPS domain.

Do not add placeholder DNS or a fake `CNAME`: the final value must be a domain the owner controls.

GitHub Pages remains useful as a development preview, but it must not be the primary host for an online business, e-commerce flow, or commercial SaaS. The production deployment therefore uses Firebase Hosting.

## Add paid plans later

New accounts are created with `role=learner`, `plan=free`, and `status=active`. Firestore rules prevent browser clients from changing those access fields.

When payments are added, use a trusted server or payment webhook to change `plan` to `premium` or `lifetime`. Never unlock paid access from client-side JavaScript alone. Before accepting money, add final business identity/contact details, privacy terms, purchase terms, refund rules, and tax handling for the launch market.
