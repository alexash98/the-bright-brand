import { readdirSync } from "node:fs";
import { join } from "node:path";
import { createJiti } from "jiti";
import type { Industry, MoneyPage, ServiceSlug } from "@/content/types";
import { parseIndustry } from "@/content/validate";

export interface IndustryRecord {
  filename: string;
  isExample: boolean;
  industry: Industry;
}

export interface RegistryOptions {
  /** When true, include `_*.ts` example fixtures. Default false. */
  includeExamples?: boolean;
}

const INDUSTRIES_DIR = join(process.cwd(), "content/industries");

const jiti = createJiti(join(process.cwd(), "content/registry.ts"), {
  interopDefault: true,
});

function loadIndustryRecords(): IndustryRecord[] {
  let files: string[];
  try {
    files = readdirSync(INDUSTRIES_DIR)
      .filter((file) => file.endsWith(".ts") && !file.endsWith(".d.ts"))
      .sort();
  } catch (error) {
    throw new Error(
      `[content/registry] Cannot read ${INDUSTRIES_DIR}: ${String(error)}`,
    );
  }

  if (files.length === 0) {
    throw new Error(
      `[content/registry] No industry files found in ${INDUSTRIES_DIR}`,
    );
  }

  return files.map((filename) => {
    const fullPath = join(INDUSTRIES_DIR, filename);
    let loaded: unknown;
    try {
      loaded = jiti(fullPath);
    } catch (error) {
      throw new Error(
        `[content/registry] Failed to load ${filename}: ${String(error)}`,
      );
    }

    const mod = loaded as { default?: unknown };
    const data = mod.default ?? loaded;
    const industry = parseIndustry(data, filename);

    if (industry.slug !== filename.replace(/\.ts$/, "") && !filename.startsWith("_")) {
      // Example fixtures may use a public slug that differs from the _example filename.
      // Real vertical files must use matching slug and filename so agents stay aligned.
      throw new Error(
        `[content/registry] Slug mismatch in ${filename}: export slug "${industry.slug}" must match filename.`,
      );
    }

    return {
      filename,
      isExample: filename.startsWith("_"),
      industry,
    };
  });
}

let cachedRecords: IndustryRecord[] | null = null;

function getRecords(): IndustryRecord[] {
  if (!cachedRecords) {
    cachedRecords = loadIndustryRecords();
  }
  return cachedRecords;
}

function filterRecords(options?: RegistryOptions): IndustryRecord[] {
  const includeExamples = options?.includeExamples ?? false;
  return getRecords().filter((record) => includeExamples || !record.isExample);
}

/** All validated industries. Excludes example fixtures unless requested. */
export function getAllIndustries(options?: RegistryOptions): Industry[] {
  return filterRecords(options).map((record) => record.industry);
}

export function getAllIndustryRecords(
  options?: RegistryOptions,
): IndustryRecord[] {
  return filterRecords(options);
}

export function getIndustry(
  slug: string,
  options?: RegistryOptions,
): Industry | undefined {
  return filterRecords({ includeExamples: true, ...options }).find(
    (record) => record.industry.slug === slug,
  )?.industry;
}

/** Look up an industry including example fixtures (for route rendering). */
export function getIndustryForRoute(slug: string): Industry | undefined {
  return getRecords().find((record) => record.industry.slug === slug)?.industry;
}

export function isExampleIndustrySlug(slug: string): boolean {
  return getRecords().some(
    (record) => record.industry.slug === slug && record.isExample,
  );
}

export function getMoneyPage(
  industrySlug: string,
  service: ServiceSlug | string,
): MoneyPage | undefined {
  const industry = getIndustryForRoute(industrySlug);
  if (!industry) return undefined;
  return industry.moneyPages.find((page) => page.service === service);
}

export function getIndustriesForService(
  service: ServiceSlug | string,
  options?: RegistryOptions,
): Industry[] {
  return filterRecords(options).filter((record) =>
    record.industry.moneyPages.some((page) => page.service === service),
  ).map((record) => record.industry);
}

/** Industries that have a money page for this service, including examples (routes). */
export function getIndustriesForServiceRoute(
  service: ServiceSlug | string,
): Industry[] {
  return getRecords()
    .filter((record) =>
      record.industry.moneyPages.some((page) => page.service === service),
    )
    .map((record) => record.industry);
}

export function getChildren(
  parentSlug: string,
  options?: RegistryOptions,
): Industry[] {
  return filterRecords(options)
    .filter((record) => record.industry.parent === parentSlug)
    .map((record) => record.industry);
}

export function getAllMoneyPageParams(options?: {
  includeExamples?: boolean;
}): { industry: string; service: string }[] {
  const includeExamples = options?.includeExamples ?? true;
  return getRecords()
    .filter((record) => includeExamples || !record.isExample)
    .flatMap((record) =>
      record.industry.moneyPages.map((page) => ({
        industry: record.industry.slug,
        service: page.service,
      })),
    );
}

/** Force a reload (used by scripts after file changes). */
export function resetRegistryCache(): void {
  cachedRecords = null;
}
