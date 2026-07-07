import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  siteName: string;
  tagline: string;
  links: FooterLink[];
}

export function Footer({
  siteName,
  tagline,
  links,
}: FooterProps): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 bg-bg">
      <div className="mx-auto max-w-content px-6 py-section-y lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold text-primary">{siteName}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{tagline}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-12 text-sm text-muted">
          © {year} {siteName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
