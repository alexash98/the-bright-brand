import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/**
 * Server-only Supabase client using the secret key (sb_secret_...).
 * Never import this module from a client component.
 */
export function getSupabaseServerClient(): SupabaseClient {
  if (typeof window !== "undefined") {
    throw new Error(
      "[lib/supabase/server] Refusing to create a secret-key client in the browser.",
    );
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;

  if (!url || !key) {
    throw new Error(
      "[lib/supabase/server] Missing SUPABASE_URL or SUPABASE_SECRET_KEY. Set both in the server environment. SUPABASE_SECRET_KEY must be the sb_secret_... key from Project Settings → API Keys (not the publishable key).",
    );
  }

  if (!client) {
    client = createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return client;
}

export function hasSupabaseConfig(): boolean {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SECRET_KEY);
}
