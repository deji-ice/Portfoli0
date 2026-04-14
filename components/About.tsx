"use client";
import { motion } from "framer-motion";
import { memo } from "react";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "Framer Motion",
  "Solidity",
  "Ethers.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Claude Code",
];

const stats = [
  { value: "04+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "04+", label: "Companies" },
];

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

const About = memo(() => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative z-10 px-5 md:px-12 lg:px-20 pt-24 md:pt-32 max-w-7xl mx-auto w-full"
    >
      {/* Section label */}
      <motion.p
        variants={itemVariants}
        className="text-[11px] font-mono uppercase tracking-[0.35em] text-slate-600 mb-5"
      >
        About
      </motion.p>

      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="font-clash font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-[-0.03em] leading-[1.05] mb-8"
      >
        Design-minded engineer
        <br className="hidden md:block" /> with a bias for shipping.
      </motion.h2>

      {/* Single tight paragraph */}
      <motion.p
        variants={itemVariants}
        className="font-outfit font-light text-slate-600 text-[15px] md:text-base leading-relaxed max-w-2xl mb-12 md:mb-16"
      >
        4+ years turning designs into production interfaces at companies like
        Clona, Gen Financial, Afren.ai, and Sabiroad. Frontend-heavy, but I also
        ship mobile apps with React Native/Expo, write smart contracts, and build
        backend services when the project calls for it. I use Claude Code to move
        fast.
      </motion.p>

      {/* Stats strip */}
      <motion.div
        variants={containerVariants}
        className="flex gap-12 md:gap-20 mb-12 md:mb-16"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={itemVariants}>
            <span className="block font-clash font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">
              {stat.value}
            </span>
            <span className="block text-[10px] md:text-[11px] font-mono uppercase tracking-[0.12em] text-slate-500 mt-1">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={itemVariants}
        className="border-t border-slate-400/30 pt-6 md:pt-8"
      >
        {/* Tech line */}
        <p className="text-[10px] md:text-[11px] font-mono text-slate-600/70 tracking-[0.08em] uppercase">
          {technologies.join(" · ")}
        </p>
      </motion.div>
    </motion.div>
  );
});

About.displayName = "About";

export default About;
