"use client";
import RecentProjects from "./RecentProjects";
import WorkExperience from "./WorkExperience";

const WorkSection = () => {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 pt-24 md:pt-32 space-y-24 md:space-y-32">
      <WorkExperience />
      <RecentProjects />
    </div>
  );
};

export default WorkSection;
