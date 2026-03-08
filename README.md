# CPO Landing — Next.js scaffold

Minimal Next.js + TypeScript landing page scaffold for a CPO project in Amsterdam.

Quick start

```bash
cd /Users/fabian/repos/groenebouwkracht_landingpage
npm install
npm run dev
```

The contact form posts to `/api/contact` uses SendGrid as email provider. We use cloudflare's turnstile for captcha

Setup

1. Create a SendGrid account and get an API key.
2. Verify a sender identity or domain in SendGrid.
3. Copy `.env.example` to `.env.local` and fill `SENDGRID_API_KEY`, `CONTACT_RECIPIENTS`, and `SENDER_EMAIL`.
4. Setup an accound on cloudflare, get the values for `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` from there and put them in env.local
4. Install dependencies and run the app.

Deploying to Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel and set the same environment variables in the Vercel dashboard.
3. Deploy — Vercel will build the Next.js app automatically.
