"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { projects } from "@/data/data";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

const ProjectsPage = () => {
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

  // Debounced hover to prevent flicker when moving between rows
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className="relative z-10 py-24 px-5 md:px-12 lg:px-8 min-h-screen max-w-[1400px] mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      onMouseMove={handleMouseMove}
    >
      {/* Editorial header */}
      <motion.header
        className="mb-8 lg:mb-16 mt-5"
        variants={containerVariants}
      >
        <motion.p
          className="text-[11px] font-mono uppercase tracking-[0.35em] text-slate-500 mb-5"
          variants={itemVariants}
        >
          Selected Work
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-[4rem] font-clash font-bold text-slate-900 tracking-[-0.03em] leading-[0.95]"
          variants={itemVariants}
        >
          Projects
        </motion.h1>
        <motion.p
          className="text-sm md:text-[15px] text-slate-500 mt-5 leading-relaxed max-w-md font-outfit font-light italic"
          variants={itemVariants}
        >
          Things I&apos;ve built that kept me up at night — in a good way.
        </motion.p>
      </motion.header>

      {/* Project list */}
      <motion.div
        className="border-t border-slate-400/30"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
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
                src={projects[hoveredIndex].projectImage as string}
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

export default ProjectsPage;
