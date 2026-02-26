"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]"
      >
        <motion.div variants={fadeUp} custom={0}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            About
          </h2>
          <p className="mt-4 text-xl font-medium text-slate-50 sm:text-2xl">
            Final-year CSE student building intelligent, data-driven products.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            I am a{" "}
            <span className="font-semibold text-slate-100">
              final-year Computer Science &amp; Engineering student
            </span>{" "}
            at the{" "}
            <span className="font-semibold text-slate-100">
              University of Kashmir
            </span>{" "}
            with a CGPA of{" "}
            <span className="font-semibold text-primary">7.25</span>. I focus
            on <span className="font-semibold">Machine Learning</span>,{" "}
            <span className="font-semibold">Data Science</span>, and{" "}
            <span className="font-semibold">Full Stack Development</span>,
            combining strong fundamentals in Python, data analysis, and database
            systems to build solutions that feel both{" "}
            <span className="italic text-slate-100">engineered</span> and{" "}
            <span className="italic text-slate-100">intelligent</span>.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            My work spans from AI-driven recruitment assistants to data
            analytics dashboards and full-stack management systems. I care about
            clean architecture, readable code, and interfaces that feel like a{" "}
            <span className="font-semibold text-slate-100">
              high-performance Formula 1 cockpit
            </span>{" "}
            — fast, focused, and minimal.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          className="grid gap-4 text-xs text-slate-200 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 backdrop-blur-xl shadow-[0_0_40px_rgba(15,23,42,0.9)]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Location
            </p>
            <p className="mt-2 font-semibold">
              Shopian, Jammu &amp; Kashmir, India
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              University
            </p>
            <p className="mt-2 font-semibold">University of Kashmir</p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Focus Areas
            </p>
            <p className="mt-2 font-semibold">
              Machine Learning, Data Science, Full Stack
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Strengths
            </p>
            <p className="mt-2 font-semibold">
              Python, Data Analysis, Database Systems
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

