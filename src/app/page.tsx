"use client";

import { useState } from "react";
import SiteHeader from "@/components/site-header";
import ProjectIndex from "@/components/project-index";
import ProjectStage from "@/components/project-stage";
import { projects } from "@/data/projects";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedProject = projects[selectedIndex];

  const goToPrevious = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex < projects.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1120px] px-6">
      <SiteHeader />

      <section className="pt-8">
        <div className="flex justify-center">
          <ProjectIndex
            projects={projects}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
          />
        </div>

        <ProjectStage
          project={selectedProject}
          onPrevious={goToPrevious}
          onNext={goToNext}
          canGoPrevious={selectedIndex > 0}
          canGoNext={selectedIndex < projects.length - 1}
        />
      </section>
    </main>
  );
}