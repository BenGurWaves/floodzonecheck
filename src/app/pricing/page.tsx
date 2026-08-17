import type { Metadata } from "next";
import PricingCard from "@/components/PricingCard";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing — Free Flood Zone Lookup + Pro Monitoring",
  description:
    "Unlimited flood zone searches are free. Upgrade to Pro for unlimited tracked properties, priority alerts, and downloadable PDF summaries. One-time payment.",
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: "Pricing — FloodZoneCheck",
    description:
      "Free flood zone lookup. Pro plan: unlimited tracking, priority alerts, PDF summaries.",
    url: `${SITE_URL}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          Pricing
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          Flood zone research, priced for everyone
        </h1>
        <p className="text-fg-muted text-lg leading-relaxed">
          Look up any U.S. address for free — always. Upgrade when you need ongoing monitoring,
          more tracked properties, or a downloadable report to attach to a home-buying file.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <PricingCard
          name="Free"
          price="$0"
          description="Full research access with basic monitoring"
          features={[
            "Unlimited flood zone lookups",
            "3 tracked properties",
            "Zone change alerts via email",
            "FEMA panel reference links",
            "All flood zone definitions",
          ]}
          cta="Get Started Free"
          ctaHref="/"
        />

        <PricingCard
          name="Pro"
          price="$49"
          description="For homeowners, buyers, and real estate professionals"
          features={[
            "Everything in Free",
            "Unlimited tracked properties",
            "Priority alerts (faster re-check cycle)",
            "Downloadable PDF summary per property",
            "Useful for home-buying due diligence files",
          ]}
          highlighted
          cta="Upgrade to Pro"
          ctaHref="#stripe-checkout"
        />
      </div>

      <div className="mt-16 max-w-2xl mx-auto">
        <h2 className="font-display text-2xl text-foreground mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-2">Is this a certified flood determination?</h3>
            <p className="text-sm text-fg-muted leading-relaxed">
              No. FloodZoneCheck is a research tool using public FEMA data. Lenders require a certified
              Standard Flood Hazard Determination from a licensed provider. Our PDF summaries are
              useful supporting documents for due diligence but are not a substitute for the
              official determination your lender or insurer requires.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-2">How often do you re-check tracked properties?</h3>
            <p className="text-sm text-fg-muted leading-relaxed">
              Free accounts are re-checked on a monthly cycle. Pro accounts get a faster re-check
              cadence with priority processing. FEMA maps don&apos;t change daily — monthly is
              typically early enough to catch revisions before they impact renewals or closings.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-2">Is this a one-time payment?</h3>
            <p className="text-sm text-fg-muted leading-relaxed">
              Yes. Pro is a one-time payment of $49 — no recurring charges, no subscription to
              cancel. You get lifetime access to Pro features. Your tracked properties remain
              saved and your monitoring continues as long as the service is active.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-2">What if FEMA has no data for my address?</h3>
            <p className="text-sm text-fg-muted leading-relaxed">
              Roughly 90% of the U.S. population lives within FEMA&apos;s digitally mapped National
              Flood Hazard Layer. If your address falls outside the NFHL&apos;s digital coverage,
              we tell you that clearly rather than guessing. Contact your local floodplain
              administrator for the most current information on unmapped areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
