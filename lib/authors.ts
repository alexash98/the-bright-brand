export interface AuthorProfile {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photoSrc: string;
  photoAlt: string;
  linkedInUrl: string;
  /** Optional personal or company site. */
  websiteUrl?: string;
}

const AUTHORS: AuthorProfile[] = [
  {
    slug: "alex-ashcroft",
    name: "Alex Ashcroft",
    role: "Founder",
    bio: "Alex builds performance marketing systems that join paid media to closed revenue. Offline conversion tracking, CRM wiring and board-ready numbers are the day job.",
    photoSrc: "/team/alex-ashcroft.png",
    photoAlt: "Alex Ashcroft, Founder of The Bright Brand",
    linkedInUrl: "https://www.linkedin.com/in/alexander-ashcroft-103874181",
    websiteUrl: "https://www.thebrightbrand.com/about",
  },
  {
    slug: "ollie",
    name: "Ollie Ashcroft",
    role: "Director",
    bio: "Ollie works alongside the team on client delivery and growth systems at The Bright Brand.",
    photoSrc: "/team/ollie.png",
    photoAlt: "Ollie at The Bright Brand",
    linkedInUrl: "https://www.linkedin.com/company/the-bright-brand",
    websiteUrl: "https://www.thebrightbrand.com/about",
  },
];

const DEFAULT_AUTHOR = AUTHORS[0]!;

const BY_NAME = new Map(
  AUTHORS.flatMap((author) => {
    const keys = [
      author.name.toLowerCase(),
      author.slug,
      author.name.split(" ")[0]?.toLowerCase() ?? "",
    ].filter(Boolean);
    return keys.map((key) => [key, author] as const);
  }),
);

/** Resolve an ingest / post author name to a known profile. Unknown names fall back to Alex. */
export function resolveAuthor(name?: string | null): AuthorProfile {
  if (!name?.trim()) return DEFAULT_AUTHOR;
  return BY_NAME.get(name.trim().toLowerCase()) ?? DEFAULT_AUTHOR;
}
