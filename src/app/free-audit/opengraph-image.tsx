import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Free website audit for slow, outdated WordPress sites";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Free Site Audit",
    title: "Fix Your Slow, Outdated WordPress Site",
    subtitle:
      "A free 15-minute audit — see what's costing you speed, rankings, and customers.",
  });
}
