"use client";
import React from "react";
import Link from "next/link";
import { Project } from "@/types/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  isActive: boolean;
  isAnyHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const ProjectCard = ({
  project,
  index,
  isActive,
  isAnyHovered,
  onHoverStart,
  onHoverEnd,
}: ProjectCardProps) => {
  return (
    <div
      className={`border-b border-slate-400/30 cursor-pointer transition-opacity duration-500 ease-out ${
        isAnyHovered && !isActive ? "opacity-20" : "opacity-100"
      }`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <div className="flex items-start gap-4 md:gap-8 py-7 md:py-10">
        {/* Index number */}
        <span className="text-[11px] md:text-xs font-mono tracking-wider text-slate-400 pt-2 md:pt-3.5 shrink-0 tabular-nums select-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Title row */}
          <div className="flex items-start justify-between gap-4">
            <Link
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-[1.35rem] md:text-3xl lg:text-[2.5rem] font-clash font-semibold text-slate-800 tracking-[-0.02em] leading-[1.05] hover:text-slate-500 transition-colors duration-300">
                {project.projectName}
              </h3>
            </Link>

            <svg
              className={`w-4 h-4 md:w-5 md:h-5 shrink-0 mt-1.5 md:mt-3 transition-colors duration-300 ${
                isActive ? "text-slate-700" : "text-slate-400"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>

          {/* Description */}
          <p className="text-[13px] font-outfit font-light text-slate-500 mt-2 leading-relaxed max-w-xl line-clamp-1 md:line-clamp-2">
            {project.projectDescription}
          </p>

          {/* Tech stack — dot separated */}
          <p className="text-[10px] md:text-[11px] text-slate-500/70 mt-3 tracking-[0.08em] uppercase font-mono">
            {project.tools.join(" · ")}
          </p>

          {/* Links — always visible */}
          <div className="flex items-center gap-4 mt-4">
            <Link
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Live
            </Link>
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700 transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Repo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
