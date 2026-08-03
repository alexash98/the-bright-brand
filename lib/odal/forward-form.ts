import { ODAL_API_URL, ODAL_WORKSPACE_ID } from "@/lib/odal/config";

/**
 * Server-side fallback so a form still lands in Odal if the client tracker
 * misses the dataLayer event. Best-effort: callers should not fail the user
 * response solely because this forward fails when the client push succeeded.
 */
export async function forwardFormToOdal(input: {
  formName: string;
  email: string;
  firstName: string;
  companyWebsite?: string;
  message?: string;
  pageUrl?: string;
}): Promise<{ ok: boolean; error?: string }> {
  try {
    const response = await fetch(ODAL_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        workspace_id: ODAL_WORKSPACE_ID,
        email: input.email,
        first_name: input.firstName,
        company: input.companyWebsite ?? null,
        message: input.message ?? null,
        form_name: input.formName,
        form_page_url: input.pageUrl ?? null,
        form_source: "brightbrand_api",
        raw_fields: {
          email: input.email,
          first_name: input.firstName,
          company_website: input.companyWebsite ?? "",
          message: input.message ?? "",
        },
        submitted_at: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      return {
        ok: false,
        error: `Odal responded ${response.status}${text ? `: ${text.slice(0, 200)}` : ""}`,
      };
    }

    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Odal forward failed",
    };
  }
}
