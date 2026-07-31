"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Landmark,
  Share2,
  Search,
  Users,
  Ban,
  Shuffle,
  KeyRound,
  BadgeCheck,
  Clock,
  SlidersHorizontal,
  Wrench,
  Wallet,
  Megaphone,
  AlertTriangle,
  Home,
  Lightbulb,
  CheckCircle2,
  XCircle,
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

export default function WebsiteVsSocialClient() {
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
            {["Website", "Social Media", "Small Business", "SEO", "Field Notes"].map(
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
            Insight — Owned vs. Rented
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            Website vs.
            <br />
            <span className="text-gradient">Social Media</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Social media hands you an audience for free — then quietly keeps the
            keys. A website is the one address you actually{" "}
            <span className="text-foreground/80">own</span>. This is the honest
            breakdown of where each one wins, and why "just use Facebook" is a
            trap most businesses feel only after it's too late.
          </motion.p>

          <motion.p
            variants={fadeIn}
            className="mt-6 text-sm italic text-muted-foreground/50 font-mono"
          >
            Written from the trenches — after building the home base clients
            wished they'd owned sooner.
          </motion.p>
        </motion.header>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 1: THE CORE DIFFERENCE
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
                01 — The Core Difference
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Rented Land vs. Land You Own
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Here's the whole debate in one line: a website is property you
                own; social media is space you rent.
              </p>
              <p>
                On your website you control the domain, the design, the data, and
                the rules. Google indexes it, it stays put, and no one can take it
                away. A social page lives on someone else's platform — Facebook,
                Instagram, TikTok, LinkedIn — which owns the audience, sets the
                rules, and decides who sees you today.
              </p>
              <p>
                And yes — Facebook is a website. But more precisely it's a{" "}
                <span className="text-foreground/80">social media platform</span>:
                a type of website built around profiles, connections, and a feed.
                So "website vs. Facebook" really means{" "}
                <span className="text-foreground/80">
                  a site you own vs. a page you rent on someone else's site
                </span>
                .
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
                  <Landmark className="h-5 w-5 text-green-400/70" />
                  <h3 className="text-lg font-semibold">
                    Your website — land you own
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "You own the domain, the design, and every visitor's data.",
                    "Google indexes it — people find you while actively searching.",
                    "It's permanent; no algorithm change can bury it overnight.",
                    "It can't be suspended, shadow-banned, or deleted by a platform.",
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

              <motion.div
                variants={tiltRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-red-500/20 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Share2 className="h-5 w-5 text-red-400/60" />
                  <h3 className="text-lg font-semibold">
                    Social media — land you rent
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "The platform owns the audience — you just borrow it.",
                    "An algorithm decides how many followers even see each post.",
                    "Reach is increasingly pay-to-play; organic keeps shrinking.",
                    "One policy change or ban and your presence is gone.",
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
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 2: IS SOCIAL MEDIA ENOUGH?
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
                02 — "Isn't My Facebook Page Enough?"
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Do You Need a Website, or Is Social Media Enough?
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Social media alone <span className="text-foreground/80">can</span>{" "}
                carry a business — right up until it can't. It's enough only if
                you're comfortable being invisible on Google, renting your
                audience, and losing everything if an account gets banned. Here's
                what a social-only presence quietly costs you.
              </p>
            </motion.div>

            {/* social-only weak points */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  icon: Search,
                  title: "Invisible on Google",
                  body: "When someone searches for what you sell, a social profile rarely ranks the way a real website does. No website means you're simply not in the results your best-intent customers are looking at.",
                },
                {
                  icon: Users,
                  title: "You Don't Own the Audience",
                  body: "Your followers belong to the platform, not to you. You can't export them, email them directly, or reach them without paying to boost — you're renting access to people who chose to follow you.",
                },
                {
                  icon: Ban,
                  title: "One Ban From Zero",
                  body: "A wrongful flag, a hacked account, or a policy shift can erase years of work overnight — with no support line and no appeal that works. On your own site, that risk simply doesn't exist.",
                },
                {
                  icon: Shuffle,
                  title: "The Algorithm Decides",
                  body: "Even your existing followers only see a fraction of your posts. Reach is throttled and increasingly pay-to-play, so 'growing an audience' quietly turns into 'renting attention forever.'",
                },
                {
                  icon: KeyRound,
                  title: "No Home Base to Point To",
                  body: "Social is great for discovery, but there's nowhere to send people to buy, book, or read the full story on your terms. Without a website, every channel dead-ends on a feed you don't control.",
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
                      Can you run a business without social media?
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Yes — plenty thrive on a website plus SEO, email, referrals,
                      and reviews, all channels you own. Social media widens reach,
                      but it isn't mandatory. Running a lasting business with{" "}
                      <span className="text-foreground/70">no website at all</span>{" "}
                      — renting every bit of your presence — is the far harder bet.
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
            SECTION 3: 5 ADVANTAGES OF WEBSITES
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
                03 — The Case For Owning One
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Five Advantages of Owning a Website
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                A website isn't nostalgia — it's leverage. For a few hundred
                dollars a year it does five things a rented feed can't.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: KeyRound,
                  color: "green" as const,
                  rotate: -2,
                  title: "1. You Own It",
                  body: "No algorithm, ban, or policy change can take it away. It's the one asset in your marketing you fully control — permanently.",
                },
                {
                  icon: Search,
                  color: "blue" as const,
                  rotate: 1.5,
                  title: "2. Google Discovery",
                  body: "It ranks in search, bringing visitors who are actively looking for exactly what you offer — intent a social feed can't match.",
                },
                {
                  icon: BadgeCheck,
                  color: "yellow" as const,
                  rotate: -1,
                  title: "3. Credibility",
                  body: "A real site signals a real business. It's often the difference between 'looks legit' and a customer quietly moving on.",
                },
                {
                  icon: Clock,
                  color: "pink" as const,
                  rotate: 2,
                  title: "4. Works 24/7",
                  body: "It sells, books, and captures leads while you sleep — no post to write, no story to keep alive, no daily feeding required.",
                },
                {
                  icon: SlidersHorizontal,
                  color: "green" as const,
                  rotate: -1.5,
                  title: "5. Total Control",
                  body: "Design, data, customer experience, and the way your brand looks — all yours to shape, not squeezed into a platform's template.",
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

              {/* selling note fills the 6th cell */}
              <motion.div
                variants={popIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex"
              >
                <div className="bg-card/60 border border-border/30 rounded-lg p-4 flex flex-col justify-center">
                  <p className="text-sm font-semibold text-foreground/80 mb-1">
                    Do you need a website to sell?
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    No — but it pays. Marketplaces and social shops work, yet you
                    hand over fees, rules, and the customer. Your own site keeps
                    the margin, the data, and a brand that isn't hostage to a
                    platform.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 4: DISADVANTAGES & RED FLAGS
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
                04 — The Honest Downsides
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The Disadvantages — and the Red Flags
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                A website isn't free of trade-offs, and pretending otherwise would
                be dishonest. But its downsides are one-time or manageable — very
                different from renting attention forever. The bigger risk is a{" "}
                <span className="text-foreground/80">bad</span> website, which can
                cost you more trust than having none.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* disadvantages */}
              <motion.div
                variants={tiltLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-yellow-400/60" />
                  <h3 className="text-lg font-semibold">The real disadvantages</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    {
                      icon: Wallet,
                      text: "Upfront setup — some time and cost to build it right.",
                    },
                    {
                      icon: Wrench,
                      text: "Ongoing maintenance — hosting, updates, the occasional fix.",
                    },
                    {
                      icon: Megaphone,
                      text: "It won't market itself — you still drive the traffic.",
                    },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-2.5">
                      <Icon className="h-4 w-4 text-muted-foreground/60 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* red flags */}
              <motion.div
                variants={tiltRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-red-500/20 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-400/60" />
                  <h3 className="text-lg font-semibold">Common website red flags</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Slow load times and no mobile layout.",
                    "A missing HTTPS padlock — visitors see \"not secure.\"",
                    "Outdated design, broken links, dead pages.",
                    "No clear contact info or call to action.",
                    "Thin metadata and no structured data under the hood.",
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
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center pt-10"
            >
              <p className="text-sm italic text-muted-foreground/50 font-mono">
                A red-flag site can do more harm than no site at all — build it
                right or not at all.
              </p>
            </motion.div>
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
                05 — The Verdict
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                It's Not Either/Or — It's Owned + Rented
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                The real answer isn't "website vs. social media." It's both, doing
                different jobs. Social media is unbeatable for discovery; your
                website is where that attention converts into customers you keep.
              </p>
              <p>
                Use the rented reach to get found — then send people home to
                something you own.
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
                  <Megaphone className="h-5 w-5 text-blue-400/60" />
                  <h3 className="text-lg font-semibold">Use social media to…</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Get discovered by people who've never heard of you.",
                    "Build personality, community, and social proof.",
                    "Test messages fast and see what resonates.",
                    "Drive traffic back to the home base you own.",
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
                className="bg-card/60 border border-green-500/20 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-green-400/60" />
                  <h3 className="text-lg font-semibold">Use your website to…</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Rank on Google and catch high-intent searchers.",
                    "Convert visitors into sales, bookings, and leads.",
                    "Own the customer data and the relationship.",
                    "Stay findable no matter which platform is winning.",
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
                So do small businesses still need a website in 2026? More than
                ever. Buyers research online before they commit, and now AI
                assistants and search engines look for an authoritative source
                they can cite — and that source is your site, not a rented feed.
                Platforms rise and fall; an owned, fast, crawlable website is what
                keeps you findable through all of it.
              </p>
              <p>
                It's the same lesson as the{" "}
                <Link
                  href="/blog/wordpress-vs-hardcoded"
                  className="text-foreground/90 underline decoration-border/50 underline-offset-4 hover:decoration-foreground/60 transition-colors"
                >
                  WordPress vs. hardcoded
                </Link>{" "}
                debate: convenience up front, control over the long run — and for
                anything that has to last, control wins.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 6: PEOPLE ALSO ASK (FAQ)
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
                06 — People Also Ask
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Website vs. Social Media: Quick Answers
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
              Living on a rented feed — and want a home you own?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              If your whole business runs on someone else's platform, let's build
              the fast, searchable website that turns borrowed reach into
              customers you actually keep.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog/wordpress-vs-hardcoded"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md border border-border/40 text-foreground/80 hover:text-foreground hover:border-border/60 transition-all"
              >
                Read: WordPress vs. Hardcoded →
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
