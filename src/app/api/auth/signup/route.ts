import { NextRequest } from "next/server";
import { createServerClient } from "@/lib/supabase-server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json({ error: "Email and password are required." }, { status: 400 });
    }

    if (password.length < 6) {
      return Response.json({ error: "Password must be at least 6 characters." }, { status: 400 });
    }

    const supabase = createServerClient();

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (error) {
      if (error.message.includes("already")) {
        return Response.json({ error: "An account with this email already exists." }, { status: 409 });
      }
      return Response.json({ error: error.message }, { status: 400 });
    }

    await supabase.from("profiles").insert({
      id: data.user.id,
      email: data.user.email,
    });

    const { data: session, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      return Response.json({ user: { id: data.user.id, email: data.user.email } });
    }

    return Response.json({
      user: { id: data.user.id, email: data.user.email },
      session: {
        access_token: session.session.access_token,
        refresh_token: session.session.refresh_token,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create account.";
    return Response.json({ error: message }, { status: 500 });
  }
}
