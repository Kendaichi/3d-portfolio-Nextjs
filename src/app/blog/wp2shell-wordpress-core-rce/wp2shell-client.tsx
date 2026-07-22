"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldAlert,
  AlertTriangle,
  Terminal,
  Bug,
  Database,
  Link2,
  RefreshCw,
  ShieldCheck,
  Siren,
  Clock,
  XCircle,
  KeyRound,
  FileWarning,
  Wrench,
  Cloud,
  ExternalLink,
  Zap,
  Radar,
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";

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

/* ── sticky note ────────────────────────────────────────────── */

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

/* ── code block (scrolls inside its own box, never the page) ──── */

function CodeBlock({ label, code }: { label?: string; code: string }) {
  return (
    <div className="rounded-lg border border-border/40 bg-black/40 overflow-hidden not-prose">
      {label && (
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border/30 bg-white/[0.02]">
          <Terminal className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs font-mono text-muted-foreground tracking-wide">
            {label}
          </span>
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-xs sm:text-sm leading-relaxed">
        <code className="font-mono text-foreground/80 whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}

/* ── data ───────────────────────────────────────────────────── */

const TAGS = [
  "WordPress",
  "Security",
  "CVE-2026-60137",
  "CVE-2026-63030",
  "RCE",
  "Web Architecture",
];

type RowState = "danger" | "safe" | "warn" | "neutral";

const VULN_ROWS: {
  ver: string;
  sqli: string;
  sqliState: RowState;
  rce: string;
  rceState: RowState;
  action: string;
  actionState: RowState;
}[] = [
  {
    ver: "7.0.0 – 7.0.1",
    sqli: "Vulnerable",
    sqliState: "danger",
    rce: "Vulnerable",
    rceState: "danger",
    action: "Update to 7.0.2 immediately",
    actionState: "danger",
  },
  {
    ver: "7.0.2",
    sqli: "Patched",
    sqliState: "safe",
    rce: "Patched",
    rceState: "safe",
    action: "You're good",
    actionState: "safe",
  },
  {
    ver: "6.9.0 – 6.9.4",
    sqli: "Vulnerable",
    sqliState: "danger",
    rce: "Vulnerable",
    rceState: "danger",
    action: "Update to 6.9.5 immediately",
    actionState: "danger",
  },
  {
    ver: "6.9.5",
    sqli: "Patched",
    sqliState: "safe",
    rce: "Patched",
    rceState: "safe",
    action: "You're good",
    actionState: "safe",
  },
  {
    ver: "6.8.0 – 6.8.5",
    sqli: "Vulnerable",
    sqliState: "warn",
    rce: "Not chainable",
    rceState: "safe",
    action: "Update to the latest 6.8 security release",
    actionState: "warn",
  },
  {
    ver: "Below 6.8",
    sqli: "Not affected",
    sqliState: "neutral",
    rce: "Not affected",
    rceState: "neutral",
    action: "Different, older problems",
    actionState: "neutral",
  },
];

function cellColor(state: RowState) {
  switch (state) {
    case "danger":
      return "text-red-400/80";
    case "safe":
      return "text-green-400/80";
    case "warn":
      return "text-yellow-400/80";
    default:
      return "text-muted-foreground";
  }
}

const FAQ: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is wp2shell?",
    a: "wp2shell is the name given to a pre-authentication remote code execution chain in WordPress core, disclosed on July 17, 2026 by Searchlight Cyber's Assetnote team. It combines a SQL injection (CVE-2026-60137) with a REST API batch-route confusion bug (CVE-2026-63030) to let an anonymous attacker run code on the server.",
  },
  {
    q: "Which WordPress versions are affected by wp2shell?",
    a: "The full RCE chain affects WordPress 6.9.0 through 6.9.4 and 7.0.0 through 7.0.1. The SQL injection component alone also affects 6.8.0 through 6.8.5, but cannot be chained to remote code execution on that branch because the REST API batch endpoint did not exist yet.",
  },
  {
    q: "Which WordPress version fixes wp2shell?",
    a: "WordPress 6.9.5 and 7.0.2 fix the full chain. The 6.8 branch received a separate fix for the SQL injection component.",
  },
  {
    q: "Do I need plugins installed to be vulnerable to wp2shell?",
    a: "No. A stock WordPress install with zero plugins running an affected version is exploitable, because both flaws live in WordPress core.",
  },
  {
    q: "Is wp2shell being exploited in the wild?",
    a: "Public proof-of-concept exploits appeared on GitHub within a day of disclosure, and security firm watchTowr reported the first signs of in-the-wild exploitation shortly afterward.",
  },
  {
    q: "Does a WAF protect me from wp2shell?",
    a: "Only partially and temporarily. Cloudflare deployed WAF rules for both CVEs across all plans, including free accounts, but it stated these reduce exposure rather than replace patching. Update WordPress core as the actual fix.",
  },
  {
    q: "How do I check if my WordPress site is vulnerable to wp2shell?",
    a: "Check your version in the WordPress admin dashboard or run `wp core version` via WP-CLI, then compare it against the affected version ranges. Searchlight Cyber also published a free checker at wp2shell.com.",
  },
];

const SOURCES: { label: string; href: string }[] = [
  {
    label: "Searchlight Cyber — wp2shell: Pre-Authentication RCE in WordPress Core",
    href: "https://slcyber.io/research-center/wp2shell-pre-authentication-rce-in-wordpress-core/",
  },
  {
    label: "WordPress 7.0.2 Security Release",
    href: "https://wordpress.org/news/2026/07/wordpress-7-0-2-release/",
  },
  {
    label: "GitHub Advisory — CVE-2026-63030",
    href: "https://github.com/WordPress/wordpress-develop/security/advisories/GHSA-ff9f-jf42-662q",
  },
  {
    label: "GitHub Advisory — CVE-2026-60137",
    href: "https://github.com/WordPress/wordpress-develop/security/advisories/GHSA-fpp7-x2x2-2mjf",
  },
  {
    label: "BleepingComputer — wp2shell RCE flaws get public exploits",
    href: "https://www.bleepingcomputer.com/news/security/wordpress-core-wp2shell-rce-flaws-get-public-exploits-patch-now/",
  },
  {
    label: "The Hacker News — New wp2shell WordPress Core Flaw",
    href: "https://thehackernews.com/2026/07/new-wp2shell-wordpress-core-flaw-lets.html",
  },
  {
    label: "Cloudflare — WAF protections for WordPress vulnerabilities",
    href: "https://blog.cloudflare.com/wordpress-vulnerabilities/",
  },
];

const PATCH_CMD = `# Check what you're actually running
wp core version

# Update to the latest release on your branch
wp core update

# Verify, and confirm core files match the official checksums
wp core version
wp core verify-checksums`;

const AUDIT_CMD = `# PHP files changed since just before disclosure
find wp-content/ -name "*.php" -newermt "2026-07-15" -ls

# uploads/ should never contain PHP — anything here is a red flag
find wp-content/uploads/ -name "*.php" -ls`;

/* ── main page ──────────────────────────────────────────────── */

export default function Wp2shellClient() {
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
          className="container max-w-4xl pt-8 pb-12"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono rounded bg-accent/50 text-muted-foreground border border-border/30"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/[0.06] text-red-400/90"
          >
            <Siren className="h-3.5 w-3.5" />
            <span className="text-xs font-mono uppercase tracking-widest">
              Breaking — Field Notes
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            <span className="text-gradient">wp2shell</span>
            <br />
            No Plugin. No Login. No Excuse.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            A pre-authentication remote code execution chain in WordPress core,
            disclosed July 17, 2026. It works against a stock install with zero
            plugins — and public exploit code is already circulating. If you run
            6.9.x or 7.0.x, this is a same-day patch, not a next-sprint ticket.
          </motion.p>

          <motion.p
            variants={fadeIn}
            className="mt-6 text-sm italic text-muted-foreground/50 font-mono"
          >
            Field notes from someone who patches and migrates WordPress for a
            living.
          </motion.p>
        </motion.header>

        {/* ── Hero banner ── */}
        <motion.figure
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="container max-w-4xl pb-14"
        >
          <div className="overflow-hidden rounded-xl border border-border/30 shadow-2xl shadow-black/40 bg-black/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/wordpress-core/wordpress-core.webp"
              alt="Pre-Auth RCE in WordPress Core — the wp2shell vulnerability, illustrated with the WordPress logo, a red warning symbol, and vulnerable PHP code."
              width={900}
              height={480}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mt-3 text-xs text-muted-foreground/60 text-center font-mono">
            wp2shell — a pre-authentication RCE that reaches WordPress core
            itself, no plugins required.
          </figcaption>
        </motion.figure>

        {/* ── TL;DR alert ── */}
        <section className="container max-w-4xl pb-8">
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-xl border border-red-500/30 bg-red-500/[0.05] p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full border border-red-500/30 bg-red-500/[0.08] flex items-center justify-center shrink-0">
                <ShieldAlert className="h-5 w-5 text-red-400/80" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-mono uppercase tracking-widest text-red-400/70">
                  TL;DR
                </p>
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                  If you run WordPress <strong>6.9.x</strong> or{" "}
                  <strong>7.0.x</strong>, stop reading and update to{" "}
                  <strong>6.9.5</strong> or <strong>7.0.2</strong> right now.
                  The first in-the-wild attacks have already been reported.
                </p>
                <div className="pt-3">
                  <a
                    href="#patch"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md bg-red-500/90 text-white hover:bg-red-500 transition-colors"
                  >
                    Jump to the patch steps
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 1: WHAT WP2SHELL ACTUALLY IS
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                01 — The Disclosure
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                What wp2shell Actually Is
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Most WordPress security stories are plugin stories. Some
                abandoned form builder with 40,000 installs ships a broken nonce
                check, a few thousand sites get defaced, and everyone who kept
                their plugin count low sleeps fine.
              </p>
              <p>
                wp2shell is not that.{" "}
                <span className="text-foreground/80">It lives in core.</span>
              </p>
              <p>
                Researchers at Assetnote — the attack-surface arm of Searchlight
                Cyber — reported a pre-authentication RCE in WordPress core that
                requires no preconditions at all. No login. No plugin. No unusual
                configuration. An anonymous HTTP request against a default
                install is enough to get code running on the server. WordPress
                powers an estimated 500 million websites. That is the blast
                radius.
              </p>
            </motion.div>

            {/* The chain */}
            <motion.div variants={fadeUp} className="mb-6">
              <div className="flex items-center gap-3">
                <Link2 className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-xl font-bold tracking-tight">
                  It's a chain, not a single bug
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
                Understanding the chain matters, because it determines who is
                exposed to what. Alone, either bug is bad. Chained, they're
                catastrophic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={tiltLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-orange-500/20 bg-orange-500/[0.05] flex items-center justify-center shrink-0">
                    <Database className="h-4 w-4 text-orange-400/70" />
                  </div>
                  <span className="text-xs font-mono text-orange-400/70">
                    CVE-2026-60137
                  </span>
                </div>
                <h4 className="text-lg font-semibold">
                  SQL injection in WP_Query
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  An injection reachable through the{" "}
                  <code className="text-xs font-mono text-foreground/70">
                    author__not_in
                  </code>{" "}
                  parameter of{" "}
                  <code className="text-xs font-mono text-foreground/70">
                    WP_Query
                  </code>
                  , the class behind essentially every database read WordPress
                  performs. Rated high severity — and it reaches back to
                  WordPress 6.8.
                </p>
              </motion.div>

              <motion.div
                variants={tiltRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-red-500/20 bg-red-500/[0.05] flex items-center justify-center shrink-0">
                    <Bug className="h-4 w-4 text-red-400/70" />
                  </div>
                  <span className="text-xs font-mono text-red-400/70">
                    CVE-2026-63030
                  </span>
                </div>
                <h4 className="text-lg font-semibold">
                  REST API batch-route confusion
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A route-confusion issue in the batch REST endpoint (
                  <code className="text-xs font-mono text-foreground/70">
                    /wp-json/batch/v1
                  </code>
                  ) — the piece that turns a bounded SQL injection into full
                  unauthenticated code execution. Introduced in 6.9, so it does
                  not exist on older branches.
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-2xl mt-8"
            >
              <StickyNote color="yellow" rotate={-1.2}>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-400/70 mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The batch endpoint is core, enabled by default, and reachable
                    without authentication. It also answers on the{" "}
                    <code className="text-xs font-mono text-foreground/70">
                      ?rest_route=/batch/v1
                    </code>{" "}
                    fallback form — so the common "I disabled pretty permalinks"
                    assumption buys you nothing.
                  </p>
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
            SECTION 2: AM I VULNERABLE?
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                02 — Exposure Check
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Am I Vulnerable? Check This First
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-card/40 border border-border/30 rounded-xl p-3 sm:p-6"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="border-b border-border/30">
                      <th className="text-left font-mono text-xs uppercase tracking-widest text-muted-foreground py-3 px-3">
                        WordPress version
                      </th>
                      <th className="text-left font-mono text-xs uppercase tracking-widest text-muted-foreground py-3 px-3">
                        SQLi (60137)
                      </th>
                      <th className="text-left font-mono text-xs uppercase tracking-widest text-muted-foreground py-3 px-3">
                        Full RCE chain
                      </th>
                      <th className="text-left font-mono text-xs uppercase tracking-widest text-foreground/80 py-3 px-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {VULN_ROWS.map((row) => (
                      <tr
                        key={row.ver}
                        className="border-b border-border/15 last:border-b-0"
                      >
                        <td className="py-3 px-3 font-mono text-foreground/80 whitespace-nowrap">
                          {row.ver}
                        </td>
                        <td
                          className={`py-3 px-3 font-medium ${cellColor(
                            row.sqliState
                          )}`}
                        >
                          {row.sqli}
                        </td>
                        <td
                          className={`py-3 px-3 font-semibold ${cellColor(
                            row.rceState
                          )}`}
                        >
                          {row.rce}
                        </td>
                        <td
                          className={`py-3 px-3 ${cellColor(row.actionState)}`}
                        >
                          {row.action}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-sm text-muted-foreground leading-relaxed max-w-2xl mt-8"
            >
              Searchlight Cyber published a free checker at{" "}
              <span className="text-foreground/80 font-mono">wp2shell.com</span>{" "}
              that tells you whether a given install is exposed. Use it on sites
              you own or are authorized to test. Nothing else.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="max-w-2xl mt-6"
            >
              <StickyNote color="blue" rotate={1.2}>
                <div className="flex items-start gap-3">
                  <Radar className="h-5 w-5 text-blue-400/70 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground/80 mb-1">
                      A silent scan isn't a clean scan
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      If you've stripped the WordPress generator version string
                      from your HTML (good hardening, generally), any scanner
                      reading your version off the homepage reports{" "}
                      <em>unknown</em>, not <em>vulnerable</em>. Don't confuse the
                      two — check the actual version in your admin dashboard or
                      via WP-CLI.
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
            SECTION 3: HOW TO PATCH
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="patch" className="container max-w-4xl py-20 lg:py-24 scroll-mt-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                03 — Remediation
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                How to Patch, Properly
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-green-400/70" />
                <h3 className="text-xl font-bold tracking-tight">
                  The 60-second path
                </h3>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  WordPress.org enabled forced automatic updates for affected
                  installs given the severity, so many sites are already patched.
                  Do not assume yours is one of them — auto-updates fail quietly
                  on sites with restricted file permissions,{" "}
                  <code className="text-xs font-mono text-foreground/70">
                    DISALLOW_FILE_MODS
                  </code>{" "}
                  set, version-controlled deployments, or managed hosts that pin
                  core versions. Go and verify.
                </p>
                <p>
                  <span className="text-foreground/80">Dashboard:</span> Log in →
                  Dashboard → Updates. Confirm the version reads 7.0.2 or 6.9.5.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="max-w-2xl mb-6">
              <CodeBlock label="WP-CLI" code={PATCH_CMD} />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-14"
            >
              That last command is the one people skip.{" "}
              <code className="text-xs font-mono text-foreground/70">
                verify-checksums
              </code>{" "}
              compares your core files against the official WordPress.org hashes.
              If something was modified, you'll know.
            </motion.p>

            {/* Can't patch today */}
            <motion.div variants={fadeUp} className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <Wrench className="h-5 w-5 text-yellow-400/70" />
                <h3 className="text-xl font-bold tracking-tight">
                  If you genuinely can't patch today
                </h3>
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Temporary mitigations, in rough order of preference. Treat all
                three as a bridge measured in hours, not a fix.
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
                  icon: ShieldAlert,
                  title: "Block the batch endpoint at your WAF or edge",
                  body: "Both /wp-json/batch/v1 and ?rest_route=/batch/v1. Blocking only the first is a half-measure attackers already know about.",
                },
                {
                  icon: XCircle,
                  title: "Block anonymous REST API access entirely",
                  body: "If your site doesn't need it. Note that the block editor uses the REST API, so test your admin workflow before shipping this.",
                },
                {
                  icon: Cloud,
                  title: "Cloudflare users: WAF rules are already live",
                  body: "Rules covering both CVEs were deployed across all plans, including free ones. Cloudflare said it plainly — this reduces exposure while you update; it is not a replacement for updating.",
                },
              ].map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  variants={i % 2 === 0 ? tiltLeft : tiltRight}
                  className="relative bg-card/60 border border-border/30 rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full border border-yellow-500/20 bg-yellow-500/[0.05] flex items-center justify-center shrink-0 font-mono text-xs text-yellow-400/70">
                      {i + 1}
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
                        <h4 className="text-base font-semibold">{title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Inline CTA */}
            <motion.div
              variants={popIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 rounded-xl border border-border/30 bg-card/40 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            >
              <div className="space-y-1">
                <p className="text-base font-semibold text-foreground/90">
                  Not sure which version you're actually on?
                </p>
                <p className="text-sm text-muted-foreground">
                  A version check and exposure audit costs you nothing.
                </p>
              </div>
              <Link
                href="/#contact"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Get a Free Version Check
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 4: ALREADY HIT?
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                04 — Incident Response
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                You Patched. Were You Already Hit?
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-lg text-foreground/90 leading-relaxed max-w-2xl mb-10"
            >
              Patching closes the door. It does nothing about anyone who walked
              in before you closed it. If your site sat on an affected version
              after July 17, run a compromise check.
            </motion.p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            >
              {[
                {
                  icon: KeyRound,
                  title: "Unknown admin users",
                  body: "Users → All Users, sorted by registration date. Anyone you don't recognize is a problem.",
                },
                {
                  icon: FileWarning,
                  title: "Recently modified files",
                  body: "Especially in wp-content/uploads/, which should never contain PHP.",
                },
                {
                  icon: Bug,
                  title: "Unexpected plugins",
                  body: "Generic names, no readme. Uploading a malicious plugin is a common post-exploitation step.",
                },
                {
                  icon: Clock,
                  title: "Rogue scheduled tasks",
                  body: "Run wp cron event list and look for jobs you didn't create.",
                },
                {
                  icon: ShieldCheck,
                  title: "Modified core files",
                  body: "Run wp core verify-checksums again — and take it seriously if it complains.",
                },
                {
                  icon: RefreshCw,
                  title: "Rotate everything",
                  body: "If you find anything at all: DB credentials, wp-config salts, admin passwords, API keys, and SFTP / hosting-panel logins.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-card/60 border border-border/30 rounded-lg p-5 space-y-2 hover:border-border/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-border/40 bg-white/[0.02] flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <h4 className="text-sm font-semibold">{title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="max-w-2xl mb-8">
              <CodeBlock label="bash — hunt for dropped shells" code={AUDIT_CMD} />
            </motion.div>

            <motion.div variants={fadeUp} className="max-w-2xl">
              <StickyNote color="red" rotate={-1.2}>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-400/70 mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    On shared hosting, one breached site is rarely the end of the
                    blast radius. Neighboring accounts and the surrounding hosting
                    environment are frequently part of the same incident.
                  </p>
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
            SECTION 5: THE BIGGER PATTERN
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                05 — The Part That Isn't About wp2shell
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Shared Attack Surface
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-10"
            >
              <p className="text-lg text-foreground/90">
                Critical unauthenticated RCE in WordPress core is genuinely rare.
                The security team is good, and this one made headlines partly
                because it's unusual. Nobody should read this as "WordPress is
                insecure." That's lazy.
              </p>
              <p>
                The real lesson is about <span className="text-foreground/80">shared attack surface.</span>{" "}
                When a flaw lands in core, every site running that version becomes
                vulnerable at the same instant — regardless of how carefully it
                was built, how few plugins it runs, or how disciplined its owner
                is. Your diligence doesn't isolate you. You inherited the
                vulnerability the moment you inherited the framework, and 500
                million other sites make the exploit worth writing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <motion.div
                variants={tiltLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-red-500/20 rounded-lg p-6 space-y-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-red-500/20 bg-red-500/[0.05] flex items-center justify-center shrink-0">
                    <ShieldAlert className="h-4 w-4 text-red-400/70" />
                  </div>
                  <h4 className="text-base font-semibold">A target that scales</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A shared framework means one exploit pays off across millions of
                  sites. That economics is exactly why mass scanners exist — and
                  why a core bug becomes an internet-wide event within hours.
                </p>
              </motion.div>

              <motion.div
                variants={tiltRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-green-500/20 rounded-lg p-6 space-y-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-green-500/20 bg-green-500/[0.05] flex items-center justify-center shrink-0">
                    <Zap className="h-4 w-4 text-green-400/70" />
                  </div>
                  <h4 className="text-base font-semibold">A surface that's yours</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A custom Next.js site has no{" "}
                  <code className="text-xs font-mono text-foreground/70">
                    /wp-json/batch/v1
                  </code>{" "}
                  and no{" "}
                  <code className="text-xs font-mono text-foreground/70">
                    WP_Query
                  </code>
                  . It has its own surface — and it's not immune to bugs — but it's
                  smaller, yours, and not a target that scales.
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl"
            >
              <p>
                That's the actual tradeoff, and it isn't a binary. WordPress
                remains the right call for content-heavy sites with non-technical
                editors and a real update discipline. It becomes the wrong call
                when nobody owns patching, when the plugin count creeps past
                twenty, and when "it's been working fine" substitutes for
                maintenance.
              </p>
              <p>
                I wrote about the long-run economics of this in{" "}
                <Link
                  href="/blog/wordpress-vs-hardcoded"
                  className="text-foreground/90 underline decoration-border/50 underline-offset-4 hover:decoration-foreground/60 transition-colors"
                >
                  WordPress vs. Hardcoded
                </Link>{" "}
                — wp2shell is the security chapter of that same argument,
                arriving right on schedule.
              </p>
            </motion.div>

            {/* The permanent fix — earned offer */}
            <motion.div
              variants={popIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 rounded-xl border border-green-500/25 bg-green-500/[0.04] p-6 sm:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-green-400/70" />
                    <p className="text-xs font-mono uppercase tracking-widest text-green-400/70">
                      The permanent fix
                    </p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    Patching ends the emergency. A rebuild ends the category.
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                    Updating to 6.9.5 or 7.0.2 closes this one door. Rebuilding
                    onto a hardcoded Next.js stack removes the door entirely — no
                    WordPress core, no plugin soup, no{" "}
                    <code className="text-xs font-mono text-foreground/70">
                      /wp-json/batch/v1
                    </code>{" "}
                    for a mass scanner to find. That's the work I do: migrating
                    WordPress sites onto custom-coded builds that stay fast, score
                    100 on SEO, and don't live on the internet's most-targeted
                    CMS.
                  </p>
                </div>
                <Link
                  href="/#contact"
                  className="shrink-0 self-start md:self-center inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-green-500/90 text-white hover:bg-green-500 transition-colors"
                >
                  Explore a Rebuild
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 6: FAQ
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                06 — Fast Answers
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                wp2shell FAQ
              </h2>
            </motion.div>

            <div className="space-y-3">
              {FAQ.map(({ q, a }) => (
                <motion.details
                  key={q}
                  variants={fadeUp}
                  className="group bg-card/50 border border-border/30 rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 list-none">
                    <h3 className="text-base font-semibold text-foreground/90">
                      {q}
                    </h3>
                    <span className="shrink-0 text-muted-foreground transition-transform group-open:rotate-45 text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 -mt-1 text-sm text-muted-foreground leading-relaxed">
                    {a}
                  </div>
                </motion.details>
              ))}
            </div>
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
              Tired of patching WordPress? Rebuild it once.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Update to 6.9.5 or 7.0.2 today — that's the emergency fix. But if
              you're done with the maintenance treadmill, the endless patch
              cycle, and the plugin roulette, there's a cleaner way out: a
              hardcoded rebuild. I migrate WordPress sites onto custom Next.js
              stacks that score 90+ on performance and 100 on SEO — and never
              ship a wp2shell-shaped attack surface again. Not sure if you were
              exposed or already compromised? Let's start with a free check.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Talk About a Rebuild
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md border border-border/40 text-foreground/80 hover:text-foreground hover:border-border/60 transition-all"
              >
                Get a Free Version Check
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 pt-2 text-xs text-muted-foreground/70">
              <span>Recent work:</span>
              <Link
                href="/blog/hvacr-group"
                className="hover:text-foreground/80 transition-colors underline decoration-border/40 underline-offset-2"
              >
                Four sites for HVACR Group
              </Link>
              <Link
                href="/blog/acro-refrigeration-90-days"
                className="hover:text-foreground/80 transition-colors underline decoration-border/40 underline-offset-2"
              >
                Traffic doubled in 90 days
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ── Sources ── */}
        <section className="container max-w-4xl pb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border border-border/20 bg-card/20 p-6 sm:p-8"
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-5">
              Sources
            </h2>
            <ul className="space-y-2.5">
              {SOURCES.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5 mt-0.5 shrink-0 opacity-60 group-hover:opacity-100" />
                    <span className="underline decoration-border/40 underline-offset-2 group-hover:decoration-foreground/50">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-muted-foreground/50 mt-6 leading-relaxed">
              Last updated: July 22, 2026. This is a developing story — verify
              version numbers against the official WordPress security releases
              before acting.
            </p>
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
