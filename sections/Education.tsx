"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motion";

export default function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-24 min-h-[80vh] flex items-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="w-full"
      >
        <motion.div variants={fadeUp} custom={0}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Education
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          className="mt-6 grid gap-4 text-sm md:grid-cols-2"
        >
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              2022 – Present
            </p>
            <h3 className="mt-2 text-sm font-semibold text-slate-50 sm:text-base">
              University of Kashmir
            </h3>
            <p className="text-xs text-slate-300">
              B.Tech in Computer Science &amp; Engineering
            </p>
            <p className="mt-3 text-xs text-slate-300">
              CGPA:{" "}
              <span className="font-semibold text-primary">
                7.25 (current)
              </span>
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Higher Secondary
            </p>
            <h3 className="mt-2 text-sm font-semibold text-slate-50 sm:text-base">
              Senior Secondary Education
            </h3>
            <p className="mt-3 text-xs text-slate-300">
              Percentage:{" "}
              <span className="font-semibold text-primary">90.40%</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

