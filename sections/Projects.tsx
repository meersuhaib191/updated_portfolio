"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motion";

const projects = [
  {
    name: "SmartHire (In Progress)",
    description:
      "AI-driven recruitment assistant using Python, React, and Scikit-learn for automated candidate screening and intelligent shortlisting.",
    tech: ["Python", "React", "Scikit-learn", "Pandas"],
    status: "In Progress",
    github: "https://github.com/meersuhaib191"
  },
  {
    name: "Customer Subscription Data Analysis",
    description:
      "End-to-end subscription data analysis including data cleaning, EDA, visualization, and a Power BI dashboard for business insights.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Power BI"],
    status: "Completed",
    github: "https://github.com/meersuhaib191"
  },
  {
    name: "Hostel Ease",
    description:
      "Web-based Hostel Management System for managing students, rooms, and communication using PHP, SQL, Bootstrap, and PHPMailer.",
    tech: ["PHP", "MySQL", "Bootstrap", "PHPMailer"],
    status: "Completed",
    github: "https://github.com/meersuhaib191"
  },
  {
    name: "Library Management System",
    description:
      "Full-featured library management system built with PHP, MySQL, JavaScript, HTML, CSS, and Bootstrap.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    status: "Completed",
    github: "https://github.com/meersuhaib191"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} custom={0}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Projects
          </h2>
          <p className="mt-4 text-xl font-medium text-slate-50 sm:text-2xl">
            Real-world systems with AI, data, and full-stack engineering.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          className="mt-6 grid gap-5 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/70 hover:shadow-glow-soft"
              whileHover={{ scale: 1.01 }}
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                    {project.name}
                  </h3>
                  <span
                    className={`rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.2em] ${
                      project.status === "In Progress"
                        ? "border border-amber-400/60 bg-amber-500/10 text-amber-300"
                        : "border border-emerald-400/60 bg-emerald-500/10 text-emerald-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-[13px]">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2 text-[11px] text-slate-200">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 shadow-[0_0_16px_rgba(15,23,42,1)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 transition hover:border-primary/70 hover:text-primary"
                >
                  <span>View on GitHub</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>

              <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500">
                <span>Project #{String(index + 1).padStart(2, "0")}</span>
                <span>AI · Data · Full Stack</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

