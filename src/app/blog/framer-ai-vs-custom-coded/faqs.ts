// Plain (non-"use client") module so BOTH the server page (`page.tsx`, for
// FAQPage JSON-LD) and the client component (visible FAQ section) can import
// this. Exports of a "use client" module become client-reference proxies the
// server can't iterate — hence this lives on its own.

export interface FaqItem {
  q: string;
  a: string;
}

// Verbatim "People also ask" questions from the "Framer AI" SERP, each with a

// concise ~45–60 word answer drawn from this post's content.
export const FAQS: FaqItem[] = [
  {
    q: "What is Framer AI?",
    a: "Framer is a design-first website builder, and Framer AI is its generative layer: describe a site in plain language and it produces a styled, editable, publishable page. It grew out of a design and prototyping tool, so its strength is visual polish and layout — you build and publish without writing traditional code.",
  },
  {
    q: "Is Framer AI good?",
    a: "For what it's built for, yes — it's one of the best tools for quickly producing a polished, responsive marketing site or portfolio without a developer. Its limits show when you need custom functionality, a real backend, fine-grained performance control, or full ownership of the code. A great starting point, not always the finish line.",
  },
  {
    q: "Is Framer good for SEO?",
    a: "Better than most builders, with a ceiling. Unlike client-rendered app generators, Framer serves crawlable pages and lets you edit titles, descriptions, alt text, and sitemaps — enough to rank simple sites. But advanced structured data, deep Core Web Vitals tuning, custom redirects, and scaling are constrained by the platform. Fine for straightforward sites; limiting for competitive SEO.",
  },
  {
    q: "Does Framer use coding?",
    a: "Framer writes the code for you. You design visually and it generates the underlying HTML, CSS, and JavaScript, hosted on Framer's own infrastructure — so you don't hand-write or directly own the codebase. Developers can add custom code components for extra functionality, but the core site is managed by Framer, not a repository you control.",
  },
  {
    q: "Is Framer like Figma?",
    a: "They share design-tool DNA and feel familiar, but they solve different problems. Figma is for designing and prototyping interfaces; Framer publishes real, live websites. You can design in Figma, but you can't ship a hosted site from it. Framer takes design a step further, into a working, published product.",
  },
  {
    q: "Should I learn Figma or Framer first?",
    a: "Learn Figma first if your goal is UI/UX design, prototyping, or working with development teams — it's the industry standard. Learn Framer first if you specifically want to design and publish live websites yourself without code. Many designers use both: Figma to design, Framer or a developer to build and ship.",
  },
  {
    q: "Which is better, Framer or WordPress?",
    a: "Different trade-offs. Framer is faster to launch, more polished by default, and lower-maintenance, but you're locked to its platform. WordPress is more flexible and extensible through plugins, but carries updates, security, and speed overhead. For a simple, design-led site, Framer usually wins; for complex or content-heavy sites, WordPress or a custom build does.",
  },
  {
    q: "Which platform is best for SEO?",
    a: "There's no single best platform — SEO depends on the rendering model and how much of the technical layer you control. The strongest results come from server-rendered or static sites (frameworks like Next.js, or a well-built static setup) where you own metadata, structured data, Core Web Vitals, and redirects. Judge any platform by whether it ships fast, crawlable HTML.",
  },
  {
    q: "Which AI is best for SEO optimization?",
    a: "AI tools help with SEO tasks — keyword research, drafting, meta descriptions, schema — but none do SEO end to end. The best results come from pairing an assistant like ChatGPT or Claude with human strategy and technical setup. Treat AI as leverage on a plan you own, not an autopilot that ranks your site for you.",
  },
  {
    q: "Which hosting is best for SEO?",
    a: "The best SEO hosting is fast, reliable, and global. Edge and CDN-backed platforms like Vercel, Netlify, or Cloudflare serve pages quickly worldwide, which helps Core Web Vitals and crawlability. Framer and WordPress hosts can rank fine too — speed, uptime, and HTTPS matter far more than the brand. Slow hosting quietly caps your rankings.",
  },
  {
    q: "Can I do SEO by myself?",
    a: "Yes — the fundamentals are learnable. You can handle on-page SEO, content, titles, descriptions, a sitemap, and Google Search Console yourself. Technical SEO, site architecture, and performance get harder on restrictive platforms, and competitive niches reward experience. Start solo, and bring in a specialist when SEO becomes critical to revenue.",
  },
];
