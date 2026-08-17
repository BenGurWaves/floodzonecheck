"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import type { FloodZoneResult } from "@/lib/types";
import ZoneResult from "./ZoneResult";

export default function AddressSearch() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FloodZoneResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!address.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: address.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setResult(data);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-fg-muted" />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter any U.S. address"
            className="w-full pl-11 pr-4 py-3.5 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-fg-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !address.trim()}
          className="px-6 py-3.5 bg-accent text-white font-semibold text-sm rounded-lg hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all whitespace-nowrap"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Checking...
            </span>
          ) : (
            "Check Flood Zone"
          )}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-zone-high-bg border border-zone-high/20 rounded-lg text-sm text-zone-high">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-6">
          <ZoneResult result={result} address={address} />
        </div>
      )}
    </div>
  );
}
