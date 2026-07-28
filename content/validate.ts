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
    honestyNote: z.string().min(1).optional(),
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

const insightBarSchema = z.object({
  label: z.string().min(1),
  value: z.number().min(0).max(100),
  display: z.string().min(1),
});

const insightChartSchema = z.object({
  title: z.string().min(1),
  caption: z.string().min(1),
  bars: z.array(insightBarSchema).min(2).max(8),
});

const heroVisualSchema = z
  .object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    stats: z
      .array(
        z.object({
          value: z.string().min(1),
          label: z.string().min(1),
        }),
      )
      .min(2)
      .max(4)
      .optional(),
    charts: z.array(insightChartSchema).max(2).optional(),
    variant: z.enum(["default", "contrast"]).optional(),
    strapline: z.string().min(1).max(160).optional(),
    contrastHeaders: z
      .object({
        left: z.string().min(1),
        right: z.string().min(1),
      })
      .optional(),
    contrastRows: z
      .array(
        z.object({
          before: z.string().min(1),
          after: z.string().min(1),
        }),
      )
      .min(2)
      .max(6)
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.variant === "contrast") {
      if (!data.contrastRows?.length) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "contrastRows required when variant is contrast",
          path: ["contrastRows"],
        });
      }
      return;
    }
    if (!data.stats?.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "stats required for default hero visual",
        path: ["stats"],
      });
    }
  });

const scatterChartSchema = z.object({
  title: z.string().min(1),
  caption: z.string().min(1),
  xLabel: z.string().min(1),
  yLabel: z.string().min(1),
  points: z
    .array(
      z.object({
        x: z.number().min(0).max(100),
        y: z.number().min(0).max(100),
        label: z.string().min(1),
      }),
    )
    .min(4)
    .max(16),
});

const audienceSchema = z.object({
  role: z.string().min(1),
  share: z.string().min(1).optional(),
  note: z.string().min(1),
});

const marketStatSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
  source: z.string().min(1).optional(),
  implication: z.string().min(1).optional(),
});

const commercialAccessSchema = z.object({
  intro: z.string().min(1).max(320).optional(),
  people: z
    .array(
      z.object({
        role: z.string().min(1),
        need: z.string().min(1),
      }),
    )
    .min(2)
    .max(6),
  systems: z
    .array(
      z.object({
        name: z.string().min(1),
        need: z.string().min(1),
      }),
    )
    .min(2)
    .max(6),
  outcome: z.string().min(1).max(280),
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
  heroH1: z.string().min(1).max(80).optional(),
  intro: z.string().min(1).max(520),
  wedge: z.string().min(1).max(320).optional(),
  proofLead: z
    .object({
      heading: z.string().min(1).max(160),
      body: z.string().min(1).max(520),
      askAiPrompt: z.string().min(1).max(400).optional(),
      quoteId: z.string().min(1).optional(),
      quoteIds: z.array(z.string().min(1)).min(1).max(4).optional(),
      quoteNote: z.string().min(1).max(280).optional(),
    })
    .optional(),
  pipelineHeading: z.string().min(1).max(120).optional(),
  servicesHeading: z.string().min(1).max(120).optional(),
  servicesIntro: z.string().min(1).max(320).optional(),
  /** null = hide service-card CTA label; omit = default "Open build". */
  serviceCardCtaLabel: z.string().min(1).max(40).nullable().optional(),
  heroVisual: heroVisualSchema.optional(),
  insightCharts: z.array(insightChartSchema).max(4).optional(),
  marketStats: z.array(marketStatSchema).max(6).optional(),
  audience: z.array(audienceSchema).max(6).optional(),
  commercialAccess: commercialAccessSchema.optional(),
  enquiryTiming: insightChartSchema.optional(),
  cycleTiming: insightChartSchema.optional(),
  scatterCharts: z.array(scatterChartSchema).max(2).optional(),
  targetingNotes: z.array(sectionSchema).max(6).optional(),
  briefing: z
    .object({
      eyebrow: z.string().min(1).max(80).optional(),
      heading: z.string().min(1).max(160).optional(),
      intro: z.string().min(1).max(420).optional(),
      marketHeading: z.string().min(1).max(120).optional(),
      targetingHeading: z.string().min(1).max(120).optional(),
    })
    .optional(),
  faqHeading: z.string().min(1).max(120).optional(),
  faqVariant: z.enum(["default", "editorial"]).optional(),
  engagement: z
    .object({
      eyebrow: z.string().min(1).max(80).optional(),
      heading: z.string().min(1).max(160),
      intro: z.string().min(1).max(420).optional(),
      commercials: z.object({
        heading: z.string().min(1).max(120),
        body: z.string().min(1).max(520),
      }),
      steps: z
        .array(
          z.object({
            name: z.string().min(1).max(80),
            body: z.string().min(1).max(320),
          }),
        )
        .min(3)
        .max(6),
    })
    .optional(),
  cta: z
    .object({
      heading: z.string().min(1).max(160),
      body: z.string().min(1).max(420),
      buttonLabel: z.string().min(1).max(80).optional(),
      href: z.string().min(1).max(200).optional(),
    })
    .optional(),
  heroCta: z
    .object({
      primaryLabel: z.string().min(1).max(80).optional(),
      secondaryLabel: z.string().min(1).max(80).optional(),
      secondaryHref: z.string().min(1).max(200).optional(),
    })
    .optional(),
  pipelineStages: z
    .array(
      z.object({
        name: z.string().min(1),
        note: z.string().min(1).optional(),
      }),
    )
    .min(3)
    .max(8)
    .optional(),
  pipelineShape: z.array(sectionSchema).min(1),
  infrastructure: z.array(sectionSchema).min(1),
  stackNotes: z.array(sectionSchema).optional(),
  proof: z.array(proofSchema).min(1),
  faqs: z.array(faqSchema).min(6),
  relatedIndustries: z.array(
    z.object({
      slug: z.string().min(1),
      why: z.string().min(1),
    }),
  ),
  moneyPages: z.array(moneyPageSchema),
  resourceSlugs: z.array(z.string().min(1)).optional(),
  toolSlugs: z.array(z.string().min(1)).optional(),
  blogTags: z.array(z.string().min(1)).optional(),
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
