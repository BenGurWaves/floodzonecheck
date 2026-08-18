"use client";

import { useState } from "react";

interface Props {
  interval: "month" | "year";
  highlighted?: boolean;
}

export default function CheckoutButton({ interval, highlighted }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("fzc_token");

      if (!token) {
        window.location.href = "/dashboard";
        return;
      }

      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ interval }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`block w-full text-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors ${
          highlighted
            ? "bg-accent text-white hover:bg-accent-hover"
            : "bg-foreground text-white hover:bg-[#2A3040]"
        } disabled:opacity-50`}
      >
        {loading ? "Redirecting to Stripe..." : "Upgrade to Pro"}
      </button>
      {error && (
        <p className="mt-2 text-xs text-center text-red-400">{error}</p>
      )}
    </div>
  );
}
