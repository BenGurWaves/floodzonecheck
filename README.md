# FloodZoneCheck

Instant FEMA flood zone lookup by address, plus ongoing monitoring to alert you when FEMA revises the flood map.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Database & Auth**: Supabase
- **Payments**: Stripe (Checkout)
- **Hosting**: Cloudflare Pages (via OpenNext)
- **Data**: FEMA National Flood Hazard Layer (ArcGIS REST API), U.S. Census Geocoder

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project
- A [Stripe](https://stripe.com) account (optional, for Pro plan)
- A [Cloudflare](https://cloudflare.com) account (for deployment)

### Environment Setup

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

Required environment variables:

| Variable | Where | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `.env.local` + Cloudflare Pages env | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `.env.local` + Cloudflare Pages env | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | `.env.local` + Cloudflare Pages env | Supabase service role key (server-only) |
| `STRIPE_SECRET_KEY` | `.env.local` + Cloudflare Pages env | Stripe secret key (server-only) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `.env.local` + Cloudflare Pages env | Stripe publishable key (client-safe) |
| `STRIPE_PRICE_ID` | `.env.local` + Cloudflare Pages env | Stripe Price ID for Pro plan |
| `STRIPE_WEBHOOK_SECRET` | `.env.local` + Cloudflare Pages env | Stripe webhook signing secret |
| `CRON_SECRET` | `.env.local` + Cloudflare Pages env | Random string for cron job auth |

### Supabase Setup

1. Create a new Supabase project
2. Go to the SQL Editor and run the contents of `supabase/schema.sql`
3. This creates all required tables, policies, and the auto-profile trigger

### Local Development

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

### Building for Production

```bash
npm run build
npm run start
```

### Building for Cloudflare Pages

```bash
npm run pages:build
npm run pages:dev       # Local Cloudflare preview
npm run pages:deploy    # Deploy to Cloudflare Pages
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata, JSON-LD
│   ├── page.tsx                # Home page with address lookup
│   ├── globals.css             # Design system tokens
│   ├── robots.ts               # Dynamic robots.txt
│   ├── sitemap.ts              # Dynamic sitemap.xml
│   ├── llms.txt/route.ts       # LLM-friendly site summary
│   ├── dashboard/page.tsx      # Tracked properties & alerts
│   ├── pricing/page.tsx        # Free & Pro plans
│   ├── about/page.tsx          # About & data source
│   ├── flood-zones/[state]/    # 50 state-specific SEO pages
│   └── api/
│       ├── lookup/route.ts     # Geocode + FEMA zone lookup
│       ├── track/route.ts      # Add/remove tracked properties
│       ├── dashboard/route.ts  # Dashboard data
│       ├── auth/               # Signup, login, logout
│       ├── stripe/             # Checkout & portal
│       └── check-changes/route.ts  # Scheduled re-check cron
├── components/                 # Header, Footer, AddressSearch, ZoneResult, etc.
└── lib/                        # Supabase, Stripe, FEMA, geocoder, types, constants
```

## Data Flow

1. User enters an address
2. Address is geocoded via U.S. Census Geocoder API
3. Coordinates are rounded to 3 decimal places and checked in the `zone_cache` table
4. If cached (< 30 days), the cached result is returned
5. If not cached, FEMA's NFHL ArcGIS REST service is queried
6. The result is classified into zone, SFHA status, BFE, and panel info
7. The result is cached and returned to the user

## Deployment Checklist

After deploying to `floodzonecheck.calyvent.com`:

1. Verify `https://floodzonecheck.calyvent.com/robots.txt` resolves
2. Verify `https://floodzonecheck.calyvent.com/sitemap.xml` resolves
3. Verify `https://floodzonecheck.calyvent.com/llms.txt` resolves
4. Verify favicon resolves at `/favicon.ico`, `/apple-touch-icon.png`
5. Add the property to Google Search Console
6. Submit the sitemap URL to Google Search Console

## Disclaimer

FloodZoneCheck is a free research tool using public FEMA data. It is not an official Standard Flood Hazard Determination. Lenders require a certified determination from a licensed provider. Zone boundaries can cross a single parcel — confirm exact risk and insurance requirements with FEMA or your insurer before relying on this for a purchase or insurance decision.
