import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "WordPress vs. Hardcoded — the long-run edge of custom code";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Insight — Web Architecture",
    title: "WordPress vs. Hardcoded",
    subtitle: "WordPress wins the first week. A hardcoded site wins the next five years.",
  });
}
