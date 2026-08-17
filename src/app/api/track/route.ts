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

export async function POST(request: NextRequest) {
  try {
    const userId = await getUserId(request);
    if (!userId) {
      return Response.json({ error: "Please sign in to track properties." }, { status: 401 });
    }

    const { address, lat, lng, zone } = await request.json();

    if (!address || lat == null || lng == null) {
      return Response.json({ error: "Missing required property data." }, { status: 400 });
    }

    const supabase = createServerClient();

    const { count } = await supabase
      .from("tracked_properties")
      .select("id", { count: "exact", head: true })
      .eq("user_id", userId);

    const { data: profile } = await supabase
      .from("profiles")
      .select("is_paid")
      .eq("id", userId)
      .single();

    if (!profile?.is_paid && (count || 0) >= 3) {
      return Response.json(
        { error: "Free tier allows up to 3 tracked properties. Upgrade to track unlimited." },
        { status: 403 }
      );
    }

    const { data, error } = await supabase
      .from("tracked_properties")
      .insert({
        user_id: userId,
        address_label: address,
        lat,
        lng,
        last_known_zone: zone,
        last_checked: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) throw error;

    return Response.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to track property.";
    return Response.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const userId = await getUserId(request);
    if (!userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { propertyId } = await request.json();
    if (!propertyId) {
      return Response.json({ error: "Missing property ID." }, { status: 400 });
    }

    const supabase = createServerClient();

    const { error } = await supabase
      .from("tracked_properties")
      .delete()
      .eq("id", propertyId)
      .eq("user_id", userId);

    if (error) throw error;

    return Response.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to remove property.";
    return Response.json({ error: message }, { status: 500 });
  }
}
