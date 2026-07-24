import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { NAV_ITEMS } from "@/lib/nav";

interface MarketingPageShellProps {
  hero: React.ReactNode;
  children: React.ReactNode;
  afterContent?: React.ReactNode;
}

export function MarketingPageShell({
  hero,
  children,
  afterContent,
}: MarketingPageShellProps): React.ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <div data-seo-boilerplate>
        <Header navItems={NAV_ITEMS} />
      </div>
      {hero}
      <main className="bg-white text-neutral-900">
        <div className="page-below-fold" data-seo-content>
          {children}
        </div>
        {afterContent}
        <div data-seo-boilerplate>
          <Footer />
        </div>
      </main>
    </div>
  );
}
