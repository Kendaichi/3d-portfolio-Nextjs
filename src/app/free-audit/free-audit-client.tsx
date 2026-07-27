"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Search,
  ShieldCheck,
  PenLine,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import { FAQS } from "./faqs";

/* ────────────────────────────────────────────────────────────────
   The ONE funnel destination. Every CTA on this page points here.
   Replace with your Cal.com / Calendly booking link when ready;
   until then it falls back to the site's existing contact form.
   Keep it a single source of truth — don't hardcode links inline.
──────────────────────────────────────────────────────────────── */
const BOOKING_URL = "/#contact";

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

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

/* ── the single, repeated CTA ───────────────────────────────── */

function CtaButton({
  children,
  size = "lg",
}: {
  children: React.ReactNode;
  size?: "lg" | "md";
}) {
  const pad = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  return (
    <a
      href={BOOKING_URL}
      className={`group inline-flex items-center gap-2 ${pad} font-semibold rounded-lg bg-foreground text-background shadow-lg shadow-black/20 hover:bg-foreground/90 hover:-translate-y-0.5 transition-all`}
    >
      {children}
      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </a>
  );
}

/* ── main page ──────────────────────────────────────────────── */

export default function FreeAuditClient() {
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
        {/* ━━━━━━━━━━━━━━━━ SECTION 1 — HERO ━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl min-h-[92vh] sm:min-h-screen flex flex-col justify-center py-16">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              className="text-xs sm:text-sm font-mono tracking-widest uppercase text-muted-foreground mb-5"
            >
              For slow WordPress sites
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 max-w-3xl"
            >
              Your WordPress Site Is Slow — and{" "}
              <span className="text-gradient">Google Is Quietly Punishing You</span>{" "}
              for It.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
            >
              Every second your site takes to load, visitors leave and your
              ranking drops. I rebuild slow WordPress sites into fast,
              custom-coded sites that load instantly and climb back up the search
              results.
            </motion.p>

            <motion.div variants={fadeUp}>
              <CtaButton>Get a Free Site Audit</CtaButton>
              <p className="mt-4 text-sm text-muted-foreground/70">
                No cost, no pitch. I'll show you exactly what's slowing your site
                down.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ━━━━━━━━━━━━━━━━ SECTION 2 — PROOF BAR ━━━━━━━━━━━━━━━━ */}
        <section className="border-y border-border/20 bg-card/30">
          <div className="container max-w-4xl py-10">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4"
            >
              {[
                { n: "+110%", l: "visitors after rebuild" },
                { n: "95", l: "PageSpeed score" },
                { n: "91.5K", l: "Google impressions" },
                { n: "100", l: "SEO score" },
              ].map((s) => (
                <motion.div key={s.l} variants={popIn} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient">
                    {s.n}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-snug">
                    {s.l}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 text-center text-xs text-muted-foreground/60 font-mono"
            >
              Real numbers from a recent client rebuild (Acro Refrigeration), 90
              days after launch.
            </motion.p>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━ SECTION 3 — THE PROBLEM ━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-3xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-10"
            >
              You've felt it, even if you can't name it:
            </motion.h2>

            <div className="space-y-4 mb-10">
              {[
                "Pages that take 4, 5, 6 seconds to load — and visitors gone before they finish loading.",
                "A stack of plugins you're scared to update because something always breaks.",
                "Rankings that keep slipping while faster competitors climb past you.",
                'A site that "worked fine" three years ago and now feels like a liability.',
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <AlertTriangle className="h-5 w-5 text-red-400/60 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="bg-card/50 border-l-2 border-red-500/40 rounded-r-lg p-6"
            >
              <p className="text-foreground/90 leading-relaxed">
                Here's the uncomfortable part:{" "}
                <span className="font-semibold">
                  Google measures site speed directly, and it uses it to decide
                  who ranks.
                </span>{" "}
                A slow site doesn't just annoy visitors — it actively pushes you
                down the results your customers are searching.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ━━━━━━━━━━━━━━━━ SECTION 4 — THE FIX ━━━━━━━━━━━━━━━━ */}
        <section className="border-t border-border/20">
          <div className="container max-w-4xl py-20 lg:py-28">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 max-w-2xl"
              >
                I rebuild slow WordPress sites as fast, custom-coded sites.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12"
              >
                Instead of a pile of plugins fighting each other, you get a site
                engineered to load instantly, rank well, and stay out of your way.
                Same content, same brand — just built properly underneath.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-6"
              >
                What that means for you
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Zap,
                    title: "Loads in under a second",
                    body: "Visitors stay instead of bouncing.",
                  },
                  {
                    icon: Search,
                    title: "Built for Google",
                    body: "Clean code and top speed scores are ranking fuel.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Nothing to break",
                    body: "No plugin roulette, no 11pm security scares.",
                  },
                  {
                    icon: PenLine,
                    title: "Still easy to edit",
                    body: "You update your content without touching code.",
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="bg-card/60 border border-border/30 rounded-lg p-6 flex items-start gap-4 hover:border-green-500/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full border border-green-500/20 bg-green-500/[0.05] flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-green-400/70" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━ SECTION 5 — CASE STUDY + CTA ━━━━━━━━━━━━━━━━ */}
        <section className="border-t border-border/20 bg-card/20">
          <div className="container max-w-3xl py-20 lg:py-28">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-3"
              >
                Real example
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-8"
              >
                Acro Refrigeration
              </motion.h2>

              <motion.div
                variants={fadeUp}
                className="text-left max-w-xl mx-auto space-y-3 mb-8"
              >
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Their old site was slow and invisible. After the rebuild:
                </p>
                {[
                  "Visitors up 110% in 90 days",
                  "91.5K Google search impressions",
                  "A 95 PageSpeed score that held steady",
                  "Even AI assistants started sending traffic — ChatGPT began showing up in their referrers",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400/70 mt-0.5 shrink-0" />
                    <p className="text-foreground/90 leading-relaxed">{item}</p>
                  </div>
                ))}
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10"
              >
                They liked the result so much they came back for{" "}
                <span className="text-foreground/90 font-semibold">
                  three more sites
                </span>{" "}
                — every one scoring 90+ performance and 100 SEO.
              </motion.p>

              <motion.div variants={popIn}>
                <CtaButton>Want Numbers Like These? Book a Free Audit</CtaButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━ SECTION 6 — HOW IT WORKS ━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-center"
            >
              How it works
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Free audit call (15 min)",
                  body: "I look at your current site and show you exactly what's slowing it down and costing you rankings.",
                },
                {
                  step: "2",
                  title: "You get a clear plan",
                  body: "What I'd change, what it'll cost, how long it takes. No jargon, no pressure.",
                },
                {
                  step: "3",
                  title: "I rebuild it",
                  body: "Fast, clean, yours. You go back to running your business.",
                },
              ].map(({ step, title, body }) => (
                <motion.div
                  key={step}
                  variants={fadeUp}
                  className="relative bg-card/60 border border-border/30 rounded-lg p-6"
                >
                  <span className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background text-sm font-bold shadow-md">
                    {step}
                  </span>
                  <h3 className="font-semibold mt-4 mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ━━━━━━━━━━━━━━━━ SECTION 7 — FAQ ━━━━━━━━━━━━━━━━ */}
        <section className="border-t border-border/20">
          <div className="container max-w-3xl py-20 lg:py-28">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-12"
              >
                Questions owners usually ask
              </motion.h2>

              <div className="space-y-4">
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
              </div>
            </motion.div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━ SECTION 8 — FINAL CTA ━━━━━━━━━━━━━━━━ */}
        <section className="border-t border-border/20 bg-card/30">
          <div className="container max-w-3xl py-24 text-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5"
              >
                Stop losing customers to a slow site.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground max-w-md mx-auto mb-10"
              >
                Find out exactly what's holding your site back — free, in 15
                minutes.
              </motion.p>
              <motion.div variants={popIn}>
                <CtaButton>Get My Free Site Audit</CtaButton>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="mt-6 text-sm text-muted-foreground/60"
              >
                Built by Franclloyd Dagdag — full-stack developer. Real sites,
                real numbers.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Minimal footer — deliberately no links out. */}
        <footer className="py-8 text-center">
          <p className="text-xs text-muted-foreground/50 font-mono">
            © 2026 Franclloyd D. Dagdag — Engineered with precision.
          </p>
        </footer>
      </main>
    </div>
  );
}
