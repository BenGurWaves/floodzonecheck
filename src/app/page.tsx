import type { Metadata } from "next";
import AddressSearch from "@/components/AddressSearch";
import { SITE_URL } from "@/lib/constants";
import { Droplets, AlertTriangle, Bell } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FEMA Flood Zone Lookup — Know Your Risk, Get Alerted",
  description:
    "Instant flood zone lookup by address using official FEMA NFHL data. Track your property and get alerted when FEMA revises the flood map.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "FloodZoneCheck — FEMA Flood Zone Lookup & Change Alerts",
    description:
      "Instant flood zone lookup by address using official FEMA NFHL data. Track your property and get alerted when FEMA revises the flood map.",
    url: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-[#2A3040] to-[#1A1F2E]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              FEMA National Flood Hazard Layer
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-5">
              Know your FEMA flood zone.
              <br />
              <span className="text-accent">Get alerted if it ever changes.</span>
            </h1>
            <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-lg mb-8">
              Instant flood zone lookup powered by FEMA&apos;s official data — plus ongoing monitoring
              to alert you when FEMA revises the map and your zone designation changes.
            </p>
          </div>

          <div className="max-w-2xl">
            <AddressSearch />
          </div>

          <p className="mt-4 text-xs text-[#6B7280]">
            Live data pulled directly from FEMA&apos;s National Flood Hazard Layer, the same source certified determination providers use.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              What Each Flood Zone Means
            </h2>
            <div className="prose prose-sm max-w-none text-fg-muted leading-relaxed space-y-4">
              <p>
                FEMA divides flood-prone areas into designated zones based on the probability and
                type of flooding expected over a 30-year period (the typical length of a mortgage).
                These zones appear on Flood Insurance Rate Maps (FIRMs) and directly determine
                whether federal law mandates flood insurance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 not-prose">
                <div className="p-4 bg-zone-high-bg border border-zone-high/20 rounded-lg">
                  <span className="text-xs font-bold uppercase tracking-wider text-zone-high">Zones A, AE, V, VE</span>
                  <p className="mt-1 text-sm text-foreground">High-risk Special Flood Hazard Areas with at least a 1% annual chance of flooding. Flood insurance is required for federally-backed mortgages.</p>
                </div>
                <div className="p-4 bg-zone-moderate-bg border border-zone-moderate/20 rounded-lg">
                  <span className="text-xs font-bold uppercase tracking-wider text-zone-moderate">Zone B / X (shaded)</span>
                  <p className="mt-1 text-sm text-foreground">Moderate-risk areas in the 500-year floodplain. Insurance not required but recommended — 25% of claims come from these zones.</p>
                </div>
                <div className="p-4 bg-zone-low-bg border border-zone-low/20 rounded-lg">
                  <span className="text-xs font-bold uppercase tracking-wider text-zone-low">Zone C / X</span>
                  <p className="mt-1 text-sm text-foreground">Minimal-risk areas with less than 0.2% annual chance of flooding. Flood insurance still available and often affordable.</p>
                </div>
              </div>

              <p>
                Coastal areas get additional designations (V and VE zones) that account for wave
                action and storm surge on top of regular flooding. These carry the highest premiums
                because the combined risk — both water rising from below and waves crashing from
                the coast — is substantially greater.
              </p>

              <p>
                The base flood elevation (BFE) listed for your property represents the height floodwaters
                are expected to reach during a 1%-annual-chance flood event. When your structure sits
                below the BFE, insurance costs climb significantly. When it sits above, premiums drop.
                Even a few feet of elevation above BFE can save thousands per year in insurance costs.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <AlertTriangle className="w-8 h-8 text-zone-moderate mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-foreground mb-2">Do I Actually Need Flood Insurance?</h3>
              <p className="text-sm text-fg-muted leading-relaxed">
                If your lender is federally regulated and your property sits in a Special Flood
                Hazard Area (zones A or V), the answer is legally yes — the Flood Disaster
                Protection Act of 1973 requires it. But here is the part most people miss:
                roughly 25% of all NFIP flood claims come from properties <em>outside</em> high-risk
                zones. Flood insurance is available in moderate- and low-risk areas at far lower
                premiums, often under $500 per year. If you are in a FEMA-designated area at all,
                the math is worth running.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <Droplets className="w-8 h-8 text-accent mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-foreground mb-2">Why Zone Changes Matter</h3>
              <p className="text-sm text-fg-muted leading-relaxed">
                FEMA periodically updates flood maps as new data, development, and climate patterns
                emerge. A property previously mapped as Zone X (minimal risk) can be reclassified to
                Zone AE (high-risk) — suddenly triggering mandatory flood insurance for any
                federally-backed mortgage. FloodZoneCheck monitors these revisions so you find out
                before your lender does.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <Bell className="w-8 h-8 text-zone-low mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-foreground mb-2">What Gets Monitored</h3>
              <p className="text-sm text-fg-muted leading-relaxed">
                Save a property and we re-check its coordinates against FEMA&apos;s live NFHL layer on a
                regular cycle. If the flood zone designation changes — from X to AE, AE to VE, or
                any revision — you get an alert immediately. No more discovering the change at
                closing or when your insurance renewal spikes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Simple Pricing
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
              Start free. Upgrade when you need more.
            </h2>
            <p className="text-fg-muted text-base">
              Unlimited flood zone searches are always free. Track properties and get change alerts with a free account.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="font-display text-xl text-foreground mb-1">Free</h3>
              <p className="text-sm text-fg-muted mb-4">Everything you need for basic research</p>
              <p className="font-display text-4xl text-foreground mb-6">$0</p>
              <ul className="space-y-2.5 text-sm text-fg-muted mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-zone-low mt-0.5">✓</span>
                  Unlimited flood zone searches
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zone-low mt-0.5">✓</span>
                  3 tracked properties
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zone-low mt-0.5">✓</span>
                  Zone change alerts
                </li>
              </ul>
              <Link
                href="/"
                className="block text-center py-3 px-6 bg-foreground text-white rounded-lg font-semibold text-sm hover:bg-[#2A3040] transition-colors"
              >
                Get Started
              </Link>
            </div>

            <div className="relative bg-foreground text-white border-2 border-accent rounded-xl p-6 md:p-8">
              <span className="absolute -top-3 left-6 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-wider">
                Most Popular
              </span>
              <h3 className="font-display text-xl mb-1">Pro</h3>
              <p className="text-sm text-[#9CA3AF] mb-4">For homeowners, buyers, and agents</p>
              <div className="mb-6">
                <span className="font-display text-4xl">$5.99</span>
                <span className="text-sm text-[#9CA3AF] ml-1">/month</span>
                <span className="text-sm text-[#9CA3AF] ml-2">(or $49/year)</span>
              </div>
              <ul className="space-y-2.5 text-sm text-[#D1D5DB] mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  Everything in Free
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  Unlimited tracked properties
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  Priority alerts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  Downloadable PDF summary per property
                </li>
              </ul>
              <Link
                href="/pricing"
                className="block text-center py-3 px-6 bg-accent text-white rounded-lg font-semibold text-sm hover:bg-accent-hover transition-colors"
              >
                Upgrade to Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 text-center">
            Why FloodZoneCheck Exists
          </h2>
          <div className="text-fg-muted leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              Free flood zone lookup tools exist — most people use the FEMA Map Service Center
              directly. But none of them tell you when the map changes. And flood maps <em>do</em> change.
              FEMA restudies floodplains on a rolling cycle, and a single map revision can reclassify
              tens of thousands of properties overnight.
            </p>
            <p>
              When that happens, homeowners discover the change months later — at mortgage renewal,
              insurance renewal, or worse, at the closing table when a buyer&apos;s lender suddenly
              requires flood insurance that was never part of the deal. FloodZoneCheck closes that
              gap: look up any address for free, then save it to get notified the moment FEMA
              revises the zone.
            </p>
            <p>
              This is not a replacement for a certified flood determination (lenders require those
              from licensed providers). It is a research and monitoring tool — built to give
              homeowners, buyers, and real estate professionals the earliest possible warning
              when the flood risk picture changes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
