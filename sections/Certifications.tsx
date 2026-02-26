"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motion";

const certifications = [
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage"
  },
  {
    title: "Getting Started with Microsoft Excel",
    issuer: "Coursera"
  },
  {
    title: "Data Science Foundations",
    issuer: "Great Learning"
  }
];

export default function Certifications() {
  return (
    <section
      id="certifications"
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
            Certifications
          </h2>
          <p className="mt-4 text-xl font-medium text-slate-50 sm:text-2xl">
            Validated skills from industry-aligned programs.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          className="mt-6 grid gap-4 text-sm md:grid-cols-3"
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 backdrop-blur-xl"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Certification {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50 sm:text-base">
                {cert.title}
              </h3>
              <p className="mt-2 text-xs text-slate-400">{cert.issuer}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

