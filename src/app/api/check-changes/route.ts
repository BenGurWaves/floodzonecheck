import { NextRequest } from "next/server";
import { createServerClient } from "@/lib/supabase-server";
import { lookupFloodZone } from "@/lib/fema";

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (authHeader !== `Bearer ${cronSecret}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = createServerClient();

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const { data: properties } = await supabase
      .from("tracked_properties")
      .select("*")
      .lte("last_checked", thirtyDaysAgo.toISOString());

    if (!properties || properties.length === 0) {
      return Response.json({ message: "No properties to re-check." });
    }

    let alertsSent = 0;

    for (const prop of properties) {
      try {
        const zoneResult = await lookupFloodZone(prop.lat, prop.lng);

        if (zoneResult.zone !== prop.last_known_zone) {
          await supabase.from("alert_log").insert({
            tracked_property_id: prop.id,
            old_zone: prop.last_known_zone,
            new_zone: zoneResult.zone,
            sent_at: new Date().toISOString(),
          });

          alertsSent++;
        }

        await supabase
          .from("tracked_properties")
          .update({
            last_known_zone: zoneResult.zone,
            last_checked: new Date().toISOString(),
          })
          .eq("id", prop.id);

        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch {
        continue;
      }
    }

    return Response.json({
      message: `Re-checked ${properties.length} properties. ${alertsSent} alerts sent.`,
      checked: properties.length,
      alerts: alertsSent,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Check failed.";
    return Response.json({ error: message }, { status: 500 });
  }
}
