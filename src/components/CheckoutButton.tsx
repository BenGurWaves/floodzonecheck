"use client";

import { useState } from "react";
import { getSupabase } from "@/lib/supabase";

interface Props {
  interval: "month" | "year";
  highlighted?: boolean;
}

export default function CheckoutButton({ interval, highlighted }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const supabase = getSupabase();
      const { data: { session } } = await supabase.auth.getSession();

      if (!session?.access_token) {
        window.location.href = "/dashboard";
        return;
      }

      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ interval }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`block w-full text-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors ${
        highlighted
          ? "bg-accent text-white hover:bg-accent-hover"
          : "bg-foreground text-white hover:bg-[#2A3040]"
      } disabled:opacity-50`}
    >
      {loading ? "Redirecting..." : "Upgrade to Pro"}
    </button>
  );
}
