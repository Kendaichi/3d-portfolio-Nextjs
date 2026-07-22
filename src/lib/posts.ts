// ─────────────────────────────────────────────────────────────
// Single source of truth for blog posts.
//
// Add a post here ONCE — the blog index (`blog-client.tsx`) and the
// sitemap (`sitemap.ts`) both read from `BLOG_POSTS`, so they can't drift.
//
// Still authored by hand when you add a post (they carry bespoke,
// longer-form copy, not the card `preview`):
//   • each post's own `blog/<slug>/page.tsx` metadata + JSON-LD
//   • the `## Pages` list in `public/llms.txt`
//   • the curated ~3-post "featured writing" section on the homepage
// ─────────────────────────────────────────────────────────────

export type PostType = "Case Study" | "Results" | "Insight";

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  /** ISO date `YYYY-MM-DD`. Drives ordering; the card renders the year. */
  date: string;
  type: PostType;
  /** Featured on the homepage's writing section + pinned on the blog index board. */
  featured?: boolean;
  cta: string;
  tags: string[];
  preview: string;
}

// Author in any order — consumers sort by `date`, newest first.
// NOTE: dates below the newest post are approximate (inferred from each
// project's content — e.g. Acro's "after" PageSpeed test was dated Apr 4,
// 2026). Replace them with the real publish dates when you have them.
const posts: BlogPost[] = [
  {
    slug: "wp2shell-wordpress-core-rce",
    featured: true,
    title: "wp2shell: No Plugin, No Login, No Excuse",
    subtitle:
      "A Pre-Auth RCE in WordPress Core — and Why Core Flaws Hit Every Site at Once",
    date: "2026-07-22",
    type: "Insight",
    cta: "Read the Breakdown",
    tags: ["WordPress", "Security", "RCE", "CVE-2026-60137", "Web Architecture"],
    preview:
      "A pre-authentication RCE chain in WordPress core — no plugins, no login required — hitting 6.9.x and 7.0.x. How to tell if you're exposed, how to patch to 6.9.5 / 7.0.2, how to check for compromise, and why a core-level flaw makes every site vulnerable at the same instant.",
  },
  {
    slug: "two-sites-three-days",
    title: "Two Custom Sites. Three Days.",
    subtitle:
      "Two Distinct Brands, One Client, One Non-Negotiable 72-Hour Deadline",
    date: "2026-07-16",
    type: "Case Study",
    cta: "Read Case Study",
    tags: [
      "React",
      "Custom Design",
      "Fast Delivery",
      "Responsive",
      "Landing Page",
    ],
    preview:
      "One client, two completely different brands — a premium Kangen water wellness site and a high-ticket coaching platform — designed and built from scratch in 72 hours. How a system, not a sprint, makes fast delivery possible without cutting corners.",
  },
  {
    slug: "acro-refrigeration-90-days",
    featured: true,
    title: "Acro Refrigeration — 90 Days Later",
    subtitle:
      "The Receipts: Traffic Doubled, Rankings Climbing, AI Assistants Discovering the Site",
    date: "2026-07-05",
    type: "Results",
    cta: "See the Numbers",
    tags: ["Next.js", "SEO", "Core Web Vitals", "Analytics", "Results"],
    preview:
      "Ninety days after the Acro rebuild: visitors up 110%, 91.5K Google search impressions, a 95 PageSpeed score that held, and chatgpt.com now in the referrer list. The receipts, in real numbers.",
  },
  {
    slug: "hvacr-group",
    featured: true,
    title: "One Client, Four Websites",
    subtitle: "How the Acro Rebuild Became a Whole Brand Family",
    date: "2026-05-20",
    type: "Case Study",
    cta: "Read Case Study",
    tags: ["Next.js", "Supabase", "Vercel", "Repeat Client", "SEO"],
    preview:
      "After the Acro Refrigeration rebuild, HVACR Group came back for three more brands — Shelair, HVACR Group, and Koolacube. One proven stack, four sites, every one scoring 90+ performance and 100 SEO.",
  },
  {
    slug: "acro-refrigeration",
    title: "Acro Refrigeration",
    subtitle:
      "From WordPress Bottleneck to a Lightning-Fast, SEO-Optimized Platform",
    date: "2026-04-10",
    type: "Case Study",
    cta: "Read Case Study",
    tags: ["Next.js", "Supabase", "Vercel", "CMS", "SEO"],
    preview:
      "How I rebuilt an Australian refrigeration company's entire web presence — migrating 100+ blog posts, building a custom CMS, and boosting page speed by 10x.",
  },
  {
    slug: "wordpress-vs-hardcoded",
    featured: true,
    title: "WordPress vs. Hardcoded",
    subtitle: "The Long-Run Edge of Custom Code Over WordPress",
    date: "2026-03-15",
    type: "Insight",
    cta: "Read the Breakdown",
    tags: ["WordPress", "Custom Code", "Performance", "SEO", "Field Notes"],
    preview:
      "WordPress wins the first week; a hardcoded site wins the next five years. Where custom-coded sites gain their edge — and how WordPress quietly becomes a disadvantage over the long run.",
  },
];

/** All posts, newest first. ISO date strings sort correctly lexicographically. */
export const BLOG_POSTS: BlogPost[] = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date)
);
