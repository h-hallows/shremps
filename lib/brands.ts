// ----------------------------------------------------------------------------
// Brand registry — adding a new world is a single entry in this array.
// Hunter: replace the <PLACEHOLDER_*> URLs below with real social handles.
// ----------------------------------------------------------------------------

export type SocialPlatform =
  | "youtube"
  | "twitter"
  | "instagram"
  | "farcaster"
  | "tiktok";

export interface BrandSocial {
  platform: SocialPlatform;
  url: string;
}

export type BrandAccent = "shremp-orange" | "rainbow" | null;

export interface Brand {
  slug: string;
  name: string;
  descriptor: string;
  body: string;
  tags: string[];
  accent: BrandAccent;
  website: string | null; // primary "Visit →" CTA; null hides the button
  socials: BrandSocial[]; // empty array hides the social row
  status: "active" | "placeholder";
}

export const brands: Brand[] = [
  {
    slug: "shremps",
    name: "Shremps",
    descriptor: "Original IP universe.",
    body: "An ongoing world of characters, lore, and community that began in the on-chain era and has grown into a broader IP property. Multi-year community, ongoing storylines, expanding into new formats.",
    tags: ["Characters", "Lore", "Community", "Multi-year"],
    accent: "shremp-orange",
    website: null, // no standalone Shremps site yet — social row is the entire CTA
    socials: [
      // Hunter: replace these with the real Shremps social URLs.
      { platform: "youtube", url: "PLACEHOLDER_SHREMPS_YOUTUBE_URL" },
      { platform: "twitter", url: "PLACEHOLDER_SHREMPS_TWITTER_URL" },
      { platform: "instagram", url: "PLACEHOLDER_SHREMPS_INSTAGRAM_URL" },
    ],
    status: "active",
  },
  {
    slug: "shrempies",
    name: "Shrempies",
    descriptor: "Children's music, stories, and characters for Gen Beta.",
    body: "A bright, music-led world of original songs, story episodes, and dance videos for toddlers and young kids. Built with award-winning music collaborators and a cast of 25+ original characters.",
    tags: ["Music", "Stories", "Characters", "Ages 0–5"],
    accent: "rainbow",
    website: "https://shrempies.com",
    socials: [
      // Hunter: replace these with the real Shrempies social URLs.
      { platform: "youtube", url: "PLACEHOLDER_SHREMPIES_YOUTUBE_URL" },
      { platform: "twitter", url: "PLACEHOLDER_SHREMPIES_TWITTER_URL" },
      { platform: "instagram", url: "PLACEHOLDER_SHREMPIES_INSTAGRAM_URL" },
    ],
    status: "active",
  },
  {
    slug: "future",
    name: "More worlds in development",
    descriptor: "",
    body: "",
    tags: [],
    accent: null,
    website: null,
    socials: [],
    status: "placeholder",
  },
];
