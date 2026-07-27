import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Are AI website builders like Lovable good for SEO?";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Insight — AI & Search",
    title: "Are AI Builders Good for SEO?",
    subtitle:
      "AI builders ship a UI in minutes. Whether it can be found is another question entirely.",
  });
}
