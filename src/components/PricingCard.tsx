import { Check } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaHref: string;
  ctaButton?: ReactNode;
}

export default function PricingCard({ name, price, period, description, features, highlighted, cta, ctaHref, ctaButton }: Props) {
  return (
    <div
      className={`relative rounded-xl p-6 md:p-8 ${
        highlighted
          ? "bg-foreground text-white border-2 border-accent"
          : "bg-card border border-border"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-6 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-wider">
          Most Popular
        </span>
      )}

      <h3 className={`font-display text-xl mb-1 ${highlighted ? "text-white" : "text-foreground"}`}>
        {name}
      </h3>
      <p className={`text-sm mb-5 ${highlighted ? "text-[#9CA3AF]" : "text-fg-muted"}`}>
        {description}
      </p>

      <div className="mb-6">
        <span className="font-display text-4xl">{price}</span>
        {period && (
          <span className={`text-sm ml-1 ${highlighted ? "text-[#9CA3AF]" : "text-fg-muted"}`}>
            {period}
          </span>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlighted ? "text-accent" : "text-zone-low"}`} />
            <span className={highlighted ? "text-[#D1D5DB]" : "text-fg-muted"}>{feature}</span>
          </li>
        ))}
      </ul>

      {ctaButton || (
        ctaHref.startsWith("http") ? (
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors ${
              highlighted
                ? "bg-accent text-white hover:bg-accent-hover"
                : "bg-foreground text-white hover:bg-[#2A3040]"
            }`}
          >
            {cta}
          </a>
        ) : (
          <Link
            href={ctaHref}
            className={`block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors ${
              highlighted
                ? "bg-accent text-white hover:bg-accent-hover"
                : "bg-foreground text-white hover:bg-[#2A3040]"
            }`}
          >
            {cta}
          </Link>
        )
      )}
    </div>
  );
}
