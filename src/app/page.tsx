"use client";

import { useState } from "react";
import SiteHeader from "@/components/site-header";
import WorkToggle from "@/components/work-toggle";
import SelectedWork from "@/components/selected-work";
import OtherWork from "@/components/other-work";
import SiteFooter from "@/components/site-footer";
import { projects } from "@/data/projects";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

type WorkView = "selected" | "other";

export default function Home() {
  const [view, setView] = useState<WorkView>("selected");

  const shouldReduceMotion = useReducedMotion();

  const context = {
    initial: "building digital products for the web",
    transition:
      view === "selected"
        ? "a closer look at the work"
        : "other things I've made",
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1120px] px-6 pb-6">
      <SiteHeader context={context} />

      <section className="pt-2 md:pt-8">
        <div className="flex justify-start md:justify-center">
          <WorkToggle view={view} onChange={setView} />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {view === "selected" ? (
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
              <SelectedWork projects={projects} />
            </motion.div>
          ) : (
            <motion.div
              key="other"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.3,
                ease: "easeOut",
              }}
            >
              <OtherWork />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <SiteFooter />
    </main>
  );
}