import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps): React.ReactElement {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-brand-text-pale/70">
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
