import { NextRequest } from "next/server";
import { createServerClient } from "@/lib/supabase-server";

async function getUserId(request: NextRequest): Promise<string | null> {
  const supabase = createServerClient();
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.split(" ")[1];
  const { data } = await supabase.auth.getUser(token);
  return data.user?.id || null;
}

export async function GET(request: NextRequest) {
  try {
    const userId = await getUserId(request);
    if (!userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createServerClient();

    const { data: properties } = await supabase
      .from("tracked_properties")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    const { data: alerts } = await supabase
      .from("alert_log")
      .select("*, tracked_properties!inner(user_id, address_label)")
      .eq("tracked_properties.user_id", userId)
      .order("sent_at", { ascending: false })
      .limit(20);

    return Response.json({
      properties: properties || [],
      alerts: alerts || [],
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to load dashboard.";
    return Response.json({ error: message }, { status: 500 });
  }
}
