import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectIndexProps = {
  projects: Project[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

export default function ProjectIndex({
  projects,
  selectedIndex,
  onSelect,
}: ProjectIndexProps) {
  return (
    <nav aria-label="Selected projects" className="flex items-center gap-4">
      {projects.map((project, index) => {
        const number = String(index + 1).padStart(2, "0");
        const isActive = index === selectedIndex;

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

      <Link
        href="/work"
        className="cursor-pointer text-sm text-muted transition-colors hover:text-accent-deep active:text-accent"
      >
        All
      </Link>
    </nav>
  );
}