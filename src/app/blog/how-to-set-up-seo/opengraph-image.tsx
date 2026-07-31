import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt =
  "How to set up SEO — from your website to social media and LinkedIn.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Insight — SEO Setup",
    title: "How to Set Up SEO",
    subtitle:
      "From your website to social, LinkedIn, and everywhere your customers search.",
  });
}
