import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About — How FloodZoneCheck Works",
  description:
    "FloodZoneCheck uses public FEMA National Flood Hazard Layer data via the ArcGIS REST API to provide instant flood zone lookup and change monitoring for any U.S. address.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About — FloodZoneCheck",
    description:
      "Public FEMA data, instant lookup, and ongoing monitoring for flood zone changes.",
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">About</p>
      <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
        FloodZoneCheck
      </h1>

      <div className="text-fg-muted leading-relaxed space-y-5 text-sm md:text-base">
        <p>
          FloodZoneCheck is a free research tool that gives you instant flood zone lookup for any
          U.S. address and ongoing monitoring to alert you when FEMA revises the flood map for a
          tracked property. The data comes directly from FEMA&apos;s National Flood Hazard Layer (NFHL),
          served through the same ArcGIS REST API that certified flood determination providers use —
          this is the authoritative source for flood zone designations nationwide.
        </p>

        <p>
          The tool was built because free flood zone lookup tools exist, but none of them track
          map changes. FEMA periodically restudies floodplains as new data, development, and climate
          patterns emerge. A property previously mapped as Zone X (minimal risk) can be reclassified
          to Zone AE (high-risk) — suddenly triggering mandatory flood insurance for any federally-backed
          mortgage. FloodZoneCheck monitors these revisions so property owners and prospective buyers
          find out early, not at the closing table.
        </p>

        <p>
          Every flood zone result on this site includes the zone designation, SFHA status, base flood
          elevation (when available), and a direct link to the official FEMA Map Service Center panel.
          The lookup works without an account — search any address freely. Create a free account to
          track up to three properties and receive change alerts. Upgrade to Pro for unlimited
          tracking.
        </p>

        <div className="p-5 bg-zone-moderate-bg border border-zone-moderate/20 rounded-xl my-8 not-prose">
          <h3 className="font-display text-lg text-foreground mb-2">Important Disclaimer</h3>
          <p className="text-sm text-fg-muted leading-relaxed">
            FloodZoneCheck is a free research tool using public FEMA data, not an official Standard
            Flood Hazard Determination. Lenders require a certified determination from a licensed
            provider. Zone boundaries can cross a single parcel — confirm exact risk and insurance
            requirements with FEMA or your insurer before relying on this for a purchase or insurance
            decision.
          </p>
        </div>

        <div className="p-5 bg-card border border-border rounded-xl not-prose">
          <h3 className="font-display text-lg text-foreground mb-2">Data Source</h3>
          <p className="text-sm text-fg-muted leading-relaxed">
            All flood zone data is sourced from the FEMA National Flood Hazard Layer, accessed
            via the ArcGIS REST API at{" "}
            <code className="text-xs bg-bg px-1.5 py-0.5 rounded font-mono">
              hazards.fema.gov/gis/nfhl/rest/services/public/NFHL
            </code>
            . Geocoding uses the U.S. Census Bureau&apos;s free Geocoder API. Address coordinates are
            rounded to three decimal places for cache lookup. Zone data is cached for 30 days
            per coordinate pair since flood maps do not change frequently.
          </p>
        </div>

        <p>
          Questions or feedback?{" "}
          <a
            href="mailto:contact@calyvent.com?subject=FloodZoneCheck%20Inquiry"
            className="text-accent hover:text-accent-hover font-medium"
          >
            Contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
