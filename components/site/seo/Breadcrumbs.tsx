import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({
  items,
  className = "mb-8",
}: BreadcrumbsProps): React.ReactElement {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/10 bg-brand-bg/50 px-4 py-2 text-sm text-brand-text-pale/70 backdrop-blur-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.href}-${item.name}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-brand-text-pale/40">
                  /
                </span>
              ) : null}
              {isLast ? (
                <span aria-current="page" className="font-semibold text-brand-text-pale">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="font-semibold transition-colors hover:text-brand-accent"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
