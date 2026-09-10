"use client";

import type { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

type ProjectStageProps = {
  project: Project;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  direction: number;
};

export default function ProjectStage({
  project,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  direction,
}: ProjectStageProps) {

  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="mt-8 md:mt-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.slug}
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : direction === 0 ? 0 : direction * 8,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : direction === 0 ? 0 : direction * -8,
          }}
          transition={{
            duration: shouldReduceMotion ? 0.15 : 0.3,
            ease: "easeOut",
          }}
          className="grid gap-8 md:grid-cols-[1.45fr_1fr] md:gap-10"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              loading="eager"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="text-xs text-muted">{project.year}</div>

              <h1 className="mt-3 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                {project.title}
              </h1>

              <p className="mt-3 max-w-md text-base leading-7 text-muted">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-y-1.5 text-xs text-subtle">
                {project.technologies.map((technology, index) => (
                  <span key={technology} className="whitespace-nowrap">
                    {index > 0 && <span className="mx-2">·</span>}
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent"
                >
                  Details
                  <ArrowRight size={15} strokeWidth={2} />
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent"
                  >
                    Live site
                    <ArrowUpRight size={15} strokeWidth={2} />
                  </a>
                )}

                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent"
                  >
                    View project
                    <ArrowUpRight size={15} strokeWidth={2} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent"
                  >
                    GitHub
                    <ArrowUpRight size={15} strokeWidth={2} />
                  </a>
                )}
              </div>
            </div>

            <div className="mt-12 flex items-center gap-5 text-sm text-muted md:mt-8">
              <button
                type="button"
                onClick={onPrevious}
                disabled={!canGoPrevious}
                className="inline-flex cursor-pointer items-center gap-2 text-muted transition-colors hover:text-accent-deep active:text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:text-muted"
              >
                <ArrowLeft size={15} strokeWidth={1.5} />
                Previous
              </button>

              <button
                type="button"
                onClick={onNext}
                disabled={!canGoNext}
                className="inline-flex cursor-pointer items-center gap-2 text-muted transition-colors hover:text-accent-deep active:text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:text-muted"
              >
                Next
                <ArrowRight size={15} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}