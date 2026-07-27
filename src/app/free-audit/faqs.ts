// Plain (non-"use client") module so BOTH the server page (`page.tsx`, for
// FAQPage JSON-LD) and the client component (visible FAQ section) can import
// this. Exports of a "use client" module become client-reference proxies the
// server can't iterate — keep FAQ data here. See seo-faq-blog-pattern.

export interface FaqItem {
  q: string;
  a: string;
}

// Objection-handling FAQ for the "slow WordPress" audit funnel.
export const FAQS: FaqItem[] = [
  {
    q: "How much does a rebuild cost?",
    a: "It depends on the size of your site, but you'll get an exact number on the free call — no surprises. Most small-business sites are far more affordable than owners expect.",
  },
  {
    q: "How long does it take?",
    a: "Most marketing sites take a few weeks. You'll get a specific timeline after the audit, based on your actual site.",
  },
  {
    q: "Do you work with WordPress too?",
    a: "Yes. Sometimes the right answer is a better WordPress setup, not a full rebuild — and if that's your situation, I'll tell you straight. The audit is honest either way.",
  },
  {
    q: "Will I be able to update my own content?",
    a: "Yes. Your site comes with a simple way to edit your text and images — no code required.",
  },
  {
    q: "What if I just want to know what's wrong?",
    a: "That's exactly what the free audit is for. You'll see what's slowing your site down, where it looks dated, and how it's costing you rankings — with no obligation to hire me.",
  },
];
