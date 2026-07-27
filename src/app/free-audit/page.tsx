import type { Metadata } from "next";
import FreeAuditClient from "./free-audit-client";
import { FAQS } from "./faqs";

const title = "Free Website Audit for Slow WordPress Sites";
const description =
  "Your WordPress site is slow and slipping in Google. Get a free 15-minute audit — I'll show you exactly what's slowing it down and how a fast, custom-coded rebuild wins back speed, rankings, and leads.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/free-audit" },
  // Ad/direct-traffic funnel — keep it out of search. Overrides the
  // site-wide index:true from the root layout. Uses a meta noindex (not a
  // robots.txt disallow) so crawlers can still read this directive.
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title,
    description,
    url: "/free-audit",
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FreeAuditClient />
    </>
  );
}
