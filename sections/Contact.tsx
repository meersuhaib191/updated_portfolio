"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motion";

const WEB3_FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3_FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 2C6.477 2 2 6.563 2 12.193c0 4.506 2.865 8.325 6.838 9.674.5.096.683-.223.683-.496 0-.246-.009-.897-.014-1.761-2.782.62-3.369-1.373-3.369-1.373-.454-1.175-1.11-1.487-1.11-1.487-.908-.634.068-.621.068-.621 1.004.072 1.532 1.054 1.532 1.054.892 1.557 2.341 1.107 2.91.846.091-.662.349-1.107.635-1.361-2.22-.259-4.555-1.134-4.555-5.046 0-1.115.389-2.026 1.027-2.741-.103-.259-.446-1.304.098-2.718 0 0 .837-.273 2.743 1.047A9.29 9.29 0 0 1 12 6.872c.85.004 1.705.117 2.504.344 1.904-1.32 2.739-1.047 2.739-1.047.546 1.414.203 2.459.1 2.718.64.715 1.025 1.626 1.025 2.741 0 3.922-2.338 4.784-4.566 5.037.359.316.679.94.679 1.894 0 1.367-.012 2.47-.012 2.806 0 .276.18.598.688.495C19.138 20.514 22 16.7 22 12.193 22 6.563 17.523 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6.94 6.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM5 21V8h3.88v13H5ZM11 8h3.72v1.78h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.69 2.68 4.69 6.16V21H19.3v-5.63c0-1.34-.03-3.07-1.82-3.07-1.82 0-2.1 1.46-2.1 2.97V21H11V8Z"
        fill="currentColor"
      />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/meersuhaib191",
    tag: "@meersuhaib191"
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/meersuhaib191",
    tag: "/in/meersuhaib191"
  }
];

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

export default function Contact() {
  return (
    <section
      id="contact"
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
            Contact
          </h2>
          <p className="mt-4 text-xl font-medium text-slate-50 sm:text-2xl">
            Let&apos;s build something intelligent together.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          className="mt-6 grid gap-6"
        >
          <div className="space-y-4 text-sm text-slate-300">
            <p>
              Open to internships, research collaborations, and roles in Machine
              Learning, Data Science, and full-stack engineering.
            </p>

            <motion.form
              action={WEB3_FORMS_ENDPOINT}
              method="POST"
              className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 text-xs backdrop-blur-xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <input type="hidden" name="access_key" value={WEB3_FORMS_KEY ?? ""} />
              <input
                type="hidden"
                name="subject"
                value="New message from Mir Suhaib portfolio"
              />
              <input
                type="hidden"
                name="from_name"
                value="Portfolio Contact Form"
              />
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Send a message
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="space-y-1">
                  <span className="text-[11px] text-slate-300">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-slate-800/80 bg-black/40 px-3 py-2 text-[11px] text-slate-100 outline-none ring-0 transition focus:border-primary/70 focus:ring-1 focus:ring-primary/60"
                    placeholder="Your name"
                  />
                </label>
                <label className="space-y-1">
                  <span className="text-[11px] text-slate-300">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-slate-800/80 bg-black/40 px-3 py-2 text-[11px] text-slate-100 outline-none ring-0 transition focus:border-primary/70 focus:ring-1 focus:ring-primary/60"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="space-y-1">
                <span className="text-[11px] text-slate-300">Message</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-slate-800/80 bg-black/40 px-3 py-2 text-[11px] text-slate-100 outline-none ring-0 transition focus:border-primary/70 focus:ring-1 focus:ring-primary/60"
                  placeholder="Share a bit about the opportunity, project, or idea."
                />
              </label>
              <div className="flex items-center justify-between gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:shadow-glow-soft"
                >
                  Send
                  <span>↗</span>
                </button>
                <p className="text-[10px] text-slate-500">
                  Powered by Web3Forms
                </p>
              </div>
            </motion.form>

            <div className="grid gap-3 text-xs sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:meersuhaib119@gmail.com"
                  className="mt-2 block font-semibold text-slate-100 hover:text-primary"
                >
                  meersuhaib119@gmail.com
                </a>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Phone
                </p>
                <a
                  href="tel:+916006975431"
                  className="mt-2 block font-semibold text-slate-100 hover:text-primary"
                >
                  +91 6006975431
                </a>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Social
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-2 text-[11px] font-medium text-slate-100 backdrop-blur-xl transition hover:border-primary/70 hover:shadow-glow-soft"
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-black/30 text-primary shadow-glow-soft transition group-hover:border-primary/70">
                      {link.label === "GitHub" ? (
                        <GitHubIcon />
                      ) : (
                        <LinkedInIcon />
                      )}
                    </span>
                    <span>{link.label}</span>
                    <span className="text-slate-400">{link.tag}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}

