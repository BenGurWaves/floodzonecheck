"use client";

import { ExternalLink, Shield, ShieldAlert, ShieldCheck } from "lucide-react";
import type { FloodZoneResult } from "@/lib/types";
import { getZoneColor } from "@/lib/zone-utils";

interface Props {
  result: FloodZoneResult;
  address: string;
}

export default function ZoneResult({ result, address }: Props) {
  const colors = getZoneColor(result.zone);
  const femaPanelUrl = result.dfirmId
    ? `https://msc.fema.gov/portal/adv-search#searchresults`
    : null;

  const ZoneIcon = result.sfha ? ShieldAlert : result.zone === "Not Mapped" ? Shield : ShieldCheck;

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start gap-5">
          <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${colors.bg} border ${colors.border}`}>
            <ZoneIcon className={`w-8 h-8 ${colors.text}`} strokeWidth={1.5} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className={`inline-flex items-center px-3 py-1 text-sm font-bold rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                Zone {result.zone}
              </span>
              <span className="text-sm text-fg-muted">
                {address}
              </span>
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">{result.label}</h3>
            <p className="text-sm text-fg-muted leading-relaxed">{result.description}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-bg rounded-lg">
            <span className="text-xs font-semibold uppercase tracking-wider text-fg-muted">SFHA Status</span>
            <p className="mt-1 text-sm font-semibold text-foreground">
              {result.sfha ? "Yes — Special Flood Hazard Area" : "No — Outside SFHA"}
            </p>
          </div>
          <div className="p-4 bg-bg rounded-lg">
            <span className="text-xs font-semibold uppercase tracking-wider text-fg-muted">Flood Insurance</span>
            <p className="mt-1 text-sm font-semibold text-foreground">
              {result.insuranceRequired ? "Required for federally-backed mortgages" : "Not federally required"}
            </p>
          </div>
          {result.staticBfe && (
            <div className="p-4 bg-bg rounded-lg">
              <span className="text-xs font-semibold uppercase tracking-wider text-fg-muted">Base Flood Elevation</span>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {result.staticBfe} ft NAVD 88
              </p>
            </div>
          )}
        </div>

        {result.dfirmId && (
          <div className="mt-4 flex items-center gap-2 text-sm text-fg-muted">
            <span>DFIRM Panel: {result.dfirmId}{result.panelNumber ? ` / ${result.panelNumber}` : ""}</span>
            {femaPanelUrl && (
              <a
                href={femaPanelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:text-accent-hover transition-colors"
              >
                View on FEMA MSC <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="px-6 md:px-8 py-4 bg-bg-alt border-t border-border">
        <p className="text-xs text-fg-muted leading-relaxed">
          <strong className="text-foreground">Tracking available:</strong> Create a free account to track this property and receive alerts when FEMA revises the flood map for this location.
        </p>
      </div>
    </div>
  );
}
