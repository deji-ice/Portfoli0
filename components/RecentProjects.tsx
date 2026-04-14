"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { projects } from "@/data/data";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import Image from "next/image";

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

const RecentProjects = () => {
  const latestProjects = projects.slice(0, 3);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cursor tracking for floating image preview
  const cursorX = useMotionValue(-400);
  const cursorY = useMotionValue(-400);
  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  const handleHoverStart = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredIndex(index);
  };

  const handleHoverEnd = () => {
    timeoutRef.current = setTimeout(() => setHoveredIndex(null), 60);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      onMouseMove={handleMouseMove}
    >
      {/* Section label */}
      <motion.p
        variants={itemVariants}
        className="text-[11px] font-mono uppercase tracking-[0.35em] text-slate-500 mb-5"
      >
        Selected Work
      </motion.p>

      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="font-clash font-bold text-3xl md:text-4xl text-slate-900 tracking-[-0.03em] leading-[1.05] mb-10 md:mb-14"
      >
        Things I&apos;ve built.
      </motion.h2>

      {/* Project list — reusing ProjectCard from projects page */}
      <motion.div
        variants={containerVariants}
        className="border-t border-slate-400/30"
      >
        {latestProjects.map((project, index) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard
              project={project}
              index={index}
              isActive={hoveredIndex === index}
              isAnyHovered={hoveredIndex !== null}
              onHoverStart={() => handleHoverStart(index)}
              onHoverEnd={handleHoverEnd}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* View all link */}
      <motion.div variants={itemVariants} className="mt-8">
        <Link
          href="/projects"
          className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500 hover:text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-800 transition-colors duration-200"
        >
          View all projects
        </Link>
      </motion.div>

      {/* Cursor-following image preview — desktop only */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            key={hoveredIndex}
            className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-[320px] h-[200px] translate-x-6 -translate-y-[75%] overflow-hidden">
              <Image
                src={latestProjects[hoveredIndex].projectImage as string}
                alt=""
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RecentProjects;
