# PuzzlePaws Tower

PuzzlePaws Tower is an online shop for interactive dog treat puzzle toys. It helps keep dogs mentally stimulated, slows down fast eaters, and grows with your pup through three difficulty levels.

Built for the **Happy While Away (HWA) Hackathon** by Manish Singh.

## Features

- **Modular difficulty levels** — Easy, Medium, and Hard puzzle tiers that grow with your dog
- **Shop pages** — Home page with hero, gallery, and lifestyle sections; Product page with 4 items (Starter Tower, Add-on Level Pack, Treat Refill Pack, Mega Bundle)
- **Cart & Checkout** — Add to cart, quantity control, order form, and checkout flow
- **Order API** — `POST /api/order` endpoint to place and record orders
- **Responsive design** — Works on mobile and desktop

## Tech Stack

- **Next.js 14** (App Router, JavaScript)
- **Tailwind CSS** — Teal, orange, and yellow theme
- **Vercel** — Hosting and serverless functions

## Live Site

https://r20009a0410196-hwa-hackathon.vercel.app

## Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open `http://localhost:3000`.

## Pages

- `/` — Home page
- `/product` — Product shop with cart
- `/cart` — Shopping cart
- `/checkout` — Order placement
- `/api/order` — Order API (POST)
