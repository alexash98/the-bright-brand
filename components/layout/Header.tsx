import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  siteName: string;
  navLinks: NavLink[];
}

export function Header({ siteName, navLinks }: HeaderProps): React.ReactElement {
  return (
    <header className="relative z-10 border-b border-tbb-card bg-tbb-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-tbb-text"
        >
          {siteName}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
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
    </header>
  );
}
