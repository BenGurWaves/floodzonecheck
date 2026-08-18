"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MapPin, Bell, Trash2, RefreshCw, LogOut, ExternalLink } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { TrackedProperty, AlertEntry } from "@/lib/types";
import { getZoneColor } from "@/lib/zone-utils";
import AuthForm from "@/components/AuthForm";

interface DashboardData {
  isPro: boolean;
  properties: TrackedProperty[];
  alerts: (AlertEntry & { tracked_properties: { user_id: string; address_label: string } })[];
}

function getInitialAuth(): { token: string } | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("fzc_token");
  return stored ? { token: stored } : null;
}

function DashboardInner() {
  const [auth, setAuth] = useState<{ token: string } | null>(getInitialAuth);
  const [data, setData] = useState<DashboardData | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [rechecking, setRechecking] = useState(false);
  const [showUpgraded, setShowUpgraded] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("upgraded") === "true") {
      setShowUpgraded(true);
      router.replace("/dashboard");
    }
  }, [searchParams, router]);

  useEffect(() => {
    if (!auth) {
      setLoaded(true); // eslint-disable-line react-hooks/set-state-in-effect
      return;
    }

    let cancelled = false;

    async function fetchDashboard() {
      try {
        const res = await fetch("/api/dashboard", {
          headers: { Authorization: `Bearer ${auth!.token}` },
        });

        if (res.status === 401) {
          localStorage.removeItem("fzc_token");
          setAuth(null);
          return;
        }

        if (!cancelled) {
          const result = await res.json();
          setData(result);
        }
      } catch {
        // silent fail
      } finally {
        if (!cancelled) setLoaded(true);
      }
    }

    fetchDashboard();

    return () => { cancelled = true; };
  }, [auth]);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    localStorage.removeItem("fzc_token");
    setAuth(null);
    setData(null);
    router.push("/");
  }

  async function handleRemove(propertyId: string) {
    if (!auth) return;
    if (!confirm("Remove this property from tracking?")) return;

    await fetch("/api/track", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify({ propertyId }),
    });

    const res = await fetch("/api/dashboard", {
      headers: { Authorization: `Bearer ${auth.token}` },
    });
    if (res.ok) {
      const result = await res.json();
      setData(result);
    }
  }

  async function handleRecheck() {
    if (!auth) return;
    setRechecking(true);
    try {
      const res = await fetch("/api/dashboard", {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      if (res.ok) {
        const result = await res.json();
        setData(result);
      }
    } finally {
      setRechecking(false);
    }
  }

  async function handleManageSubscription() {
    if (!auth) return;
    try {
      const res = await fetch("/api/stripe/portal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = await res.json();
      if (result.url) {
        window.location.href = result.url;
      }
    } catch {
      // silent fail
    }
  }

  function handleAuthSuccess() {
    const token = localStorage.getItem("fzc_token");
    if (token) {
      setAuth({ token });
    }
  }

  if (!loaded) {
    return (
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 text-center">
        <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin mx-auto" />
      </div>
    );
  }

  if (!auth) {
    return (
      <div className="max-w-md mx-auto px-5 md:px-8 py-16">
        <h1 className="font-display text-3xl text-foreground mb-2 text-center">Dashboard</h1>
        <p className="text-sm text-fg-muted mb-8 text-center">
          Sign in to view your tracked properties and alerts.
        </p>

        <div className="bg-card border border-border rounded-xl p-6 md:p-8">
          <div className="mb-6 flex gap-2">
            <button
              onClick={() => setAuthMode("login")}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                authMode === "login"
                  ? "bg-accent text-white"
                  : "bg-bg text-fg-muted hover:text-foreground"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setAuthMode("signup")}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                authMode === "signup"
                  ? "bg-accent text-white"
                  : "bg-bg text-fg-muted hover:text-foreground"
              }`}
            >
              Create Account
            </button>
          </div>
          <AuthForm mode={authMode} onSuccess={handleAuthSuccess} />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
      {showUpgraded && (
        <div className="mb-8 p-4 bg-zone-low-bg border border-zone-low/20 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">Welcome to Pro!</p>
            <p className="text-xs text-fg-muted">You now have unlimited tracking and priority alerts.</p>
          </div>
          <button
            onClick={() => setShowUpgraded(false)}
            className="text-fg-muted hover:text-foreground text-xs"
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-display text-3xl md:text-4xl text-foreground">My Tracked Properties</h1>
            {data?.isPro ? (
              <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase">Pro</span>
            ) : (
              <span className="px-3 py-1 bg-card border border-border text-fg-muted text-xs font-bold rounded-full uppercase">Free</span>
            )}
          </div>
          <p className="text-sm text-fg-muted mt-1">
            Monitor your properties for FEMA flood zone changes
            {!data?.isPro && data && ` — ${data.properties.length}/3 properties tracked`}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {data?.isPro ? (
            <button
              onClick={handleManageSubscription}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:bg-bg-alt transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Manage Subscription
            </button>
          ) : (
            <a
              href="/pricing"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-accent-hover transition-colors"
            >
              Upgrade to Pro
            </a>
          )}
          <button
            onClick={handleRecheck}
            disabled={rechecking}
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:bg-bg-alt transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${rechecking ? "animate-spin" : ""}`} />
            Refresh
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-fg-muted hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </div>

      {data && data.properties.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {data.properties.map((prop) => {
            const colors = getZoneColor(prop.last_known_zone);
            return (
              <div key={prop.id} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <MapPin className="w-4 h-4 text-fg-muted flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground truncate">{prop.address_label}</span>
                  </div>
                  <button
                    onClick={() => handleRemove(prop.id)}
                    className="text-fg-muted hover:text-zone-high transition-colors flex-shrink-0"
                    aria-label="Remove property"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-bold rounded-full ${colors.bg} ${colors.text}`}>
                    Zone {prop.last_known_zone}
                  </span>
                </div>

                <p className="text-xs text-fg-muted">
                  Last checked {formatDistanceToNow(new Date(prop.last_checked), { addSuffix: true })}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {data && data.properties.length === 0 && (
        <div className="bg-card border border-border rounded-xl p-12 text-center mb-12">
          <MapPin className="w-10 h-10 text-fg-muted mx-auto mb-4" strokeWidth={1.5} />
          <h3 className="font-display text-xl text-foreground mb-2">No Tracked Properties Yet</h3>
          <p className="text-sm text-fg-muted mb-6 max-w-md mx-auto">
            Search for an address on the home page, then click &quot;Track This Property&quot; to start monitoring it for zone changes.
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-accent text-white rounded-lg font-semibold text-sm hover:bg-accent-hover transition-colors"
          >
            Look Up an Address
          </button>
        </div>
      )}

      {data && !data.isPro && data.properties.length >= 3 && (
        <div className="bg-foreground border-2 border-accent rounded-xl p-6 mb-12 text-center">
          <h3 className="font-display text-lg text-white mb-2">You&apos;ve reached the free limit</h3>
          <p className="text-sm text-[#9CA3AF] mb-4">
            Free accounts can track up to 3 properties. Upgrade to Pro for unlimited tracking.
          </p>
          <a
            href="/pricing"
            className="inline-block px-6 py-2.5 bg-accent text-white rounded-lg font-semibold text-sm hover:bg-accent-hover transition-colors"
          >
            Upgrade to Pro
          </a>
        </div>
      )}

      {data && data.alerts.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Bell className="w-5 h-5 text-accent" />
            <h2 className="font-display text-2xl text-foreground">Recent Alerts</h2>
          </div>
          <div className="space-y-3">
            {data.alerts.map((alert) => (
              <div
                key={alert.id}
                className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-3"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {alert.tracked_properties?.address_label}
                  </p>
                  <p className="text-xs text-fg-muted mt-0.5">
                    Zone changed from{" "}
                    <span className="font-semibold text-zone-high">{alert.old_zone}</span> to{" "}
                    <span className="font-semibold text-zone-high">{alert.new_zone}</span>
                  </p>
                </div>
                <span className="text-xs text-fg-muted whitespace-nowrap">
                  {formatDistanceToNow(new Date(alert.sent_at), { addSuffix: true })}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 text-center">
          <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin mx-auto" />
        </div>
      }
    >
      <DashboardInner />
    </Suspense>
  );
}
