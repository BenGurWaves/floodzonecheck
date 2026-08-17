import { NextResponse } from "next/server";

const content = `# FloodZoneCheck

## What is FloodZoneCheck?
FloodZoneCheck is a free web tool for looking up FEMA flood zones by U.S. address and monitoring properties for flood map changes. It pulls data directly from FEMA's National Flood Hazard Layer (NFHL) via the ArcGIS REST API — the same authoritative source used by certified flood determination providers.

## Core Features
- **Instant flood zone lookup**: Enter any U.S. address to get the FEMA flood zone designation (AE, X, VE, etc.), whether the property is in a Special Flood Hazard Area, base flood elevation, and the FEMA panel reference.
- **Change monitoring**: Save a property to a free account and FloodZoneCheck re-checks it against the live NFHL layer on a regular cycle. If FEMA revises the zone, the owner is alerted.
- **State-specific flood information**: Each U.S. state has a dedicated page covering flood risk landscape, most flood-prone counties, insurance cost context, and FAQs.
- **Pricing**: Unlimited searches are free. A Pro plan ($5.99/month or $49/year) adds unlimited tracked properties, priority alerts, and downloadable PDF summaries.

## Key Pages
- [/](https://floodzonecheck.calyvent.com/) — Home page with address lookup tool
- [/pricing](https://floodzonecheck.calyvent.com/pricing) — Free and Pro plan details
- [/about](https://floodzonecheck.calyvent.com/about) — Data source, methodology, disclaimer
- [/flood-zones/[state]](https://floodzonecheck.calyvent.com/flood-zones/florida) — State-specific flood zone information (all 50 states)
- [/dashboard](https://floodzonecheck.calyvent.com/dashboard) — Tracked properties and alerts (requires account)

## Data Source
All flood zone data comes from FEMA's National Flood Hazard Layer, accessed via the ArcGIS REST API at hazards.fema.gov/gis/nfhl/rest/services/public/NFHL. Geocoding uses the U.S. Census Bureau's free Geocoder API.

## Important Disclaimer
FloodZoneCheck is a free research tool using public FEMA data. It is NOT an official Standard Flood Hazard Determination. Lenders require a certified determination from a licensed provider. Zone boundaries can cross a single parcel — confirm exact risk and insurance requirements with FEMA or your insurer before relying on this for a purchase or insurance decision.

## Contact
Email: contact@calyvent.com?subject=FloodZoneCheck%20Inquiry
`;

export async function GET() {
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
