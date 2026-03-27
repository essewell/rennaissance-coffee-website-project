# Renaissance Coffee Website

The official website for Renaissance Coffee, a family-owned coffee shop at SFU Burnaby since 1996.

## Tech Stack

- **Astro 5** — Static site generator (fast, zero JS by default)
- **Tailwind CSS 4** — Styling
- **Decap CMS** — Browser-based content editing at `/admin`
- **Netlify** — Hosting with CI/CD (free tier)

## Quick Start

```bash
npm install
npm run dev        # Local dev server at localhost:4321
npm run build      # Production build to ./dist/
npm run preview    # Preview production build locally
```

## Updating Content

### Via CMS (recommended for non-technical users)

1. Go to `renaissancecoffee.ca/admin`
2. Log in with Netlify Identity credentials
3. Edit menu items, hours, or site info
4. Click "Publish" — changes auto-deploy

### Via Code (for developers)

| Content         | File                   |
|----------------|------------------------|
| Menu items     | `src/data/menu.yml`    |
| Business hours | `src/data/hours.yml`   |
| Contact info   | `src/data/info.yml`    |
| Page text      | `src/pages/*.astro`    |
| Images         | `public/images/`       |

## Deployment (Netlify)

1. Push this repo to GitHub
2. Connect the repo on [netlify.com](https://netlify.com)
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Enable **Netlify Identity** in Site Settings → Identity
5. Enable **Git Gateway** in Identity → Services → Git Gateway
6. Invite the owner as an Identity user

## Domain Setup

Point `renaissancecoffee.ca` DNS to Netlify:
- Add domain in Netlify → Domain Settings
- Update nameservers at your registrar (Namecheap/Porkbun)

## Online Ordering

The `/order` page shows a "Coming Soon" state with a phone order CTA.
Once Square is set up, update `src/data/info.yml` with the `square_order_url`
and the Order page will automatically link to it.

## Pages

| Route          | Description                          |
|---------------|--------------------------------------|
| `/`           | Home — hero, intro, featured items   |
| `/menu`       | Full menu with categories            |
| `/story`      | 30-year history and timeline         |
| `/community`  | Scholarship and community impact     |
| `/contact`    | Map, hours, phone, Instagram         |
| `/order`      | Online ordering / phone order CTA    |
| `/admin`      | Decap CMS content manager            |
