import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt =
  "Acro Refrigeration, 90 days after the rebuild — traffic doubled, 91.5K search impressions, still scoring 95";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Case Study — 90 Days Later",
    title: "90 Days After the Rebuild",
    subtitle:
      "Acro Refrigeration: traffic doubled, 91.5K search impressions, and still scoring 95.",
  });
}
