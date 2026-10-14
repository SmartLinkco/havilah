# Havilah Agro Ghana Limited

Website for Havilah Agro Ghana Limited, an export-focused, sustainable farm. The site builds trust with buyers, partners and investors, and takes orders and inquiries directly.

## Brand

The official logo is the leaf-and-globe mark: a leaf whose veins curve into globe lines.

Brand kit ready 14 October 2026:

- Logo versions (stacked, horizontal, reversed, mono, and the mark)
- Palette: deep green `#1E5631`, harvest gold `#C9A13B`, soil brown `#6B4A2E`, cream `#F7F3EA`
- Montserrat for headings and Inter for body
- Favicon, app icons, a 1200×630 social image, and brand guidelines

Gold (`#C9A13B`) is used for rules, icons and large text. It is not used for small text on white or cream, because that pairing fails contrast.

## Stack

Next.js (App Router), TypeScript and Tailwind, hosted on Vercel. The contact and quote forms post to `/api/inquiry`, which sends through Resend.

Copy and structured data live in `src/content/*.ts`. Swapping in the farm’s real text is a content change.

## Develop

```bash
npm install
cp .env.example .env.local
npm run dev
```

`npm run build` produces the production build. `npm run lint` runs ESLint.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical origin for metadata, the sitemap and Open Graph. Falls back to `https://$VERCEL_URL`, then `http://localhost:3000`. |
| `RESEND_API_KEY` | Yes, to send mail | Resend API key. |
| `INQUIRY_TO_EMAIL` | Yes, to send mail | Inbox that receives inquiries and quote requests. Default: `info@havilahagroghana.com`. |
| `INQUIRY_FROM_EMAIL` | Yes, to send mail | Verified From address, for example `Havilah Agro <inquiries@yourdomain.com>`. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | No | Shows the Cloudflare Turnstile widget when set. |
| `TURNSTILE_SECRET_KEY` | No | Verifies the Turnstile token. If unset, the server skips the check. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID (`G-XXXXXXXX`). Omitted when empty. |

If `RESEND_API_KEY`, `INQUIRY_TO_EMAIL` or `INQUIRY_FROM_EMAIL` is missing, the form does not claim success. It returns a message that points the buyer to WhatsApp.

The route also sets Reply-To to the buyer, sends a short acknowledgement back to them, rejects a filled honeypot, validates on the server, and rate-limits each IP to 5 requests in 15 minutes. The limit is kept in memory on that server instance.

Verify the sending domain in Resend (SPF, DKIM, and a DMARC record) before launch so mail is less likely to be treated as spam.

## Pages

Home, About, Farm & Produce, Sustainability, Partners & Certifications, Gallery, Contact, and Privacy. Also a 404 page, `sitemap.xml` and `robots.txt`.

## Still placeholder

- The tagline is “Rooted in Ghana, Reaching the World”
- Partner logos, certificates, and any sustainability photographs (the home, about, produce and gallery photographs are in place)
- Acreage, export volume and seasons
- Partner logos (none, until written permission) and certifications (none, until a certificate is confirmed)
- The public email is info@havilahagroghana.com (shown with the phone, WhatsApp, postal address and farm map)
- Social profile links
- The Resend inbox, Turnstile keys, Analytics ID and the public site URL, until they are set in the environment

The leaf-and-globe logo is the official mark, not a placeholder.
