import { z } from "zod";
import type { Industry, MoneyPage, ServiceSlug } from "@/content/types";

export const SERVICE_SLUGS = [
  "google-ads-management",
  "linkedin-b2b-advertising",
  "crm-implementation",
  "conversion-tracking-attribution",
  "call-tracking",
  "landing-pages-cro",
  "marketing-automation",
  "outbound-lead-generation",
  "reporting-dashboards",
] as const satisfies readonly ServiceSlug[];

const serviceSlugSchema = z.enum(SERVICE_SLUGS);

const proofSchema = z
  .object({
    client: z.string().min(1),
    anonymised: z.boolean(),
    situation: z.string().min(1),
    built: z.string().min(1),
    results: z
      .array(
        z.object({
          metric: z.string().min(1),
          before: z.string().optional(),
          after: z.string().min(1),
          window: z.string().min(1),
        }),
      )
      .min(1),
    signedOff: z.boolean(),
  })
  .superRefine((proof, ctx) => {
    if (!proof.signedOff && !proof.anonymised) {
      ctx.addIssue({
        code: "custom",
        message:
          "Proof must have signedOff: true, or anonymised: true. Named clients without sign-off are not allowed.",
        path: ["signedOff"],
      });
    }
  });

const faqSchema = z.object({
  q: z.string().min(1),
  a: z.string().min(1),
});

const sectionSchema = z.object({
  heading: z.string().min(1),
  body: z.string().min(1),
});

const moneyPageSchema = z.object({
  service: serviceSlugSchema,
  title: z.string().min(1),
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  intro: z.string().min(1),
  sections: z.array(sectionSchema).min(1),
  proof: z.array(proofSchema).min(1),
  faqs: z.array(faqSchema).min(5),
  relatedIndustries: z.array(z.string().min(1)),
});

export const industrySchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  parent: z.string().min(1).optional(),
  type: z.enum(["pillar", "sub"]),
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  intro: z.string().min(1),
  pipelineShape: z.array(sectionSchema).min(1),
  infrastructure: z.array(sectionSchema).min(1),
  proof: z.array(proofSchema).min(1),
  faqs: z.array(faqSchema).min(6),
  relatedIndustries: z.array(
    z.object({
      slug: z.string().min(1),
      why: z.string().min(1),
    }),
  ),
  moneyPages: z.array(moneyPageSchema),
});

export function parseIndustry(data: unknown, source: string): Industry {
  const result = industrySchema.safeParse(data);
  if (!result.success) {
    throw new Error(
      `[content/registry] Validation failed for ${source}:\n${z.prettifyError(result.error)}`,
    );
  }
  return result.data;
}

export function parseMoneyPage(data: unknown, source: string): MoneyPage {
  const result = moneyPageSchema.safeParse(data);
  if (!result.success) {
    throw new Error(
      `[content/registry] Validation failed for ${source}:\n${z.prettifyError(result.error)}`,
    );
  }
  return result.data;
}
