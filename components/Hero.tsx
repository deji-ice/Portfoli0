"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";

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

const Hero = memo(() => {
  const [text] = useTypewriter({
  words: [
    "Leading frontend at Clona.",
    "Crafting Web3 experiences.",
    "Building fintech products.",
    "Optimizing for performance.",
  ],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative flex flex-col min-h-[calc(100vh-6rem)] justify-center max-w-[1400px] mx-auto pt-24 md:pt-28"
    >
      <div className="relative z-10 px-5 md:px-12 lg:px-20">
        {/* Role label */}
        <motion.p
          variants={itemVariants}
          className="text-[11px] font-mono uppercase tracking-[0.35em] text-slate-600 mb-6"
        >
          Frontend Engineer
        </motion.p>

        {/* Name — massive Clash Display, scales up on xl to fill width */}
        <motion.h1
          variants={itemVariants}
          className="font-clash font-bold text-5xl md:text-7xl lg:text-[6rem] xl:text-[8rem] text-slate-900 tracking-[-0.04em] leading-[0.92]"
        >
          Ayodeji
          <br />
          Atanda.
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-clash font-bold text-2xl md:text-3xl lg:text-4xl text-slate-800 tracking-[-0.02em] leading-[1.1] mt-6 2xl:mt-8"
        >
          I build interfaces
          <br className="hidden md:block" /> people remember.
        </motion.p>

        {/* Typewriter
        <motion.div
          variants={itemVariants}
          className="mt-4 h-[32px] md:h-[36px]"
        >
          <span className="font-outfit font-light italic text-base md:text-lg text-slate-600">
            {text}
            <Cursor cursorColor="#64748b" />
          </span>
        </motion.div> */}

        {/* Availability — stacked on mobile, inline on md+ */}
        <motion.div
          variants={itemVariants}
          className="mt-4 2xl:mt-6"
        >
          {/* Desktop: single line */}
          <div className="hidden md:flex flex-row items-center gap-2.5">
            <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-slate-500 leading-none">
              Engineer at Clona &amp; Gen Financial — Open to opportunities
            </p>
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
          </div>
          {/* Mobile: short and clean */}
          <div className="flex md:hidden items-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <p className="text-[11px] font-mono tracking-[0.15em] uppercase text-slate-500 leading-none">
              Open to opportunities
            </p>
          </div>
        </motion.div>

        {/* CTA links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6 md:gap-8 mt-6 2xl:mt-8"
        >
          <Link
            href="/projects"
            className="text-sm font-medium text-slate-800 underline underline-offset-4 decoration-slate-400 hover:decoration-slate-800 transition-colors duration-200"
          >
            View my work
          </Link>
          <a
            href="mailto:ayodejiatanda1@gmail.com"
            className="text-sm font-medium text-slate-600 underline underline-offset-4 decoration-slate-400 hover:decoration-slate-700 hover:text-slate-800 transition-colors duration-200"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
});

Hero.displayName = "Hero";

export default Hero;
