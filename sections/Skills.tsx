"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motion";

const skillCategories = [
  {
    title: "Programming & Tools",
    items: ["Python", "React", "MySQL", "HTML", "CSS", "JavaScript", "PHP"]
  },
  {
    title: "Scientific & Dev Tools",
    items: [
      "Jupyter Notebook",
      "Google Colab",
      "Git",
      "GitHub",
      "Excel",
      "Power BI"
    ]
  },
  {
    title: "Libraries & Frameworks",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "SciPy"
    ]
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} custom={0}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Skills
          </h2>
          <p className="mt-4 text-xl font-medium text-slate-50 sm:text-2xl">
            A modern stack for data-centric, intelligent products.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          className="mt-6 grid gap-4 text-sm md:grid-cols-2"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 backdrop-blur-xl transition hover:border-primary/70 hover:shadow-glow-soft"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  {category.title}
                </p>
                <span className="text-[10px] text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200 shadow-[0_0_18px_rgba(15,23,42,1)] transition group-hover:border-primary/70 group-hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

