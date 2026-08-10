import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt =
  "How to set up SEO for a website — the on-site technical and on-page setup, step by step.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Insight — Website SEO Setup",
    title: "How to Set Up SEO for a Website",
    subtitle:
      "The on-site setup, step by step — crawlable HTML, titles, schema, Core Web Vitals, and getting indexed.",
  });
}
