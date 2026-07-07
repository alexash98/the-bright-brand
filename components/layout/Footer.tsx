import Link from "next/link";
import { Label } from "@/components/ui/Label";

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
    <footer className="relative z-10 border-t border-tbb-card bg-tbb-bg">
      <div className="mx-auto max-w-content px-6 py-section-y lg:px-8">
        <div className="mb-10">
          <Label>Contact</Label>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold text-tbb-text">{siteName}</p>
            <p className="mt-3 text-sm font-normal leading-relaxed text-tbb-text-muted">
              {tagline}
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-normal text-tbb-text-muted transition-colors hover:text-tbb-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-12 text-sm font-normal text-tbb-text-muted">
          © {year} {siteName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
