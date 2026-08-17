import { createServerClient } from "@/lib/supabase-server";

export async function POST() {
  try {
    const supabase = createServerClient();
    await supabase.auth.signOut();

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: true });
  }
}
