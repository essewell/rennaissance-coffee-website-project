# Renaissance Coffee Website

A project website for Renaissance Coffee at SFU Burnaby

## Tech Stack

- **Astro 5** — Static site generator 
- **Tailwind CSS 4** — Styling
- **Decap CMS** — Browser-based content editing at `/admin`

## Quick Start

```bash
npm install
npm run dev        
npm run build      
npm run preview    
```

## Updating Content

### Via Code

| Content         | File                   |
|----------------|------------------------|
| Menu items     | `src/data/menu.yml`    |
| Business hours | `src/data/hours.yml`   |
| Contact info   | `src/data/info.yml`    |
| Page text      | `src/pages/*.astro`    |
| Images         | `public/images/`       |


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
