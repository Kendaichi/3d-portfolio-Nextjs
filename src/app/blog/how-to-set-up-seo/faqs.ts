// Plain (non-"use client") module so BOTH the server page (`page.tsx`, for
// FAQPage JSON-LD) and the client component (visible FAQ section) can import
// this. Exports of a "use client" module become client-reference proxies the
// server can't iterate — hence this lives on its own.

export interface FaqItem {
  q: string;
  a: string;
}

// Verbatim "People also ask" questions around "how to set up SEO" / "SEO for
// beginners", each with a concise ~45–60 word answer drawn from this post.
export const FAQS: FaqItem[] = [
  {
    q: "How do I set up SEO for my website?",
    a: "Start with the foundation: make sure your site is crawlable (server-rendered HTML), give every page a unique title tag and meta description, use one clear H1 and logical headings, target real keywords in genuinely useful content, add an XML sitemap and robots.txt, then submit the site to Google Search Console so Google can find and index it.",
  },
  {
    q: "How do I start SEO for beginners?",
    a: "Begin small and in order: install Google Search Console and Analytics, pick a handful of keywords your customers actually search, write one strong page per keyword, nail the technical basics (speed, mobile, HTTPS, titles, sitemap), then build off-page signals like a Google Business Profile, social profiles, and links. Consistency beats intensity.",
  },
  {
    q: "Can I do SEO myself?",
    a: "Yes. The fundamentals — keyword research, writing helpful content, setting titles and meta descriptions, submitting a sitemap, claiming your Google Business Profile — are all learnable and free. You'll want help for deep technical fixes, competitive niches, or large sites, but most small businesses can set up solid SEO themselves.",
  },
  {
    q: "What are the 3 types of SEO?",
    a: "Technical SEO (making your site fast, crawlable, and indexable), on-page SEO (titles, headings, content, and keywords on each page), and off-page SEO (signals from outside your site — backlinks, Google Business Profile, social and LinkedIn profiles, reviews, and mentions). A complete setup covers all three.",
  },
  {
    q: "How do I add my website to Google?",
    a: "You don't pay or wait to be added — verify your site in Google Search Console, submit your XML sitemap, and use the URL Inspection tool to request indexing of key pages. Make sure robots.txt isn't blocking Google and pages aren't set to \"noindex.\" Google then crawls and indexes you automatically.",
  },
  {
    q: "Does social media help SEO?",
    a: "Indirectly, yes. Most social links are \"nofollow,\" so they don't pass direct ranking power — but social profiles themselves rank in search, drive traffic and brand searches, and get your content discovered and linked to. Optimized, consistent profiles are part of your off-page SEO even if they aren't a direct ranking factor.",
  },
  {
    q: "How do I optimize my social media profiles for SEO?",
    a: "Use a consistent name, handle, and NAP (name, address, phone) across every platform, put real keywords in your bio and description, link to your website, and use a recognizable profile image. Post content that points back to your site. Complete, consistent profiles rank for your brand and reinforce trust.",
  },
  {
    q: "Does LinkedIn help with SEO?",
    a: "Yes. LinkedIn profiles and company pages rank strongly in Google, especially for personal and brand names, and they build authority and referral traffic. Optimize your headline and About section with keywords, claim a custom URL, list your website, and publish articles — LinkedIn is one of the highest-authority profiles you can own.",
  },
  {
    q: "How do I optimize my LinkedIn profile for SEO?",
    a: "Write a keyword-rich headline (not just your job title), fill the About section with the terms people search, set a custom public URL, add your website and skills, and publish or share content regularly. For businesses, complete the company page too. LinkedIn's domain authority means these pages often rank on page one.",
  },
  {
    q: "How long does SEO take to work?",
    a: "Usually three to six months to see meaningful movement, and longer in competitive niches. Technical fixes and a Google Business Profile can show results in weeks; ranking content and earning links takes time. SEO compounds — the work you do now keeps paying off, unlike ads that stop the moment you stop paying.",
  },
  {
    q: "Is SEO free?",
    a: "The work is free to do yourself — Google Search Console, a Business Profile, writing content, and optimizing pages cost nothing but time. What costs money is scale and speed: tools, a developer for technical work, writers, or an agency. You can absolutely start for free and invest more as it proves out.",
  },
  {
    q: "What is off-page SEO?",
    a: "Everything that builds your site's authority from outside it: backlinks from other sites, your Google Business Profile, optimized social and LinkedIn profiles, directory citations, reviews, and brand mentions. If on-page SEO is making your site worth ranking, off-page SEO is the rest of the web vouching that it deserves to.",
  },
];
