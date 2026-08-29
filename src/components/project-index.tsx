import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectIndexProps = {
  projects: Project[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  onShowAll: () => void;
  showAll: boolean;
};

export default function ProjectIndex({
  projects,
  selectedIndex,
  onSelect,
  onShowAll,
  showAll,
}: ProjectIndexProps) {
  return (
    <nav aria-label="Project views" className="flex items-center gap-4">
      {projects.map((project, index) => {
        const number = String(index + 1).padStart(2, "0");
        const isActive = !showAll && index === selectedIndex;

        return (
          <button
            key={project.slug}
            type="button"
            onClick={() => onSelect(index)}
            aria-current={isActive ? "true" : undefined}
            className="group relative cursor-pointer px-2 py-2 text-sm md:px-1 md:py-1 transition-colors active:text-accent"
          >
            <span
              className={
                isActive
                  ? "text-foreground"
                  : "text-muted group-hover:text-accent-deep"
              }
            >
              {number}
            </span>

            <span
              aria-hidden="true"
              className={`absolute inset-x-1 -bottom-0.5 h-px bg-accent transition-opacity ${isActive ? "opacity-100" : "opacity-0"
                }`}
            />
          </button>
        );
      })}

      <span className="text-subtle" aria-hidden="true">
        ·
      </span>

      <button
        type="button"
        onClick={onShowAll}
        aria-current={showAll ? "true" : undefined}
        className="group relative cursor-pointer px-2 py-2 text-sm md:px-1 md:py-1 transition-colors active:text-accent"
      >
        <span
          className={
            showAll
              ? "text-foreground"
              : "text-muted group-hover:text-accent-deep"
          }
        >
          All
        </span>

        <span
          aria-hidden="true"
          className={`absolute inset-x-1 -bottom-0.5 h-px bg-accent transition-opacity ${showAll ? "opacity-100" : "opacity-0"
            }`}
        />
      </button>
    </nav>
  );
}