"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] flex-col justify-center gap-10"
    >
      <motion.div
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col gap-8"
      >
        <motion.p
          variants={fadeUp}
          custom={0}
          className="inline-flex max-w-max items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-1 text-[11px] uppercase tracking-[0.3em] text-slate-300 backdrop-blur"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          Final-year CSE · AI &amp; Data
        </motion.p>

        <motion.h1
          variants={fadeUp}
          custom={1}
          className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
        >
          Mir Suhaib —{" "}
          <span className="bg-gradient-to-r from-primary via-sky-400 to-accent bg-clip-text text-transparent">
            Engineering Intelligent Systems
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base"
        >
          Machine Learning | Data Science | Full Stack Development. Building
          AI-driven, industry-ready solutions from{" "}
          <span className="font-semibold text-slate-100">
            Shopian, Jammu &amp; Kashmir, India
          </span>{" "}
          with a strong foundation in Python, data analysis, and database
          systems.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-glow transition-transform hover:-translate-y-0.5 hover:shadow-glow-soft"
          >
            View Projects
            <span className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200 backdrop-blur transition hover:border-primary/80 hover:text-primary"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={4}
          className="grid w-full max-w-xl grid-cols-3 gap-3 text-[11px] text-slate-300"
        >
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-3 backdrop-blur">
            <p className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
              Role
            </p>
            <p className="mt-1 font-semibold text-slate-100">
              Final-year CSE Student
            </p>
            <p className="mt-1 text-[10px] text-slate-400">
              University of Kashmir
            </p>
          </div>
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-3 backdrop-blur">
            <p className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
              Focus
            </p>
            <p className="mt-1 font-semibold text-slate-100">
              ML · Data Science
            </p>
            <p className="mt-1 text-[10px] text-slate-400">
              Intelligent, data-driven systems
            </p>
          </div>
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-3 backdrop-blur">
            <p className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
              CGPA
            </p>
            <p className="mt-1 text-2xl font-semibold text-primary">7.25</p>
            <p className="mt-1 text-[10px] text-slate-400">
              B.Tech · Computer Science &amp; Engineering
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={5}
          className="mt-2 w-full max-w-xl rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 text-[11px] text-slate-300 backdrop-blur-xl"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
                  Telemetry
                </p>
                <motion.span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                  animate={{ opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-[9px] uppercase tracking-[0.25em] text-emerald-300/90">
                  Online
                </span>
              </div>
              <p className="mt-1 text-xs font-semibold text-slate-100">
                Dashboard snapshot ·{" "}
                <span className="text-slate-400">Shopian, J&amp;K</span>
              </p>
              <p className="mt-1 text-[10px] text-slate-500">
                Mode: AI &amp; Data · UI: Next.js + Tailwind · Motion: Framer
              </p>
            </div>

            <div className="flex shrink-0 gap-3">
              <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2 text-right">
                <p className="text-[9px] uppercase tracking-[0.22em] text-slate-500">
                  Projects
                </p>
                <p className="mt-1 text-base font-semibold text-primary">4</p>
                <p className="mt-0.5 text-[9px] text-slate-500">Tracked</p>
              </div>
              <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2 text-right">
                <p className="text-[9px] uppercase tracking-[0.22em] text-slate-500">
                  Focus
                </p>
                <p className="mt-1 text-base font-semibold text-sky-400">ML</p>
                <p className="mt-0.5 text-[9px] text-slate-500">DS · Full Stack</p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-slate-800/80 bg-black/30 px-3 py-2">
              <p className="text-[9px] uppercase tracking-[0.22em] text-slate-500">
                CGPA
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-100">7.25</p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-black/30 px-3 py-2">
              <p className="text-[9px] uppercase tracking-[0.22em] text-slate-500">
                Build
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-100">
                Next 14
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-black/30 px-3 py-2">
              <p className="text-[9px] uppercase tracking-[0.22em] text-slate-500">
                UI
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-100">
                Dark · Neon
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-black/30 px-3 py-2">
              <p className="text-[9px] uppercase tracking-[0.22em] text-slate-500">
                Status
              </p>
              <p className="mt-1 text-sm font-semibold text-emerald-300">
                Ready
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800/80 bg-black/20 px-3 py-3">
              <div className="flex items-center justify-between text-[10px] text-slate-500">
                <span className="uppercase tracking-[0.22em]">Readiness</span>
                <span className="text-slate-300">95%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-primary via-sky-400 to-accent shadow-glow-soft" />
              </div>
              <p className="mt-2 text-[10px] text-slate-500">
                Systems calibrated · Portfolio v1.0
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/80 bg-black/20 px-3 py-3">
              <div className="flex items-center justify-between text-[10px] text-slate-500">
                <span className="uppercase tracking-[0.22em]">Signal</span>
                <span className="text-slate-300">Stable</span>
              </div>
              <div className="mt-2 flex items-end gap-1">
                {[6, 10, 7, 12, 9, 14, 11, 15, 12, 16].map((h, i) => (
                  <motion.span
                    key={i}
                    className="block w-2 rounded-sm bg-primary/70"
                    style={{ height: h }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      delay: i * 0.08,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              <p className="mt-2 text-[10px] text-slate-500">
                Smooth UX · Minimal latency
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 mt-8 flex items-center gap-3 text-[11px] text-slate-400"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="h-[1px] w-16 bg-gradient-to-r from-primary/70 to-transparent" />
        <span>Scroll to explore the system</span>
        <a
          href="#about"
          className="group relative ml-4 flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/60 backdrop-blur"
        >
          <motion.span
            className="absolute inset-x-0 top-[6px] mx-auto h-1 w-1 rounded-full bg-primary/80 shadow-glow-soft"
            animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
          />
        </a>
      </motion.div>
    </section>
  );
}

