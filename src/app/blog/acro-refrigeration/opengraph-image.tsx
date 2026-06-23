import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Acro Refrigeration — WordPress to a fast, SEO-optimized platform";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Case Study — Client Project",
    title: "Rebuilding Acro Refrigeration",
    subtitle: "From WordPress to a fast, SEO-optimized Next.js platform — 10x faster, zero rankings lost.",
  });
}
