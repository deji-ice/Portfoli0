"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { experiences } from "@/data/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
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

const WorkExperience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const formatPart = (date: string) => {
    if (date === "Present") return "Present";
    if (date.includes("/")) {
      const [month, year] = date.split("/");
      return `${months[parseInt(month, 10) - 1]} ${year}`;
    }
    return date;
  };

  const formatDate = (start: string, end: string) =>
    `${formatPart(start)} — ${formatPart(end)}`;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Section label */}
      <motion.p
        variants={itemVariants}
        className="text-[11px] font-mono uppercase tracking-[0.35em] text-slate-600 mb-5"
      >
        Experience
      </motion.p>

      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="font-clash font-bold text-3xl md:text-4xl text-slate-900 tracking-[-0.03em] leading-[1.05] mb-10 md:mb-14"
      >
        Where I&apos;ve been building.
      </motion.h2>

      {/* Experience list */}
      <motion.div
        variants={containerVariants}
        className="border-t border-slate-400/30"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.companyName}-${exp.dateStart}`}
            variants={itemVariants}
            className={`border-b border-slate-400/30 transition-opacity duration-500 ease-out ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "opacity-40"
                : "opacity-100"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-start gap-4 md:gap-8 py-6 md:py-8">
              {/* Index */}
              <span className="text-[11px] md:text-xs font-mono tracking-wider text-slate-400 pt-1 md:pt-1.5 shrink-0 tabular-nums select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-2xl lg:text-[1.75rem] font-clash font-semibold text-slate-800 tracking-[-0.02em] leading-[1.1]">
                      {exp.occupation}
                    </h3>
                    {exp.companyUrl ? (
                      <Link
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[13px] font-outfit font-light text-slate-600 mt-1 hover:text-slate-900 underline-offset-4 hover:underline decoration-slate-400 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {exp.companyName}
                      </Link>
                    ) : (
                      <p className="text-[13px] font-outfit font-light text-slate-600 mt-1">
                        {exp.companyName}
                      </p>
                    )}
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-slate-400 tabular-nums shrink-0">
                    {formatDate(exp.dateStart, exp.dateEnd)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

WorkExperience.displayName = "WorkExperience";

export default WorkExperience;
