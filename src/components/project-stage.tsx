import type { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

type ProjectStageProps = {
  project: Project;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
};

function getPrimaryAction(project: Project) {
  if (project.caseStudy) {
    return {
      label: "View case study",
      href: project.caseStudy,
      type: "internal" as const,
    };
  }

  if (project.liveUrl) {
    return {
      label: "View live site",
      href: project.liveUrl,
      type: "external" as const,
    };
  }

  if (project.externalUrl) {
    return {
      label: "View project",
      href: project.externalUrl,
      type: "external" as const,
    };
  }

  if (project.githubUrl) {
    return {
      label: "GitHub",
      href: project.githubUrl,
      type: "external" as const,
    };
  }

  return null;
}

export default function ProjectStage({
  project,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}: ProjectStageProps) {
  const primaryAction = getPrimaryAction(project);

  return (
    <section className="mt-8">
      <div className="grid gap-8 md:grid-cols-[1.45fr_1fr] md:gap-10">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e9e8e5]">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="text-sm text-muted">{project.year}</div>

            <h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              {project.title}
            </h1>

            <p className="mt-4 max-w-md text-base leading-7 text-muted">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            {primaryAction && (
              primaryAction.type === "internal" ? (
                <Link
                  href={primaryAction.href}
                  className="mt-7 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent"
                >
                  {primaryAction.label}
                  <ArrowRight size={15} strokeWidth={2} />
                </Link>
              ) : (
                <a
                  href={primaryAction.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent"
                >
                  {primaryAction.label}
                  <ArrowUpRight size={15} strokeWidth={2} />
                </a>
              )
            )}
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
      </div>
    </section>
  );
}