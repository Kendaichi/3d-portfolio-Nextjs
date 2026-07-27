// Plain (non-"use client") module so BOTH the server page (`page.tsx`, for
// FAQPage JSON-LD) and the client component (visible FAQ section) can import
// this. Exports of a "use client" module become client-reference proxies the
// server can't iterate — hence this lives on its own.

export interface FaqItem {
  q: string;
  a: string;
}

// Verbatim "People also ask" questions, each with a concise ~40–55 word answer
// drawn from this post's content.
export const FAQS: FaqItem[] = [
  {
    q: "Should I use WordPress or code?",
    a: "It comes down to your time horizon. Reach for WordPress when you need a simple, content-only site online this week on a tight budget. Choose custom code when the site is core to your business, has to be fast and SEO-strong, and needs to last for years.",
  },
  {
    q: "Is anything better than WordPress?",
    a: "For business sites built to last, yes — a hardcoded site on a modern framework like Next.js. It is faster, more secure, and cheaper to run over time, and you fully own it. Pair it with a headless CMS and you keep no-code editing without WordPress's long-run tax.",
  },
  {
    q: "Why are people moving away from WordPress?",
    a: "Because the convenience compounds into cost. Theme and plugin bloat slow the site down, its large attack surface demands constant security patching, and updates never stop. What launches fast in week one turns slow, fragile, and expensive to maintain by year three.",
  },
  {
    q: "What is the disadvantage of WordPress?",
    a: "Its biggest disadvantage is long-run cost. Plugin and theme bloat drag down Core Web Vitals, its huge attack surface makes it the web's most-targeted CMS, and endless updates plus premium licenses (~$800/yr) mean you pay — in both time and money — just to stand still.",
  },
  {
    q: "Why is coding better than WordPress?",
    a: "A hardcoded site ships only what it needs: lean, edge-served, and fast by default. No plugin soup, a far smaller attack surface, SEO baked into semantic markup, near-zero recurring cost, and plain portable code you fully own — with no platform ceiling to fight.",
  },
];
