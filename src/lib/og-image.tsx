import { ImageResponse } from "next/og";

// Shared 1200x630 Open Graph / social card generator.
// Used by the file-based opengraph-image routes so every page gets a branded card.
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const ACCENT_DOTS = ["#5e6f8f", "#9a7b4f", "#4f8f63"]; // muted cube-sticker hues

export function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 85% 0%, rgba(94,111,143,0.22), transparent 55%), radial-gradient(circle at 0% 100%, rgba(79,143,99,0.16), transparent 55%)",
          color: "#fafafa",
        }}
      >
        {/* Top row: eyebrow + accent dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#a1a1a1",
            }}
          >
            {eyebrow}
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {ACCENT_DOTS.map((c) => (
              <div
                key={c}
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 999,
                  backgroundColor: c,
                }}
              />
            ))}
          </div>
        </div>

        {/* Title + subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 36, color: "#b4b4b4", maxWidth: 900 }}>
            {subtitle}
          </div>
        </div>

        {/* Footer: domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 28,
            fontSize: 26,
            color: "#8f8f8f",
          }}
        >
          www.daggerbuilds.com
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
