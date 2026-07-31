// Plain (non-"use client") module so BOTH the server page (`page.tsx`, for
// FAQPage JSON-LD) and the client component (visible FAQ section) can import
// this. Exports of a "use client" module become client-reference proxies the
// server can't iterate — hence this lives on its own.

export interface FaqItem {
  q: string;
  a: string;
}

// Verbatim "People also ask" questions from the "website vs social media for
// business" SERP, each with a concise ~45–60 word answer drawn from this post.
export const FAQS: FaqItem[] = [
  {
    q: "What is the difference between a website and social media?",
    a: "A website is property you own — your domain, your design, your rules, indexed by Google and permanent. Social media is rented space on a platform you don't control: it owns the audience, an algorithm decides who sees you, and the account can vanish overnight. One is a home; the other is a booth at someone else's fair.",
  },
  {
    q: "Is a website more important than social media?",
    a: "They do different jobs, so it depends on the goal. Social media is unbeatable for discovery and reach; a website is where you convert, sell, rank on Google, and actually own the relationship. The strongest setup uses social to attract and a website to capture — not one instead of the other.",
  },
  {
    q: "Is it worth having a website for your business?",
    a: "Almost always yes. A website is the one channel you fully own, works 24/7, builds trust, shows up in Google searches, and can't be shut down by a platform. For a few hundred dollars a year it's the highest-leverage asset most small businesses can own. The exceptions are rare and short-lived.",
  },
  {
    q: "Do I need a website or is social media enough?",
    a: "Social media alone is enough only if you're fine being invisible on Google, renting your audience, and losing everything if an account is banned. For testing an idea it can work briefly. For a real, lasting business, you need a website as the home base that social media points to.",
  },
  {
    q: "What are 5 advantages of websites?",
    a: "(1) You own it — no algorithm or ban can take it away. (2) It ranks on Google, bringing people who are actively searching. (3) It builds credibility and trust. (4) It works 24/7 to sell and capture leads. (5) You fully control the design, data, and customer experience.",
  },
  {
    q: "Can a website be considered social media?",
    a: "Not usually. Social media is a specific type of website built around user profiles, connections, and shared feeds — Facebook, Instagram, LinkedIn. A regular business or portfolio site is one-way publishing you control. You can add social features like comments or a forum, but that doesn't make your site a social network.",
  },
  {
    q: "Is Facebook a website or not?",
    a: "Facebook is a website — and an app — but more precisely it's a social media platform: a type of website organized around user accounts, connections, and a feed. So \"Facebook vs. a website\" really means your rented page on someone else's website versus a site you actually own.",
  },
  {
    q: "What are the 12 types of websites?",
    a: "Common types include business/corporate, e-commerce, portfolio, blog, personal, landing page, nonprofit, educational, news/magazine, forum/community, web app (SaaS), and social media. Most small businesses need a blend of business, e-commerce, blog, and landing-page — all things you own, unlike a rented social profile.",
  },
  {
    q: "Do I need a website to sell?",
    a: "No — but it helps enormously. You can sell through marketplaces or social shops, yet you pay their fees, follow their rules, and never own the customer. A website lets you sell on your terms, keep the full margin, collect customer data, and build a brand that isn't hostage to a platform.",
  },
  {
    q: "Are websites worth it anymore?",
    a: "More than ever. As social feeds get noisier and more pay-to-play, a website is the stable, ownable ground you control — searchable, permanent, and trusted. It's cheap, it compounds over time, and it keeps working when a platform changes its rules or an account gets suspended.",
  },
  {
    q: "What are common website red flags?",
    a: "Slow load times, no mobile layout, a missing HTTPS padlock, outdated design, broken links, and no clear contact info all erode trust instantly. Behind the scenes: thin or missing metadata, no structured data, and a platform you can't fully control. A red-flag site can do more harm than no site at all.",
  },
  {
    q: "Do small businesses need a website?",
    a: "Yes. Customers research online before they buy, and \"no website\" often reads as \"not a real business.\" A simple, fast site showing what you do, where you are, and how to reach you builds trust a social page can't — and it's the home base every other channel should point back to.",
  },
  {
    q: "What are the disadvantages of a website for a business?",
    a: "A website needs upfront setup, some ongoing maintenance, and it won't market itself — you still have to drive traffic. Done badly (slow, outdated, insecure) it can hurt more than help. But these are one-time or manageable costs against a permanent, owned asset — very different from renting attention forever.",
  },
  {
    q: "Do you still need a website in 2026?",
    a: "Yes — arguably more than before. AI assistants, search engines, and buyers all look for an authoritative source they can cite and trust, and that's your website, not a rented feed. Social platforms rise and fall; an owned, fast, crawlable site keeps you findable no matter which one is winning.",
  },
  {
    q: "Is a website better than Facebook?",
    a: "For owning your audience, ranking on Google, and controlling your brand — yes. Facebook is better for reach and discovery. They're complementary: use Facebook to get found and a website to convert and keep the relationship. The mistake is relying only on Facebook, where the platform owns your entire presence.",
  },
  {
    q: "Can I run a business without social media?",
    a: "Yes. Plenty of businesses thrive on a website plus SEO, email, referrals, and word of mouth — channels you own and that compound. Social media widens reach, but it isn't mandatory. What's far harder is running a lasting business with no website at all, renting every bit of your presence.",
  },
  {
    q: "What if we don't use social media?",
    a: "You can absolutely succeed without it — as long as owned channels do the work: a website that ranks, an email list, referrals, and reviews. Skipping social means giving up some reach, so lean harder on SEO and word of mouth. What you shouldn't skip is the website itself.",
  },
];
