"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Clock,
  Layers,
  Palette,
  Blocks,
  Rocket,
  MessageSquare,
  CheckCircle2,
  Droplets,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import Lightbox from "@/components/Lightbox";

/* ── assets ─────────────────────────────────────────────────── */

const SITES = [
  {
    key: "wellness",
    eyebrow: "The Wellness Brand",
    name: "HydraWellnessLux",
    tagline: "Premium Kangen Water",
    url: "https://www.hydraluxwellnesskbl.com/",
    image: "/assets/kiona/hydrawellnesslux.webp",
    caption: "hydraluxwellnesskbl.com",
    icon: Droplets,
    description:
      "A premium Kangen water brand built to feel as refined as the product itself. Deep, cosmic tones, elegant serif type, and a light/dark toggle — with sections for the science of the water, the lifestyle around it, and social proof. Calm, luxurious, and unhurried.",
  },
  {
    key: "coaching",
    eyebrow: "The Coaching Brand",
    name: "LimitlessKBL",
    tagline: "High-Ticket Sales Coaching",
    url: "https://kiona.hydraluxwellnesskbl.com/",
    image: "/assets/kiona/limitlesskbl.webp",
    caption: "kiona.hydraluxwellnesskbl.com",
    icon: TrendingUp,
    description:
      "Kiona's high-ticket sales coaching platform for women — a completely different register. A warm sunset palette, bold editorial headlines, and a conversion-first layout that drives straight to “Get Started.” Where the wellness site whispers, this one motivates.",
  },
];

/* ── animation variants ─────────────────────────────────────── */

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const tiltLeft: Variants = {
  hidden: { opacity: 0, rotate: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    rotate: -2,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const tiltRight: Variants = {
  hidden: { opacity: 0, rotate: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    rotate: 1.8,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

/* ── reusable scrapbook image slot ──────────────────────────── */

function ScrapbookImage({
  src,
  alt,
  caption,
  rotate = "left",
  tapePosition = "top",
}: {
  src?: string;
  alt: string;
  caption?: string;
  rotate?: "left" | "right" | "none";
  tapePosition?: "top" | "corner";
}) {
  const [zoomed, setZoomed] = useState(false);

  const rotateClass =
    rotate === "left"
      ? "-rotate-[2deg]"
      : rotate === "right"
      ? "rotate-[1.8deg]"
      : "";

  return (
    <div className={`relative ${rotateClass} group`}>
      {tapePosition === "top" && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-16 h-6 bg-foreground/[0.07] backdrop-blur-sm border border-foreground/[0.06] rounded-sm rotate-[1deg]" />
      )}
      {tapePosition === "corner" && (
        <>
          <div className="absolute -top-2 -left-2 z-10 w-10 h-5 bg-foreground/[0.07] backdrop-blur-sm border border-foreground/[0.06] rounded-sm -rotate-[12deg]" />
          <div className="absolute -top-2 -right-2 z-10 w-10 h-5 bg-foreground/[0.07] backdrop-blur-sm border border-foreground/[0.06] rounded-sm rotate-[12deg]" />
        </>
      )}

      <div className="bg-card border border-border/40 rounded-sm p-2 shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:shadow-black/30 transition-shadow duration-300">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-sm cursor-zoom-in"
            loading="lazy"
            role="button"
            tabIndex={0}
            onClick={() => setZoomed(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setZoomed(true);
              }
            }}
          />
        ) : (
          <div className="w-full aspect-video bg-accent/30 rounded-sm flex items-center justify-center border border-dashed border-border/40">
            <p className="text-xs text-muted-foreground/60 font-mono text-center px-4">
              {alt}
            </p>
          </div>
        )}
        {caption && (
          <p className="text-[11px] text-muted-foreground/70 font-mono mt-2 text-center italic">
            {caption}
          </p>
        )}
      </div>

      {src && (
        <Lightbox
          open={zoomed}
          src={src}
          alt={alt}
          onClose={() => setZoomed(false)}
        />
      )}
    </div>
  );
}

/* ── sticky note ────────────────────────────────────────────── */

function StickyNote({
  children,
  color = "yellow",
  rotate = -3,
}: {
  children: React.ReactNode;
  color?: "yellow" | "blue" | "pink" | "green";
  rotate?: number;
}) {
  const bgMap = {
    yellow: "bg-yellow-500/[0.08] border-yellow-500/20",
    blue: "bg-blue-500/[0.08] border-blue-500/20",
    pink: "bg-pink-500/[0.08] border-pink-500/20",
    green: "bg-green-500/[0.08] border-green-500/20",
  };

  return (
    <div
      className={`${bgMap[color]} border rounded-sm p-4 shadow-md shadow-black/10`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}

/* ── main page ──────────────────────────────────────────────── */

export default function TwoSitesThreeDaysClient() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CustomCursor />

      {/* Grid background */}
      <div
        className="fixed inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <main className="relative z-10">
        {/* ── Navigation ── */}
        <div className="container max-w-4xl pt-12 pb-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            All Case Studies & Insights
          </Link>
        </div>

        {/* ── Hero ── */}
        <motion.header
          className="container max-w-4xl pt-8 pb-16"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "Responsive",
              "72-Hour Build",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono rounded bg-accent/50 text-muted-foreground border border-border/30"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-3"
          >
            Case Study — Client Project
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            Two Custom Sites.
            <br />
            <span className="text-gradient">Three Days.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Kiona needed two complete, custom websites — a premium{" "}
            <span className="text-foreground/80">wellness brand</span> and a
            high-ticket <span className="text-foreground/80">coaching brand</span>{" "}
            — designed, built, and live in 72 hours. Two different audiences, two
            different looks, one deadline that wasn&apos;t moving. Both shipped on
            time, polished and production-ready.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            {SITES.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-card border border-border/40 text-foreground/80 hover:text-foreground hover:border-border/60 transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                Visit {site.name}
              </a>
            ))}
          </motion.div>
        </motion.header>

        {/* ── Stat strip ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-4 pb-8"
        >
          {[
            { metric: "2", label: "Sites Built", sublabel: "designed & shipped" },
            { metric: "72h", label: "Timeline", sublabel: "start to live" },
            { metric: "2", label: "Distinct Brands", sublabel: "one client" },
            { metric: "0", label: "Corners Cut", sublabel: "fully custom" },
          ].map(({ metric, label, sublabel }, i) => (
            <motion.div
              key={label}
              variants={popIn}
              className="bg-card/60 border border-border/30 rounded-lg p-5 text-center space-y-1"
              style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
            >
              <p className="text-2xl sm:text-3xl font-bold tracking-tight">
                {metric}
              </p>
              <p className="text-sm font-semibold text-foreground/80">{label}</p>
              <p className="text-xs text-muted-foreground">{sublabel}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 1: THE BRIEF
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                01 — The Brief
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                A Deadline That Didn&apos;t Blink
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Most developers quote two to four weeks for a single custom site.
                Kiona needed two — and she needed them in three days.
              </p>
              <p>
                The two sites couldn&apos;t have been further apart. One was a
                calm, premium wellness brand. The other, a bold, high-energy
                coaching platform. Same client, same deadline, two completely
                different worlds to build.
              </p>
              <p>
                A timeline like that comes with an obvious trap: speed usually
                means reaching for a template and calling it a day. The brief
                ruled that out. Both sites had to be genuinely custom — distinct
                identities, built from scratch.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div
                variants={popIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <StickyNote color="pink" rotate={-2.5}>
                  <Layers className="h-5 w-5 text-pink-400/60 mb-2" />
                  <p className="text-sm font-semibold text-foreground/80 mb-1">
                    Two Brands, Not One
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A wellness brand and a coaching brand — each needed its own
                    identity, voice, and design language.
                  </p>
                </StickyNote>
              </motion.div>

              <motion.div
                variants={popIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <StickyNote color="yellow" rotate={1.5}>
                  <Palette className="h-5 w-5 text-yellow-400/60 mb-2" />
                  <p className="text-sm font-semibold text-foreground/80 mb-1">
                    Custom, Not Template
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    No drag-and-drop builder, no off-the-shelf theme. Both sites
                    hand-built in React to fit each brand.
                  </p>
                </StickyNote>
              </motion.div>

              <motion.div
                variants={popIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <StickyNote color="blue" rotate={-1}>
                  <Clock className="h-5 w-5 text-blue-400/60 mb-2" />
                  <p className="text-sm font-semibold text-foreground/80 mb-1">
                    The Clock Was Fixed
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Three days, non-negotiable. The deadline set the pace — the
                    quality bar didn&apos;t move to meet it.
                  </p>
                </StickyNote>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 2: THE TWO BUILDS
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                02 — The Two Builds
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                One Client, Two Worlds
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground leading-relaxed max-w-2xl mb-16"
            >
              Here&apos;s what shipped — two sites that share nothing but a
              builder and a deadline.
            </motion.p>
          </motion.div>

          <div className="space-y-20">
            {SITES.map((site, i) => (
              <div
                key={site.name}
                className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center"
              >
                <motion.div
                  variants={i % 2 === 0 ? tiltLeft : tiltRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className={i % 2 === 1 ? "md:order-2" : ""}
                >
                  <ScrapbookImage
                    src={site.image}
                    alt={`${site.name} — ${site.tagline} — homepage`}
                    caption={site.caption}
                    rotate={i % 2 === 0 ? "left" : "right"}
                    tapePosition="corner"
                  />
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className={`space-y-4 ${i % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div>
                    <p className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted-foreground mb-1">
                      <site.icon className="h-4 w-4" />
                      {site.eyebrow}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                      {site.name}
                    </h3>
                    <p className="text-sm text-muted-foreground/80 mt-1">
                      {site.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {site.description}
                  </p>

                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group pt-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit {site.name}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </motion.div>
              </div>
            ))}
          </div>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm italic text-muted-foreground/50 font-mono text-center pt-16"
          >
            &quot;Same three days. You&apos;d never guess they came from the same
            desk.&quot;
          </motion.p>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 3: THE SYSTEM
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                03 — How It&apos;s Possible
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Fast Isn&apos;t Luck. It&apos;s a System.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Two custom sites in three days isn&apos;t about typing faster or
                skipping sleep. It&apos;s about a system that removes everything
                slow from the process — so the hours go into design and polish,
                not reinventing the basics.
              </p>
              <p>
                Nothing started from a blank file. Each build stands on a
                foundation that has already solved the boring, repetitive parts.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Blocks,
                  title: "Component-Driven React",
                  desc: "A library of reusable, battle-tested components — navs, sections, forms, motion — so each site is assembled and customized, not rebuilt from zero.",
                },
                {
                  icon: Palette,
                  title: "A Reusable Design System",
                  desc: "Spacing, type scale, color tokens, and interaction patterns already defined. Branding each site is a matter of theming, not starting over.",
                },
                {
                  icon: MessageSquare,
                  title: "A Tight Feedback Loop",
                  desc: "Live preview links shared early and often, so feedback landed in hours, not days. No waiting, no guessing, no rework piling up at the end.",
                },
                {
                  icon: Rocket,
                  title: "Ship-Ready Pipeline",
                  desc: "An instant preview-to-production deploy flow. Every change is live and reviewable in minutes — the last mile never becomes the bottleneck.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-card/60 border border-border/30 rounded-lg p-5 space-y-2 hover:border-border/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <h3 className="text-sm font-semibold">{title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 4: QUALITY UNDER PRESSURE
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                04 — The Result
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Fast, and Finished
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                The real question with any rushed job is what got sacrificed.
                Here, the honest answer is: nothing that matters.
              </p>
              <p>
                Both sites are fully responsive, custom-designed, and animated.
                Both went live inside the window. Speed was the constraint — never
                the excuse.
              </p>
            </motion.div>

            {/* Delivery checklist */}
            <motion.div
              variants={tiltLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-md"
            >
              <StickyNote color="green" rotate={-1.5}>
                <p className="flex items-center gap-2 text-sm font-semibold text-foreground/80 mb-3">
                  <Sparkles className="h-4 w-4 text-green-400/60" />
                  Delivered in 72 hours
                </p>
                <div className="space-y-2">
                  {[
                    "Two fully custom websites, designed from scratch",
                    "Two distinct brand identities — wellness & coaching",
                    "Responsive across mobile, tablet, and desktop",
                    "Light/dark mode on the wellness site",
                    "Considered motion and interaction throughout",
                    "Both live and delivered inside the deadline",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400/60 mt-0.5 shrink-0" />
                      <p className="text-xs text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </StickyNote>
            </motion.div>

            {/*
              Optional: drop in a real client testimonial from Kiona here as a
              pull-quote when you have one — the pattern below is ready to use.
              Left out intentionally rather than inventing a quote.

              <blockquote className="mt-10 max-w-2xl border-l-2 border-border/40 pl-5 text-lg italic text-foreground/80">
                "<Kiona's words here>"
                <footer className="mt-2 text-sm not-italic text-muted-foreground">
                  — Kiona, HydraWellnessLux & LimitlessKBL
                </footer>
              </blockquote>
            */}
          </motion.div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="container max-w-4xl py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card/40 border border-border/20 rounded-xl p-8 sm:p-12 text-center space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Working against an impossible deadline?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Two sites in three days isn&apos;t the everyday pace — but when the
              deadline is real and fixed, I can build to meet it without dropping
              the quality bar. Let&apos;s talk about yours.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md border border-border/40 text-foreground/80 hover:text-foreground hover:border-border/60 transition-all"
              >
                See More Work →
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/20 py-8">
          <div className="container max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 — Engineered with precision.</p>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
