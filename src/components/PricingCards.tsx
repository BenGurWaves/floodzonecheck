"use client";

import { useState } from "react";
import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";

export default function PricingCards() {
  const [interval, setInterval] = useState<"month" | "year">("month");

  return (
    <>
      <div className="flex justify-center gap-3 mb-8">
        <button
          onClick={() => setInterval("month")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
            interval === "month"
              ? "bg-accent text-white"
              : "bg-card border border-border text-fg-muted hover:text-foreground"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setInterval("year")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
            interval === "year"
              ? "bg-accent text-white"
              : "bg-card border border-border text-fg-muted hover:text-foreground"
          }`}
        >
          Yearly <span className="text-xs opacity-80">(save 32%)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="relative rounded-xl p-6 md:p-8 bg-card border border-border">
          <h3 className="font-display text-xl mb-1 text-foreground">Free</h3>
          <p className="text-sm mb-5 text-fg-muted">Full research access with basic monitoring</p>
          <div className="mb-6">
            <span className="font-display text-4xl">$0</span>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited flood zone lookups",
              "3 tracked properties",
              "Zone change alerts via email",
              "FEMA panel reference links",
              "All flood zone definitions",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-zone-low" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                <span className="text-fg-muted">{f}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/dashboard"
            className="block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors bg-foreground text-white hover:bg-[#2A3040]"
          >
            Get Started Free
          </Link>
        </div>

        <div className="relative rounded-xl p-6 md:p-8 bg-foreground text-white border-2 border-accent">
          <span className="absolute -top-3 left-6 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-wider">
            Most Popular
          </span>
          <h3 className="font-display text-xl mb-1 text-white">Pro</h3>
          <p className="text-sm mb-5 text-[#9CA3AF]">For homeowners, buyers, and real estate professionals</p>
          <div className="mb-6">
            <span className="font-display text-4xl">
              {interval === "month" ? "$5.99" : "$49"}
            </span>
            <span className="text-sm ml-1 text-[#9CA3AF]">
              /{interval === "month" ? "month" : "year"}
            </span>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              "Everything in Free",
              "Unlimited tracked properties",
              "Priority alerts (faster re-check cycle)",
              "Downloadable PDF summary per property",
              "Useful for home-buying due diligence files",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                <span className="text-[#D1D5DB]">{f}</span>
              </li>
            ))}
          </ul>
          <CheckoutButton interval={interval} highlighted />
        </div>
      </div>
    </>
  );
}
