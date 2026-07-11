import { NavItem } from "@/lib/seed-types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", url: "/services" },
  { label: "Our Work", url: "/work" },
  { label: "Team", url: "/about" },
  { label: "How We Work", url: "/how-we-work" },
];

const PAGE_ROUTES = new Set(["/services", "/contact", "/work"]);

export function getNavHref(item: NavItem): string {
  if (PAGE_ROUTES.has(item.url)) {
    return item.url;
  }

  const sectionId = item.url.replace(/^\//, "");
  return `/#${sectionId}`;
}

export function shouldScrollOnHomepage(item: NavItem, pathname: string): boolean {
  return pathname === "/" && !PAGE_ROUTES.has(item.url);
}

export function getHomepageSectionId(item: NavItem): string {
  return item.url.replace(/^\//, "");
}

export function getEnquireHref(): string {
  return "/contact";
}
