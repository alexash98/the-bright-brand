import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  HeartPulse,
  HelpCircle,
  type LucideIcon,
  Package,
  Plane,
  Scale,
  Shield,
  Landmark,
} from "lucide-react";

export interface IndustryLinkCardItem {
  href: string;
  title: string;
  description: string;
  /** Lucide icon key or pillar slug mapped below. */
  icon?: string;
  ctaLabel?: string | null;
  tags?: string[];
}

interface IndustryLinkCardsProps {
  items: IndustryLinkCardItem[];
  /** Kept for API compatibility; animations removed for performance. */
  animate?: boolean;
}

const ICONS: Record<string, LucideIcon> = {
  construction: Building2,
  "travel-tour-operators": Plane,
  travel: Plane,
  "b2b-saas-and-platforms": Package,
  "procurement-supplier-management": Package,
  "consulting-firms": Briefcase,
  procurement: Package,
  "medical-healthcare": HeartPulse,
  medical: HeartPulse,
  "legal-solicitors": Scale,
  legal: Scale,
  "wealth-management": Landmark,
  wealth: Landmark,
  "commercial-insurance": Shield,
  insurance: Shield,
};

function resolveIcon(name?: string): LucideIcon {
  if (!name) return HelpCircle;
  return ICONS[name] ?? HelpCircle;
}

/** Server-rendered industry/service cards. No Motion hydration. */
export function IndustryLinkCards({
  items,
}: IndustryLinkCardsProps): React.ReactElement {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = resolveIcon(item.icon);

        return (
          <div key={item.href} className="h-full">
            <Link
              href={item.href}
              className="group relative flex h-full flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-8 transition-colors duration-200 hover:border-brand-accent/20 hover:bg-white"
            >
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white transition-colors duration-200 group-hover:border-brand-accent/35 group-hover:bg-brand-accent/10">
                  <Icon className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-neutral-900 transition-colors duration-200 group-hover:text-brand-accent">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-neutral-600 md:text-base">
                  {item.description}
                </p>
                {item.tags && item.tags.length > 0 ? (
                  <p className="mb-6 text-xs leading-relaxed text-neutral-500">
                    {item.tags.join(" · ")}
                  </p>
                ) : null}
              </div>
              {typeof item.ctaLabel === "string" && item.ctaLabel.length > 0 ? (
                <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-neutral-500 transition-colors group-hover:text-brand-accent">
                  <span>{item.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              ) : (
                <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-neutral-500 transition-colors group-hover:text-brand-accent">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
