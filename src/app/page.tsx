"use client";

import { useState } from "react";
import SiteHeader from "@/components/site-header";
import ProjectIndex from "@/components/project-index";
import ProjectStage from "@/components/project-stage";
import AllWork from "@/components/all-work";
import SiteLinks from "@/components/site-links";
import { projects } from "@/data/projects";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const shouldReduceMotion = useReducedMotion();

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
    setShowAll(false);
    setDirection(0);
    setSelectedIndex(index);
  };

  const showAllProjects = () => {
    setShowAll(true);
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
            onShowAll={showAllProjects}
            showAll={showAll}
          />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {showAll ? (
            <motion.div
              key="all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.3,
                ease: "easeOut",
              }}
            >
              <AllWork projects={projects} />
            </motion.div>
          ) : (
            <motion.div
              key="selected"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.3,
                ease: "easeOut",
              }}
            >
              <ProjectStage
                project={selectedProject}
                onPrevious={goToPrevious}
                onNext={goToNext}
                canGoPrevious={selectedIndex > 0}
                canGoNext={selectedIndex < projects.length - 1}
                direction={direction}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <SiteLinks />
      </section>
    </main>
  );
}