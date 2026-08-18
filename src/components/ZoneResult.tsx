"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ExternalLink, MapPin, Shield, ShieldAlert, ShieldCheck } from "lucide-react";
import type { FloodZoneResult } from "@/lib/types";
import { getZoneColor } from "@/lib/zone-utils";

interface Props {
  result: FloodZoneResult;
  address: string;
  matchedAddress?: string;
}

export default function ZoneResult({ result, address, matchedAddress }: Props) {
  const colors = getZoneColor(result.zone);
  const displayAddress = matchedAddress || address;
  const router = useRouter();
  const [tracking, setTracking] = useState(false);
  const [trackSuccess, setTrackSuccess] = useState(false);
  const [trackError, setTrackError] = useState<string | null>(null);

  const femaPanelUrl = result.dfirmId
    ? `https://msc.fema.gov/portal/adv-search#searchresults`
    : null;

  const ZoneIcon = result.sfha ? ShieldAlert : result.zone === "Not Mapped" ? Shield : ShieldCheck;

  async function handleTrack() {
    const token = localStorage.getItem("fzc_token");
    if (!token) {
      router.push("/dashboard");
      return;
    }
    setTracking(true);
    setTrackError(null);
    try {
      const res = await fetch("/api/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          address: displayAddress,
          lat: result.lat ?? 0,
          lng: result.lng ?? 0,
          zone: result.zone,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 403) {
          setTrackError("Free limit reached. Upgrade to Pro for unlimited tracking.");
        } else {
          setTrackError(data.error || "Failed to track property.");
        }
        return;
      }
      setTrackSuccess(true);
    } catch {
      setTrackError("Network error. Please try again.");
    } finally {
      setTracking(false);
    }
  }

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
                {displayAddress}
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

      <div className="px-6 md:px-8 py-4 bg-bg-alt border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {trackSuccess ? (
          <p className="text-sm font-medium text-zone-low flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Property tracked. View it in your <button onClick={() => router.push("/dashboard")} className="text-accent hover:underline">dashboard</button>.
          </p>
        ) : (
          <>
            <p className="text-xs text-fg-muted leading-relaxed">
              <strong className="text-foreground">Track this property</strong> — get alerts when FEMA revises the flood map for this location.
            </p>
            <button
              onClick={handleTrack}
              disabled={tracking}
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white text-xs font-semibold rounded-lg hover:bg-accent-hover disabled:opacity-50 transition-colors whitespace-nowrap"
            >
              {tracking ? (
                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <MapPin className="w-3.5 h-3.5" />
              )}
              {tracking ? "Tracking..." : "Track This Property"}
            </button>
          </>
        )}
        {trackError && (
          <p className="text-xs text-zone-high">{trackError}</p>
        )}
      </div>
    </div>
  );
}
