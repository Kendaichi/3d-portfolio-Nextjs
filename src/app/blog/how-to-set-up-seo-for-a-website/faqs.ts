// Plain (non-"use client") module so BOTH the server page (`page.tsx`, for
// FAQPage JSON-LD) and the client component (visible FAQ section) can import
// this. Exports of a "use client" module become client-reference proxies the
// server can't iterate — hence this lives on its own.

export interface FaqItem {
  q: string;
  a: string;
}

// Verbatim "People also ask" questions around "how to set up SEO for a
// website" — deliberately website/technical-leaning so they don't duplicate the
// broader, multi-channel FAQ on /blog/how-to-set-up-seo. Each answer is a
// concise ~45–60 words drawn from this post.
export const FAQS: FaqItem[] = [
  {
    q: "How do I set up SEO for a website step by step?",
    a: "Map each page to one keyword, make the site crawlable and server-rendered, give every page a unique title tag and meta description, use one clear H1 with logical headings, add an XML sitemap, robots.txt, canonical tags, and schema, pass Core Web Vitals, then submit the site in Google Search Console and request indexing.",
  },
  {
    q: "What is on-page SEO?",
    a: "On-page SEO is everything on the page itself that tells Google (and people) what it's about: the title tag, meta description, one H1 and logical subheadings, the actual content and keywords, the URL, internal links, and image alt text. It's the layer you control completely — every page is optimized one at a time.",
  },
  {
    q: "What is technical SEO?",
    a: "Technical SEO is making your site easy for search engines to crawl, render, and index: server-rendered HTML, a clean XML sitemap and robots.txt, canonical tags, HTTPS, mobile-friendliness, structured data, and fast Core Web Vitals. It doesn't change your words — it makes sure Google can actually read and trust the pages you wrote.",
  },
  {
    q: "Do I need to know how to code to set up SEO on a website?",
    a: "No. Keyword research, titles, meta descriptions, headings, content, and submitting to Search Console need no code. The technical layer — server-side rendering, sitemaps, canonical tags, schema, and Core Web Vitals — is easier with a developer or an SEO-friendly framework, but most of it is configuration, not programming.",
  },
  {
    q: "Why is my website not showing up on Google?",
    a: "Usually one of a few things: it isn't indexed yet, a stray \"noindex\" tag or robots.txt rule is blocking it, the content only renders in JavaScript that Google can't read, a canonical tag points elsewhere, or the page is too thin. Check the URL in Search Console's inspection tool — it tells you exactly why.",
  },
  {
    q: "How do I check if my website is SEO-friendly?",
    a: "Run the page through Google Search Console's URL Inspection and the Rich Results and PageSpeed Insights tools. Confirm it's indexed, view the rendered HTML to be sure your content and title appear, check Core Web Vitals are green, and view source to verify each page has a unique title, meta description, and one H1.",
  },
  {
    q: "Does website speed affect SEO?",
    a: "Yes. Core Web Vitals — loading (LCP), responsiveness (INP), and visual stability (CLS) — are confirmed Google ranking signals and, more importantly, a slow site loses visitors before they convert. Speed rarely wins a ranking outright, but it's the tiebreaker between otherwise equal pages and it directly affects conversions.",
  },
  {
    q: "How long does it take to set up SEO on a website?",
    a: "The setup itself is fast — a focused site can be technically SEO-ready in a day or two, and Google often indexes new pages within days of a Search Console request. Ranking is the slow part: expect three to six months of compounding before meaningful movement. Setup gets you eligible; content and time earn the position.",
  },
  {
    q: "How much does it cost to set up SEO for a website?",
    a: "The core setup is free to do yourself — Search Console, a sitemap, titles, meta descriptions, and schema cost nothing but time. Costs come from scale and speed: premium tools, a developer for technical work or a rebuild, or writers and an agency. You can start free and invest more once it proves out.",
  },
];
