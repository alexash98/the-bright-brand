import { NextResponse } from "next/server";
import { z } from "zod";
import { forwardFormToOdal } from "@/lib/odal/forward-form";

export const runtime = "nodejs";

const EnquirySchema = z.object({
  name: z.string().trim().min(1, "Enter your name."),
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
  message: z.string().trim().optional(),
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

  const parsed = EnquirySchema.safeParse(json);
  if (!parsed.success) {
    const message =
      parsed.error.issues[0]?.message ?? "Check the form and try again.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { name, email, website, message, pageUrl } = parsed.data;
  const forward = await forwardFormToOdal({
    formName: "brightbrand_enquiry",
    email,
    firstName: name,
    companyWebsite: website,
    message: message ?? "",
    pageUrl,
  });

  if (!forward.ok) {
    console.error("[api/enquiry] Odal forward failed:", forward.error);
    return NextResponse.json(
      {
        error:
          "We could not send your enquiry just now. Email alex@thebrightbrand.com and we will pick it up, or try again in a moment.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
