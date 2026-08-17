import Link from "next/link";
import { Droplets } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-bg mt-auto">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <div className="flex items-center gap-2.5 font-display text-lg text-white mb-3">
              <Droplets className="w-5 h-5 text-accent" strokeWidth={2.5} />
              FloodZoneCheck
            </div>
            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-xs">
              Instant FEMA flood zone lookup and monitoring. Know your risk, get alerted when it changes.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-[#D1D5DB] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-[#D1D5DB] hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[#D1D5DB] hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@calyvent.com?subject=FloodZoneCheck%20Inquiry"
                  className="text-sm text-[#D1D5DB] hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-4">
              Disclaimer
            </h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              FloodZoneCheck is a free research tool using public FEMA data. It is not an official
              Standard Flood Hazard Determination. Lenders require a certified determination from a
              licensed provider. Zone boundaries can cross a single parcel — confirm exact risk and
              insurance requirements with FEMA or your insurer before relying on this for a purchase
              or insurance decision.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#374151] text-center">
          <p className="text-xs text-[#6B7280]">
            &copy; {new Date().getFullYear()} FloodZoneCheck. Data sourced from the FEMA National Flood Hazard Layer.
          </p>
        </div>
      </div>
    </footer>
  );
}
