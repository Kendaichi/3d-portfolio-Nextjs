// Plain (non-"use client") module so BOTH the server page (`page.tsx`, for
// FAQPage JSON-LD) and the client component (visible FAQ section) can import
// this. Exports of a "use client" module become client-reference proxies the
// server can't iterate — hence this lives on its own.

export interface FaqItem {
  q: string;
  a: string;
}

// Verbatim "People also ask" questions from the AI-builders-vs-SEO SERP, each
// with a concise ~45–60 word answer drawn from this post's content.
export const FAQS: FaqItem[] = [
  {
    q: "Are AI website builders good for SEO?",
    a: "They're excellent for speed, mixed for SEO. Many generate client-rendered single-page apps with thin metadata and no structured data by default, which search engines crawl less reliably. They're great for prototyping — but an SEO-critical site usually needs server rendering and hand-tuned technical SEO layered on top.",
  },
  {
    q: "Are Lovable websites good for SEO?",
    a: "Lovable is superb for shipping React app UIs fast, but its default output is a client-rendered Vite SPA — not ideal for content SEO, since key text and metadata load via JavaScript. For a marketing site that must rank, you'll want server-side rendering, real meta tags, and structured data added deliberately.",
  },
  {
    q: "Which AI platform is best for SEO?",
    a: "The best SEO comes from the rendering model, not the brand. Tools that output server-rendered or static pages — or export to a framework like Next.js — beat pure client-side SPA generators. Judge any platform by whether it ships crawlable HTML, editable metadata, clean Core Web Vitals, and structured data.",
  },
  {
    q: "Is AI-generated content good for SEO?",
    a: "It can be. Google rewards helpful, accurate content regardless of how it's produced, and penalizes content made only to game rankings. Raw AI output is often thin, generic, or wrong. Edited by a human with real expertise and first-hand experience (E-E-A-T), it competes; unedited at scale, it gets filtered.",
  },
  {
    q: "Can AI do SEO for my website?",
    a: "AI is a powerful assistant, not autopilot. It's excellent for keyword research, drafts, meta descriptions, and schema markup. But technical SEO, site architecture, genuine expertise, and earning links still need human judgment. Treat AI as leverage on a strategy you own — not a replacement for one.",
  },
  {
    q: "Is SEO dead or evolving in 2026?",
    a: "Evolving, not dead. Search still drives enormous traffic; what changed is the surface. AI Overviews, answer engines, and zero-click results mean optimizing to be cited and summarized, not just ranked as a blue link. The fundamentals — fast, crawlable, genuinely helpful pages — matter more than ever.",
  },
  {
    q: "Why is SEO no longer relevant?",
    a: "It still is — the premise is a myth. What's fading is one tactic: thin, keyword-stuffed pages chasing rankings. Discovery has expanded across Google, AI Overviews, ChatGPT, and Perplexity, so SEO now means being visible and trustworthy everywhere people search. That's a bigger job, not a dead one.",
  },
  {
    q: "What is the biggest threat to SEO in 2026?",
    a: "Zero-click search. AI Overviews and chatbots increasingly answer queries right on the results page, so users never visit your site. The counter is content worth citing — original data, real expertise, and structured, crawlable pages that AI engines quote and link back to.",
  },
  {
    q: "What is SEO being replaced by?",
    a: "Not replaced — expanded. The emerging layers are GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization): making your content the source AI assistants cite. It's the same foundation — crawlable, authoritative, well-structured pages — aimed at a wider set of engines than Google alone.",
  },
  {
    q: "What is better than SEO now?",
    a: "Nothing replaces it; the winning move is SEO plus answer-engine visibility. Pair technically sound, helpful pages with content structured to be cited by AI assistants, and back it with owned channels — email, an audience, referrals — so you're not dependent on any single algorithm.",
  },
  {
    q: "Can ChatGPT do SEO?",
    a: "ChatGPT can accelerate SEO work — outlines, drafts, meta tags, schema, keyword clustering — but it can't run your strategy or verify facts, and it doesn't crawl or rank your site. Use it to move faster, then apply human review for accuracy, technical setup, and the expertise Google actually rewards.",
  },
  {
    q: "Is Google stopping SEO?",
    a: "No. Google is reshaping it — AI Overviews and stricter helpful-content standards change how you optimize, not whether. Google still has to crawl, understand, and rank pages, and it still sends billions of clicks. The playbook shifts toward genuine quality; the game continues.",
  },
];
