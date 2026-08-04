"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Palette,
  Wand2,
  Server,
  Rocket,
  Search,
  CheckCircle2,
  XCircle,
  Lightbulb,
  PenLine,
  Target,
  Link2,
  Network,
  Scale,
  Eye,
  Gauge,
  Code2,
  Unlock,
  Boxes,
  Clock,
  HelpCircle,
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import { FAQS } from "./faqs";

/* ── animation variants ─────────────────────────────────────── */

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const tiltLeft: Variants = {
  hidden: { opacity: 0, rotate: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    rotate: -1.5,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const tiltRight: Variants = {
  hidden: { opacity: 0, rotate: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    rotate: 1.5,
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

/* ── sticky note component ──────────────────────────────────── */

function StickyNote({
  children,
  color = "yellow",
  rotate = -3,
}: {
  children: React.ReactNode;
  color?: "yellow" | "blue" | "pink" | "green" | "red";
  rotate?: number;
}) {
  const bgMap = {
    yellow: "bg-yellow-500/[0.08] border-yellow-500/20",
    blue: "bg-blue-500/[0.08] border-blue-500/20",
    pink: "bg-pink-500/[0.08] border-pink-500/20",
    green: "bg-green-500/[0.08] border-green-500/20",
    red: "bg-red-500/[0.08] border-red-500/20",
  };

  return (
    <div
      className={`${bgMap[color]} border rounded-sm p-4 shadow-md shadow-black/10 h-full`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}

/* ── main page ──────────────────────────────────────────────── */

export default function FramerAiClient() {
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
            {["Framer", "AI Builders", "SEO", "Custom Code", "Field Notes"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-accent/50 text-muted-foreground border border-border/30"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-3"
          >
            Insight — Tools & Search
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            Framer AI vs.
            <br />
            <span className="text-gradient">Custom-Coded</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Framer AI can turn a sentence into a beautiful, live website before
            your coffee&apos;s cold. Whether it&apos;s the right place to build
            your <span className="text-foreground/80">business</span> is a very
            different question — and the honest answer isn&apos;t the hype or the
            backlash.
          </motion.p>

          <motion.p
            variants={fadeIn}
            className="mt-6 text-sm italic text-muted-foreground/50 font-mono"
          >
            Written from the trenches — after a client&apos;s friend ran a
            &ldquo;detector&rdquo; over a hand-coded site and called it just AI.
          </motion.p>
        </motion.header>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 1: WHAT FRAMER AI ACTUALLY IS
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
                01 — First, What It Actually Is
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Framer AI, Honestly
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Framer started life as a design and prototyping tool — Figma&apos;s
                neighborhood — and grew into a full website builder. Framer AI is
                the generative layer on top: describe a site, get a styled,
                editable, publishable page.
              </p>
              <p>
                It&apos;s genuinely good at what it does. Two things are just worth
                being clear on up front — it writes the code for you, and the site
                lives on Framer&apos;s platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Palette,
                  color: "blue" as const,
                  rotate: -2,
                  title: "Design-First Roots",
                  body: "It grew out of design and prototyping tooling, so its instincts are visual — layout, type, motion. It feels like a design app, not a code editor.",
                },
                {
                  icon: Wand2,
                  color: "green" as const,
                  rotate: 1.5,
                  title: "AI Generates It",
                  body: "Describe the site in plain English and Framer produces a responsive, styled page you can tweak visually. No blank editor, no boilerplate.",
                },
                {
                  icon: Server,
                  color: "yellow" as const,
                  rotate: -1,
                  title: "Framer Hosts It",
                  body: "The site runs on Framer's own infrastructure and code. Convenient — but it's their platform, their rendering, and their subscription.",
                },
              ].map(({ icon: Icon, color, rotate, title, body }) => (
                <motion.div
                  key={title}
                  variants={popIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <StickyNote color={color} rotate={rotate}>
                    <Icon className="h-5 w-5 text-foreground/40 mb-2" />
                    <p className="text-sm font-semibold text-foreground/80 mb-1">
                      {title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {body}
                    </p>
                  </StickyNote>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 2: WHERE FRAMER GENUINELY WINS
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
                02 — Credit Where It&apos;s Due
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Where Framer Genuinely Wins
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Being fair matters — because it&apos;s what makes the criticism
                that follows worth trusting. Framer is one of the best no-code
                builders out there, and for the right job it&apos;s an easy
                recommendation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Rocket,
                  color: "green" as const,
                  rotate: -2,
                  title: "Fast, Polished Launches",
                  body: "A designer-grade landing page or portfolio, live in hours, that looks far better than most templated builders manage.",
                },
                {
                  icon: Palette,
                  color: "blue" as const,
                  rotate: 1.5,
                  title: "Real Design Control",
                  body: "Pixel-level layout, animation, and responsiveness without fighting a rigid theme. Design-led teams genuinely love it.",
                },
                {
                  icon: Search,
                  color: "yellow" as const,
                  rotate: -1,
                  title: "SEO Basics Built In",
                  body: "Unlike app-style generators, Framer serves crawlable pages and gives you meta tags, alt text, and sitemaps out of the box.",
                },
              ].map(({ icon: Icon, color, rotate, title, body }) => (
                <motion.div
                  key={title}
                  variants={popIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <StickyNote color={color} rotate={rotate}>
                    <Icon className="h-5 w-5 text-foreground/40 mb-2" />
                    <p className="text-sm font-semibold text-foreground/80 mb-1">
                      {title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {body}
                    </p>
                  </StickyNote>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 3: IS FRAMER GOOD FOR SEO?
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
                03 — The Question Everyone Googles
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Is Framer Good for SEO?
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                The honest answer: better than most builders, with a real ceiling.
                Framer does the thing the single-page-app generators don&apos;t —
                it serves server-rendered, crawlable pages, and it exposes the SEO
                fields that actually matter.
              </p>
              <p>
                For a simple site, that&apos;s enough to rank. The ceiling shows up
                when SEO gets competitive.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={tiltLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-green-500/20 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400/70" />
                  <h3 className="text-lg font-semibold">Framer handles well…</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Crawlable, server-rendered pages by default.",
                    "Editable titles, descriptions & Open Graph tags.",
                    "Image alt text and basic on-page structure.",
                    "Auto-generated sitemap and clean URLs.",
                    "Solid out-of-the-box loading performance.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400/50 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={tiltRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-red-500/20 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 text-red-400/60" />
                  <h3 className="text-lg font-semibold">Where it hits a ceiling…</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Custom structured data for rich results & AI citations.",
                    "Deep Core Web Vitals tuning as the site grows.",
                    "Custom redirect rules and edge logic.",
                    "Large, programmatic content architectures.",
                    "Leaving — the site is locked to the platform.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-400/50 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              variants={tiltLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-xl mx-auto mt-12"
            >
              <StickyNote color="yellow" rotate={-1.5}>
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-400/60 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground/80 mb-1">
                      The honest trade-off
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      For a portfolio, a small-business landing page, or an
                      early-stage site, Framer&apos;s SEO is genuinely fine. For a
                      content-heavy site or a competitive niche where rankings are
                      the business, you&apos;ll eventually hit the platform&apos;s
                      edges — and on Framer, you can&apos;t code your way past them.{" "}
                      <Link
                        href="/blog/ai-website-builders-seo"
                        className="text-foreground/90 underline decoration-border/50 underline-offset-4 hover:decoration-foreground/60 transition-colors"
                      >
                        The deeper SEO mechanics live here.
                      </Link>
                    </p>
                  </div>
                </div>
              </StickyNote>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 4: WHAT NO PLATFORM WILL DO FOR YOU
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
                04 — Eligibility, Not Rankings
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                What It Won&apos;t Do For You (Nobody&apos;s Platform Does)
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                This is where honest answers separate from sales pages. Framer
                gives you a technically clean, fast site — and that earns you{" "}
                <span className="text-foreground/80 italic">eligibility</span>, not
                rankings. No platform, Framer included, will do any of this for
                you:
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  icon: PenLine,
                  title: "Write content that deserves to rank",
                  body: "Google ranks answers, not websites. A beautiful site with three paragraphs of vague copy loses to an ugly site with genuinely useful content — on any platform ever made.",
                },
                {
                  icon: Target,
                  title: "Do your keyword strategy",
                  body: "Knowing what your buyers actually search, mapping pages to that intent, and structuring content to answer it — that's strategy work no tool automates.",
                },
                {
                  icon: Link2,
                  title: "Build your authority",
                  body: "Backlinks, mentions, reviews, a Google Business Profile that matches your site — the off-page half of SEO happens entirely outside any platform.",
                },
                {
                  icon: Network,
                  title: "Fix a weak information architecture",
                  body: "If your services are buried, your URLs are chaos, and your internal linking is random, the crawler experiences the same confusion your visitors do.",
                },
              ].map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  variants={i % 2 === 0 ? tiltLeft : tiltRight}
                  className="relative bg-card/60 border border-border/30 rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-border/40 bg-accent/40 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-foreground/50" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={tiltRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-xl mx-auto mt-12"
            >
              <StickyNote color="blue" rotate={1.5}>
                <div className="flex items-start gap-3">
                  <Scale className="h-5 w-5 text-blue-400/60 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground/80 mb-1">
                      A useful bias detector
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      If someone tells you a platform choice alone will rank your
                      website, they&apos;re selling the platform. If someone tells
                      you a platform choice will{" "}
                      <span className="text-foreground/80 italic">prevent</span>{" "}
                      your site from ranking — in 2026, about Framer — they&apos;re
                      working from old information.
                    </p>
                  </div>
                </div>
              </StickyNote>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 5: THE "ANYONE COULD REBUILD IT" MYTH
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
                05 — The Asset Question
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                &ldquo;Anyone Could Rebuild It in an Afternoon&rdquo;
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                A client recently had a friend run an automated &ldquo;detector&rdquo;
                over a hand-coded site and conclude it was just AI — worth very
                little, recreatable in an afternoon for twenty dollars a month.
              </p>
              <p>
                It&apos;s worth unpacking, because it confuses a{" "}
                <span className="text-foreground/80">look</span> with an{" "}
                <span className="text-foreground/80">asset</span>. Anyone can copy
                how a site looks. What they can&apos;t copy in an afternoon is a
                site you own outright, that loads instantly, ranks, does exactly
                what your business needs, and can be extended in any direction with
                no platform rent. The visible design is the cheapest part.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8">
              <h3 className="text-lg font-semibold">
                How to tell a custom site from a template
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Four checks anyone can run in a couple of minutes.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  icon: Eye,
                  title: "View the page source",
                  body: "A Framer site carries Framer's own hosting and markup signatures; a custom site shows its own framework — say, a Next.js app on Vercel. Under the hood they're plainly not the same thing.",
                },
                {
                  icon: Gauge,
                  title: "Run Google PageSpeed Insights",
                  body: "Hand-optimized sites can hit 100s across performance, accessibility, best practices and SEO. Templated output rarely does — it ships heavier by default.",
                },
                {
                  icon: Code2,
                  title: "Look for real functionality",
                  body: "A custom CMS, logins, integrations, a bilingual system, bespoke logic — things no generator hands you. That's the part that's genuinely rebuild-in-an-afternoon-proof.",
                },
                {
                  icon: Unlock,
                  title: "Check who owns it",
                  body: "Can you export the code, move hosts, and change anything without a subscription? Ownership is the line between an asset you hold and a rental you keep paying for.",
                },
              ].map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  variants={i % 2 === 0 ? tiltLeft : tiltRight}
                  className="relative bg-card/60 border border-border/30 rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-border/40 bg-accent/40 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-foreground/50" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center pt-10"
            >
              <p className="text-sm italic text-muted-foreground/50 font-mono">
                The detector guessed from the design. The design was the one thing
                it could see.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 6: FRAMER vs. WORDPRESS vs. CUSTOM-CODED
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
                06 — The Three Roads
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Framer vs. WordPress vs. Custom-Coded
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Most site decisions come down to these three. None is &ldquo;best&rdquo;
                in a vacuum — they trade speed, control, and ownership differently.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: Palette,
                  name: "Framer",
                  best: "Design-led landing pages, portfolios, quick launches.",
                  strength: "Fast, polished, low-maintenance.",
                  catch: "Platform lock-in, an SEO & functionality ceiling, ongoing subscription.",
                },
                {
                  icon: Boxes,
                  name: "WordPress",
                  best: "Content-heavy sites and teams that want plugins.",
                  strength: "Flexible, with a huge ecosystem.",
                  catch: "Updates, security, plugin bloat, and speed overhead.",
                },
                {
                  icon: Code2,
                  name: "Custom-Coded",
                  best: "Sites that must rank, scale, or do something specific.",
                  strength: "Full control, top performance, you own it.",
                  catch: "Higher upfront cost; needs a developer.",
                },
              ].map(({ icon: Icon, name, best, strength, catch: gotcha }) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-4 hover:border-border/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full border border-border/40 bg-accent/40 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-foreground/60" />
                    </div>
                    <h3 className="text-base font-semibold">{name}</h3>
                  </div>
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div>
                      <p className="font-mono uppercase tracking-wider text-muted-foreground/60 mb-1">
                        Best for
                      </p>
                      <p className="text-muted-foreground">{best}</p>
                    </div>
                    <div>
                      <p className="font-mono uppercase tracking-wider text-muted-foreground/60 mb-1">
                        Strength
                      </p>
                      <p className="text-muted-foreground">{strength}</p>
                    </div>
                    <div>
                      <p className="font-mono uppercase tracking-wider text-muted-foreground/60 mb-1">
                        The catch
                      </p>
                      <p className="text-muted-foreground">{gotcha}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mt-12"
            >
              <p>
                The pattern is consistent: convenience up front, control over the
                long run. It&apos;s the same trade-off as the{" "}
                <Link
                  href="/blog/wordpress-vs-hardcoded"
                  className="text-foreground/90 underline decoration-border/50 underline-offset-4 hover:decoration-foreground/60 transition-colors"
                >
                  WordPress vs. hardcoded
                </Link>{" "}
                debate — and for anything that has to be found and owned, control
                wins.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 7: SO WHICH SHOULD YOU CHOOSE?
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
                07 — The Verdict
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Framer Is a Great Start. Custom Is the Graduation.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                This was never about Framer being &ldquo;bad.&rdquo; It&apos;s
                about matching the tool to the job — and being clear-eyed about
                what the site has to do.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={tiltLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-400/60" />
                  <h3 className="text-lg font-semibold">Reach for Framer when…</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "It's a portfolio, a simple landing page, or design-led.",
                    "You need it live this week.",
                    "Low maintenance matters more than deep control.",
                    "SEO isn't fiercely competitive in your niche yet.",
                    "Budget is tight in the early days.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-400/50 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={tiltRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Scale className="h-5 w-5 text-green-400/60" />
                  <h3 className="text-lg font-semibold">Build custom when…</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "The site must rank in a competitive niche.",
                    "You need custom functionality or a real backend.",
                    "Performance and ownership are non-negotiable.",
                    "It's a long-lived business asset, not a throwaway.",
                    "You want zero platform rent.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400/60 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mt-12"
            >
              <p>
                Framer isn&apos;t the enemy — for a lot of projects it&apos;s
                exactly right, and I&apos;ll happily tell a client to start there.
                But when a site becomes the business — when it has to be found, do
                real work, and belong to you — custom code stops being a luxury and
                becomes the cheaper option over time.
              </p>
              <p>
                A recent custom build for an elite protection brand hit a perfect
                100 across every Lighthouse category, bilingual, in a week —{" "}
                <Link
                  href="/blog/guardion"
                  className="text-foreground/90 underline decoration-border/50 underline-offset-4 hover:decoration-foreground/60 transition-colors"
                >
                  that&apos;s the Guardion case study
                </Link>
                .
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 8: PEOPLE ALSO ASK (FAQ)
            Verbatim question headings + concise answers so Google
            can lift them into "People also ask" / featured snippets.
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
                08 — People Also Ask
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Framer, Builders & SEO: Quick Answers
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              className="space-y-4"
            >
              {FAQS.map(({ q, a }) => (
                <motion.div
                  key={q}
                  variants={fadeUp}
                  className="bg-card/60 border border-border/30 rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full border border-border/40 bg-accent/40 flex items-center justify-center shrink-0">
                      <HelpCircle className="h-4 w-4 text-foreground/50" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{q}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {a}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
              Not sure whether to stay on Framer or go custom?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              If your Framer site is starting to hit a ceiling — SEO,
              functionality, or ownership — let&apos;s talk about what graduating
              to custom would actually look like.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog/ai-website-builders-seo"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md border border-border/40 text-foreground/80 hover:text-foreground hover:border-border/60 transition-all"
              >
                Read: AI Builders & SEO →
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
