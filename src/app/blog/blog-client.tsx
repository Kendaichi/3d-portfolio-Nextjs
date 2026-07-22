"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import { BLOG_POSTS } from "@/lib/posts";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* Cards settle at a slight tilt on entrance, then straighten + lift on hover.
   `custom` carries each card's resting rotation. */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (rot: number) => ({
    opacity: 1,
    y: 0,
    rotate: rot,
    transition: { duration: 0.5, ease: "easeOut" },
  }),
};
const hoverStraighten = { rotate: 0, y: -8, scale: 1.025 };

/* Per-post scrapbook presentation. Posts not listed fall back to a plain
   "index" note with a hashed tilt, so adding a post never breaks this page. */
type Variant = "polaroid" | "postcard" | "index";
const PRESENTATION: Record<
  string,
  { variant?: Variant; image?: string; rot?: number }
> = {
  "two-sites-three-days": {
    variant: "polaroid",
    image: "/assets/kiona/hydrawellnesslux.webp",
    rot: -2.5,
  },
  "hvacr-group": {
    variant: "polaroid",
    image: "/assets/hvacrgroup/homepage.webp",
    rot: 2,
  },
  "acro-refrigeration": {
    variant: "postcard",
    image: "/assets/acro/new-website.webp",
    rot: 1.5,
  },
  "acro-refrigeration-90-days": {
    variant: "polaroid",
    image: "/assets/acro60daysafter/pagespeedresult.webp",
    rot: -2,
  },
  "wordpress-vs-hardcoded": { variant: "index", rot: 2.5 },
  "wp2shell-wordpress-core-rce": {
    variant: "polaroid",
    image: "/assets/wordpress-core/wordpress-core.webp",
    rot: -2,
  },
};

// Subtle scrapbook pin hues (echo the colored pins on the case-study pages).
const PIN_COLORS = ["#ef4444", "#3b82f6", "#22c55e", "#eab308"];
const FALLBACK_ROTS = [-2.5, 2, -1.5, 1.5, 2.5, -2, 3, -3];
function fallbackRot(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) % 997;
  return FALLBACK_ROTS[h % FALLBACK_ROTS.length];
}

/* ── decorations ────────────────────────────────────────────── */
function Pushpin({ color }: { color: string }) {
  return (
    <div
      className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 h-4 w-4 rounded-full"
      style={{
        background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.85), ${color} 55%, rgba(0,0,0,0.6) 100%)`,
        boxShadow: "0 3px 6px rgba(0,0,0,0.5)",
      }}
    />
  );
}

function Tape({ rot }: { rot: number }) {
  return (
    <div
      className="absolute -top-3 left-6 z-20 h-6 w-16 rounded-sm bg-foreground/[0.07] backdrop-blur-sm border border-foreground/[0.06]"
      style={{ transform: `rotate(${rot}deg)` }}
    />
  );
}

/* eslint-disable @next/next/no-img-element */
function CardMeta({ date, type }: { date: string; type: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
      <span>{date.slice(0, 4)}</span>
      <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
      <span>{type}</span>
    </div>
  );
}

/* ── main page ──────────────────────────────────────────────── */
export default function BlogClient() {
  const decorated = BLOG_POSTS.map((post, i) => {
    const pres = PRESENTATION[post.slug] ?? {};
    return {
      post,
      pres,
      variant: (pres.variant ?? "index") as Variant,
      rot: pres.rot ?? fallbackRot(post.slug),
      pin: PIN_COLORS[i % PIN_COLORS.length],
    };
  });

  const pinned = decorated.filter((d) => d.post.featured);
  const notes = decorated.filter((d) => !d.post.featured);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CustomCursor />

      {/* Subtle grid background */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <main className="relative z-10">
        {/* Header */}
        <div className="container max-w-4xl pt-12 pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>

        {/* Page Title */}
        <motion.div
          className="container max-w-4xl pb-12"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2"
          >
            Case Studies & Insights
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Blog
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground mt-4 max-w-2xl"
          >
            Deep dives into real projects — the problems, the process, and the results.
          </motion.p>
        </motion.div>

        {/* ── Pinned to the board ── */}
        {pinned.length > 0 && (
          <div className="container max-w-5xl pb-16">
            <div className="flex items-baseline gap-3 mb-8">
              <h2 className="text-xl font-bold tracking-tight">Pinned to the board</h2>
              <span className="text-sm font-mono text-muted-foreground">
                — worth a second look
              </span>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-8 sm:gap-10 px-2">
              {pinned.map(({ post, pres, rot, pin }) => (
                <motion.div
                  key={post.slug}
                  className="relative w-full sm:w-[300px]"
                  custom={rot}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={hoverStraighten}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Pushpin color={pin} />
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="bg-card border border-border/40 rounded-md p-3 shadow-xl shadow-black/40 hover:border-border/70 transition-colors">
                      {pres.image && (
                        <div className="overflow-hidden rounded-sm bg-black/20">
                          <img
                            src={pres.image}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-44 object-cover"
                          />
                        </div>
                      )}
                      <div className="pt-3 space-y-2">
                        <CardMeta date={post.date} type={post.type} />
                        <h3 className="text-lg font-bold tracking-tight leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {post.preview}
                        </p>
                        <p className="text-xs font-medium text-foreground/60 pt-1">
                          {post.cta} →
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ── All notes (masonry) ── */}
        <div className="container max-w-5xl pb-24">
          <div className="flex items-baseline gap-3 mb-8">
            <h2 className="text-xl font-bold tracking-tight">All notes</h2>
            <span className="text-sm font-mono text-muted-foreground">
              — scattered, not sorted
            </span>
          </div>

          <div
            className="columns-1 sm:columns-2 lg:columns-3"
            style={{ columnGap: "2rem" }}
          >
            {notes.map(({ post, pres, variant, rot, pin }, i) => {
              const tapeRot = -8 + (i % 3) * 4;
              return (
                <motion.div
                  key={post.slug}
                  className="relative inline-block w-full mb-8 align-top break-inside-avoid"
                  custom={rot}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={hoverStraighten}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {variant === "polaroid" ? (
                    <Pushpin color={pin} />
                  ) : (
                    <Tape rot={tapeRot} />
                  )}

                  <Link href={`/blog/${post.slug}`} className="block">
                    {variant === "index" && (
                      <div
                        className="bg-card/70 border border-border/30 rounded-md p-6 shadow-lg shadow-black/30 hover:border-border/60 transition-colors space-y-2"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(transparent, transparent 27px, rgba(255,255,255,0.05) 28px)",
                        }}
                      >
                        <CardMeta date={post.date} type={post.type} />
                        <h3 className="text-xl font-bold tracking-tight leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {post.preview}
                        </p>
                        <p className="text-xs font-medium text-foreground/60 pt-1">
                          {post.cta} →
                        </p>
                      </div>
                    )}

                    {variant === "postcard" && (
                      <div className="relative bg-card/50 border border-dashed border-border/60 rounded-md p-4 shadow-lg shadow-black/30 hover:border-border/80 transition-colors">
                        {/* stamp */}
                        <div className="absolute top-3 right-3 h-10 w-8 rounded-sm border border-dashed border-border/70 bg-foreground/[0.04] rotate-6" />
                        {pres.image && (
                          <div className="float-left mr-3 mb-2 h-24 w-24 overflow-hidden rounded-sm bg-black/20">
                            <img
                              src={pres.image}
                              alt={post.title}
                              loading="lazy"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        )}
                        <CardMeta date={post.date} type={post.type} />
                        <h3 className="text-lg font-bold tracking-tight leading-snug mt-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                          {post.preview}
                        </p>
                        <p className="clear-both text-xs font-medium text-foreground/60 pt-3">
                          {post.cta} →
                        </p>
                      </div>
                    )}

                    {variant === "polaroid" && (
                      <div className="bg-card border border-border/40 rounded-md p-3 shadow-lg shadow-black/30 hover:border-border/70 transition-colors">
                        {pres.image && (
                          <div className="overflow-hidden rounded-sm bg-black/20">
                            <img
                              src={pres.image}
                              alt={post.title}
                              loading="lazy"
                              className="w-full h-40 object-cover"
                            />
                          </div>
                        )}
                        <div className="pt-3 space-y-2">
                          <CardMeta date={post.date} type={post.type} />
                          <h3 className="text-lg font-bold tracking-tight leading-snug">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {post.preview}
                          </p>
                          <p className="text-xs font-medium text-foreground/60 pt-1">
                            {post.cta} →
                          </p>
                        </div>
                      </div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-border/20 py-8">
          <div className="container max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 — Engineered with precision.</p>
            <Link href="/" className="hover:text-foreground transition-colors">
              Back to Portfolio
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
