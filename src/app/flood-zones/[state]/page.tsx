import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_URL, US_STATES } from "@/lib/constants";
import { STATE_DATA } from "@/lib/state-data";
import AddressSearch from "@/components/AddressSearch";

interface Props {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return Object.keys(US_STATES).map((state) => ({ state }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: slug } = await params;
  const stateInfo = US_STATES[slug];
  const data = STATE_DATA[slug];

  if (!stateInfo || !data) return {};

  const title = `Flood Zone Lookup in ${stateInfo.name} — FEMA Flood Map & Insurance Guide`;
  const description = `Check your FEMA flood zone in ${stateInfo.name}. Instant address lookup, most flood-prone counties, insurance cost context, and monitoring for map changes. ${data.commonZones}`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/flood-zones/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/flood-zones/${slug}`,
    },
  };
}

export default async function StatePage({ params }: Props) {
  const { state: slug } = await params;
  const stateInfo = US_STATES[slug];
  const data = STATE_DATA[slug];

  if (!stateInfo || !data) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-br from-foreground via-[#2A3040] to-[#1A1F2E]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            {stateInfo.name} Flood Zones
          </p>
          <h1 className="font-display text-3xl md:text-5xl text-white leading-tight mb-4">
            FEMA Flood Zone Lookup in {stateInfo.name}
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mb-8">
            Look up any address in {stateInfo.name} to find its FEMA flood zone designation,
            insurance requirements, and base flood elevation — sourced from the official
            National Flood Hazard Layer.
          </p>
          <div className="max-w-2xl">
            <AddressSearch />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <article className="text-fg-muted leading-relaxed space-y-6 text-sm md:text-base mb-12">
          {data.content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </article>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-card border border-border rounded-xl p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-fg-muted">Most Common Zones</span>
            <p className="mt-2 text-sm font-medium text-foreground">{data.commonZones}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-fg-muted">Most Flood-Prone Counties</span>
            <p className="mt-2 text-sm font-medium text-foreground">{data.proneCounties}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-fg-muted">Typical Insurance Costs</span>
            <p className="mt-2 text-sm font-medium text-foreground">{data.insuranceCost}</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
            Frequently Asked Questions — {stateInfo.name}
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="p-5 bg-zone-moderate-bg border border-zone-moderate/20 rounded-xl mb-8">
          <p className="text-xs text-fg-muted leading-relaxed">
            <strong className="text-foreground">Disclaimer:</strong> FloodZoneCheck is a free research
            tool using public FEMA data, not an official Standard Flood Hazard Determination. Lenders
            require a certified determination from a licensed provider. Zone boundaries can cross a
            single parcel — confirm exact risk and insurance requirements with FEMA or your insurer
            before relying on this for a purchase or insurance decision.
          </p>
        </div>

        <div className="text-center">
          <h3 className="font-display text-xl text-foreground mb-3">
            Track Your {stateInfo.name} Property
          </h3>
          <p className="text-sm text-fg-muted mb-5">
            Get alerted if FEMA revises the flood map for your property
          </p>
          <Link
            href="/"
            className="inline-flex px-6 py-3 bg-accent text-white rounded-lg font-semibold text-sm hover:bg-accent-hover transition-colors"
          >
            Look Up Your Address
          </Link>
        </div>
      </div>
    </>
  );
}
