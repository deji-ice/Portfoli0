"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const socials = [
  { label: "GitHub", href: "https://github.com/deji-ice" },
  { label: "Twitter", href: "https://twitter.com/DEJIxICE" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ayodeji-atanda/" },
  { label: "Instagram", href: "https://www.instagram.com/deji_ice/" },
];

const ContactMe = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 lg:px-20 pt-24 md:pt-32 pb-8"
    >
      {/* Top divider */}
      <div className="border-t border-slate-400/30 pt-16 md:pt-20" />

      {/* Section label */}
      <motion.p
        variants={itemVariants}
        className="text-[11px] font-mono uppercase tracking-[0.35em] text-slate-600 mb-5"
      >
        Let&apos;s work together
      </motion.p>

      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="font-clash font-bold text-3xl md:text-5xl lg:text-6xl text-slate-900 tracking-[-0.03em] leading-[1] mb-6 md:mb-8"
      >
        Got a project
        <br /> in mind?
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        variants={itemVariants}
        className="font-outfit font-light text-slate-600 text-[15px] md:text-base leading-relaxed max-w-lg mb-8"
      >
        Currently open for freelance and full-time opportunities.
        Let&apos;s build something.
      </motion.p>

      {/* Email link — glows on enter to draw the eye */}
      <motion.div
        variants={itemVariants}
        className="mb-20 md:mb-24"
        whileInView={{
          textShadow: [
            "0 0 0px rgba(30,41,59,0)",
            "0 0 12px rgba(30,41,59,0.3)",
            "0 0 0px rgba(30,41,59,0)",
            "0 0 12px rgba(30,41,59,0.3)",
            "0 0 0px rgba(30,41,59,0)",
            "0 0 10px rgba(30,41,59,0.2)",
            "0 0 0px rgba(30,41,59,0)",
          ],
        }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <a
          href="mailto:ayodejiatanda1@gmail.com"
          className="text-sm md:text-base font-medium text-slate-800 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-800 transition-colors duration-200"
        >
          ayodejiatanda1@gmail.com
        </a>
      </motion.div>

      {/* Footer row */}
      <motion.div
        variants={itemVariants}
        className="border-t border-slate-400/30 pt-6 pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <p className="text-[11px] font-mono tracking-wider text-slate-500">
          &copy; {new Date().getFullYear()} Ayodeji Atanda
        </p>

        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono tracking-wider text-slate-500 hover:text-slate-800 transition-colors duration-200"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default ContactMe;
