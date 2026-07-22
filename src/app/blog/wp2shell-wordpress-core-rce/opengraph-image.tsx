import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt =
  "wp2shell — a pre-auth RCE in WordPress core. Patch to 6.9.5 or 7.0.2.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Field Notes — WordPress Security",
    title: "wp2shell: RCE in WordPress Core",
    subtitle: "No plugin. No login. Patch to 6.9.5 or 7.0.2 now.",
  });
}
