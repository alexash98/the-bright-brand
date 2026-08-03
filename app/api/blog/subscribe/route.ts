import { NextResponse } from "next/server";
import { z } from "zod";
import { forwardFormToOdal } from "@/lib/odal/forward-form";

export const runtime = "nodejs";

const SubscribeSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name."),
  email: z
    .string()
    .trim()
    .email("Enter a valid work email address."),
  website: z
    .string()
    .trim()
    .min(3, "Enter your company website.")
    .refine(
      (value) => /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$/i.test(value),
      "Enter a valid company website, for example yourbrand.com.",
    ),
  pageUrl: z.string().url().optional(),
});

export async function POST(request: Request): Promise<NextResponse> {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const parsed = SubscribeSchema.safeParse(json);
  if (!parsed.success) {
    const message =
      parsed.error.issues[0]?.message ?? "Check the form and try again.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { firstName, email, website, pageUrl } = parsed.data;
  const forward = await forwardFormToOdal({
    formName: "brightbrand_blog_subscribe",
    email,
    firstName,
    companyWebsite: website,
    pageUrl,
  });

  if (!forward.ok) {
    console.error("[api/blog/subscribe] Odal forward failed:", forward.error);
    return NextResponse.json(
      {
        error:
          "We could not save your details just now. Check your connection and try again in a moment.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
