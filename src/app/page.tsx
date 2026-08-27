"use client";

import { useState } from "react";
import SiteHeader from "@/components/site-header";
import ProjectIndex from "@/components/project-index";
import ProjectStage from "@/components/project-stage";
import SiteLinks from "@/components/site-links";
import { projects } from "@/data/projects";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const selectedProject = projects[selectedIndex];

  const goToPrevious = () => {
    if (selectedIndex > 0) {
      setDirection(-1);
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex < projects.length - 1) {
      setDirection(1);
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const selectProject = (index: number) => {
    setDirection(0);
    setSelectedIndex(index);
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1120px] px-6 pb-6">
      <SiteHeader />

      <section className="pt-2 md:pt-8">
        <div className="flex justify-start md:justify-center">
          <ProjectIndex
            projects={projects}
            selectedIndex={selectedIndex}
            onSelect={selectProject}
          />
        </div>

        <ProjectStage
          project={selectedProject}
          onPrevious={goToPrevious}
          onNext={goToNext}
          canGoPrevious={selectedIndex > 0}
          canGoNext={selectedIndex < projects.length - 1}
          direction={direction}
        />

        <div className="mt-16 flex justify-start md:justify-end">
          <SiteLinks />
        </div>
      </section>
    </main>
  );
}