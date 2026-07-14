"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Zap,
  Gauge,
  Search,
  Puzzle,
  ShieldAlert,
  Wrench,
  Lock,
  TrendingDown,
  Code2,
  Feather,
  ShieldCheck,
  DollarSign,
  Rocket,
  Scale,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Clock,
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";

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
      className={`${bgMap[color]} border rounded-sm p-4 shadow-md shadow-black/10 h-full`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}

/* ── head-to-head comparison row ────────────────────────────── */

function VersusRow({
  label,
  wp,
  code,
  wpWins = false,
}: {
  label: string;
  wp: string;
  code: string;
  wpWins?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="grid grid-cols-1 sm:grid-cols-[minmax(0,10rem)_1fr_1fr] gap-3 sm:gap-4 py-4 border-b border-border/20 last:border-b-0"
    >
      <p className="text-sm font-semibold text-foreground/80 sm:pt-0.5">
        {label}
      </p>

      {/* WordPress cell */}
      <div className="flex items-start gap-2">
        {wpWins ? (
          <CheckCircle2 className="h-4 w-4 text-green-400/70 mt-0.5 shrink-0" />
        ) : (
          <XCircle className="h-4 w-4 text-red-400/60 mt-0.5 shrink-0" />
        )}
        <p className="text-sm text-muted-foreground leading-relaxed">{wp}</p>
      </div>

      {/* Hardcoded cell */}
      <div className="flex items-start gap-2">
        {wpWins ? (
          <XCircle className="h-4 w-4 text-red-400/60 mt-0.5 shrink-0" />
        ) : (
          <CheckCircle2 className="h-4 w-4 text-green-400/70 mt-0.5 shrink-0" />
        )}
        <p className="text-sm text-muted-foreground leading-relaxed">{code}</p>
      </div>
    </motion.div>
  );
}

/* ── main page ──────────────────────────────────────────────── */

export default function WpVsHardcodedClient() {
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
            {["WordPress", "Custom Code", "Performance", "SEO", "Field Notes"].map(
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
            Insight — Web Architecture
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            WordPress vs.
            <br />
            <span className="text-gradient">Hardcoded</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            WordPress is the fastest way to get online — and often the slowest
            way to stay there. Here's where a hand-built, hardcoded site earns
            its edge, and why the convenience of WordPress can quietly turn into
            a liability over the long run.
          </motion.p>

          <motion.p
            variants={fadeIn}
            className="mt-6 text-sm italic text-muted-foreground/50 font-mono"
          >
            Written from the trenches — after migrating a client off WordPress.
          </motion.p>
        </motion.header>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 1: WHY WORDPRESS FEELS EASY
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
                01 — The Honest Case for WordPress
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Why It Wins the First Week
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Let's be fair. WordPress powers roughly 40% of the web for a
                reason — and dismissing it outright would be dishonest.
              </p>
              <p>
                You can go from an empty domain to a live, editable site in an
                afternoon. There's a theme for everything, a plugin for
                everything, and a client can update their own content without
                ever touching a line of code. For a brochure site, a small blog,
                or an MVP that needs to exist{" "}
                <span className="text-foreground/80">this week</span>, that speed
                is genuinely hard to beat.
              </p>
              <p>
                The trouble is that WordPress optimizes for the{" "}
                <span className="text-foreground/80">first week</span> — not the
                next five years. The bill for that convenience arrives later, and
                it compounds.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Rocket,
                  color: "green" as const,
                  rotate: -2,
                  title: "Fast to Launch",
                  body: "Pick a theme, install a few plugins, and you're live the same day. No build pipeline required.",
                },
                {
                  icon: Puzzle,
                  color: "blue" as const,
                  rotate: 1.5,
                  title: "Plugin for Everything",
                  body: "A vast ecosystem means most common features already exist as a one-click install.",
                },
                {
                  icon: Feather,
                  color: "yellow" as const,
                  rotate: -1,
                  title: "No-Code Editing",
                  body: "Non-technical owners can publish posts and tweak pages without calling a developer.",
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
            SECTION 2: THE LONG-RUN TAX
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
                02 — The Disadvantage That Compounds
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The Long-Run Tax of WordPress
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Every convenience WordPress offers is really a trade you make
                against the future. None of these hurt on day one. All of them
                hurt by year three.
              </p>
            </motion.div>

            {/* Long-run disadvantages — the compounding costs */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  icon: Gauge,
                  title: "Performance Bloat",
                  body: "Themes and page builders ship code for every feature you might use, not the few you do. Stack a dozen plugins on top and each one injects its own scripts and stylesheets. The result is render-blocking weight that no amount of caching fully hides — and Google's Core Web Vitals notice.",
                },
                {
                  icon: Puzzle,
                  title: "Plugin Dependency & Fragility",
                  body: "Your site is only as stable as the weakest plugin you installed. One abandoned plugin, one bad update, or one version conflict can take the whole site down — and you're now debugging code you never wrote and can't fully see.",
                },
                {
                  icon: ShieldAlert,
                  title: "A Bigger Attack Surface",
                  body: "As the most popular CMS on earth, WordPress is also the most targeted. Every plugin is another door an attacker can try. Security becomes a subscription: patch constantly, or become a statistic.",
                },
                {
                  icon: Wrench,
                  title: "The Maintenance Treadmill",
                  body: "Core updates, plugin updates, theme updates, PHP version bumps, backups, uptime monitoring. It never ends, and skipping it is how sites get breached. That's ongoing time or money spent just to stand still.",
                },
                {
                  icon: Lock,
                  title: "Lock-In You Don't Notice",
                  body: "Build your business on a premium theme or a proprietary page builder and your content gets entangled with their shortcodes and markup. Leaving later means untangling — or rebuilding — everything.",
                },
                {
                  icon: TrendingDown,
                  title: "A Ceiling on Customization",
                  body: "The moment you need something the ecosystem doesn't offer, you're fighting the platform instead of building on it. Custom features become awkward workarounds bolted onto a system that was never designed for them.",
                },
              ].map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  variants={i % 2 === 0 ? tiltLeft : tiltRight}
                  className="relative bg-card/60 border border-border/30 rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-red-500/20 bg-red-500/[0.05] flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-red-400/60" />
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
                "It works fine" — until the day it doesn't, all at once.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 3: THE HARDCODED EDGE
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
                03 — Where Custom Code Pulls Ahead
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The Hardcoded Edge
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                A hardcoded site — built with a modern framework like Next.js
                instead of a general-purpose CMS — starts from the opposite
                premise: ship only what this site actually needs, and own every
                line of it.
              </p>
              <p>
                That single decision flips almost every one of WordPress's
                long-run weaknesses into a strength.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Zap,
                  title: "Fast by Default",
                  body: "No plugin soup, no builder bloat. You ship lean HTML, CSS, and JS — often pre-rendered and served from the edge. Speed isn't a plugin you buy; it's the baseline.",
                },
                {
                  icon: Code2,
                  title: "Total Control",
                  body: "Any design, any feature, any integration — built exactly the way it should work, with no platform telling you what's possible.",
                },
                {
                  icon: ShieldCheck,
                  title: "A Smaller Attack Surface",
                  body: "No public admin panel to brute-force, no third-party plugins with unknown code. Fewer doors means far fewer ways in.",
                },
                {
                  icon: Search,
                  title: "SEO Baked In",
                  body: "Semantic markup, clean Core Web Vitals, structured data, and full control over metadata and redirects — the exact signals search engines reward.",
                },
                {
                  icon: DollarSign,
                  title: "Cheaper Over Time",
                  body: "No premium plugin licenses stacking up yearly, no bloated managed hosting to absorb the weight. Lower maintenance means lower total cost of ownership.",
                },
                {
                  icon: Lock,
                  title: "You Actually Own It",
                  body: "The code is yours, in plain files, portable to any host. No proprietary builder, no lock-in, no permission needed to move.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-2 hover:border-green-500/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full border border-green-500/20 bg-green-500/[0.05] flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-green-400/70" />
                    </div>
                    <h3 className="text-sm font-semibold">{title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* The honest trade-off note */}
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
                      Hardcoded costs more up front — it needs a developer to
                      build, and editing needs a plan. The right move isn't to
                      pretend that's free. It's to pair the custom build with a
                      lightweight or headless CMS, so owners keep the no-code
                      editing WordPress gave them, without inheriting its
                      long-run tax.
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
            SECTION 4: HEAD-TO-HEAD
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
                04 — Side by Side
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Head-to-Head
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-card/40 border border-border/30 rounded-xl p-6 sm:p-8"
            >
              {/* Column headers */}
              <div className="hidden sm:grid grid-cols-[minmax(0,10rem)_1fr_1fr] gap-4 pb-4 mb-2 border-b border-border/30">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Dimension
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  WordPress
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-foreground/80">
                  Hardcoded
                </span>
              </div>

              <VersusRow
                label="Time to launch"
                wp="Live in hours off a template — its one genuine edge."
                code="A real build, not a template — but a focused one still ships in about a week."
                wpWins
              />
              <VersusRow
                label="Performance"
                wp="Weighed down by plugin and builder overhead."
                code="Lean and edge-served — fast is the default state."
              />
              <VersusRow
                label="Maintenance"
                wp="A constant treadmill of updates and patches."
                code="Minimal — no plugin ecosystem to babysit."
              />
              <VersusRow
                label="Security"
                wp="The web's most-targeted CMS; a wide attack surface."
                code="Few moving parts, so far fewer ways in."
              />
              <VersusRow
                label="Customization"
                wp="Easy until you hit the ceiling, then you fight it."
                code="No ceiling — anything you can code, you can ship."
              />
              <VersusRow
                label="Long-term cost"
                wp="Recurring licenses, hosting, and upkeep add up."
                code="Higher up front, lower to run and own over time."
              />
              <VersusRow
                label="Ownership"
                wp="Tangled in themes, builders, and plugin lock-in."
                code="Plain, portable code that's fully yours."
              />
            </motion.div>

            <motion.p
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xs text-muted-foreground/60 mt-4 text-center"
            >
              WordPress wins the sprint. Hardcoded wins the marathon.
            </motion.p>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 5: THE VERDICT
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
                05 — So Which Should You Build?
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                It's About the Time Horizon
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                This was never about WordPress being "bad." It's about matching
                the tool to how long the site has to live and how much it has to
                carry.
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
                  <h3 className="text-lg font-semibold">Reach for WordPress when…</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "You need to be online today on a shoestring budget.",
                    "It's a simple blog or brochure site, content-only.",
                    "A non-technical owner must self-manage from day one.",
                    "It's a short-lived campaign, MVP, or throwaway.",
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
                  <h3 className="text-lg font-semibold">Go hardcoded when…</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "The site is core to the business, built to last years.",
                    "Speed and SEO directly drive leads or revenue.",
                    "You need custom features the ecosystem can't provide.",
                    "You're planning to scale, and want to own what you build.",
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
                For most serious businesses, the honest answer is a hardcoded
                build paired with a custom or headless CMS — the speed and
                ownership of custom code, with the editing freedom that made
                WordPress appealing in the first place. You get the sprint{" "}
                <span className="text-foreground/80">and</span> the marathon.
              </p>
              <p>
                That's exactly the migration I ran for{" "}
                <Link
                  href="/blog/acro-refrigeration"
                  className="text-foreground/90 underline decoration-border/50 underline-offset-4 hover:decoration-foreground/60 transition-colors"
                >
                  Acro Refrigeration
                </Link>{" "}
                — off a slow WordPress site and onto a custom Next.js platform,
                for a ~10x speed boost with zero rankings lost.
              </p>
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
              Outgrowing your WordPress site?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              If the maintenance, the slowness, or the ceiling is starting to
              cost you — let's talk about what a hardcoded rebuild could do for
              your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog/acro-refrigeration"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md border border-border/40 text-foreground/80 hover:text-foreground hover:border-border/60 transition-all"
              >
                Read the Acro Case Study →
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
