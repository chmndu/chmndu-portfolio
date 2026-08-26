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
            className="flex cursor-pointer items-center gap-1.5 text-sm transition-colors active:text-accent"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isActive ? "bg-accent" : "bg-transparent"
              }`}
              aria-hidden="true"
            />

            <span
              className={
                isActive
                  ? "text-foreground"
                  : "text-muted hover:text-accent-deep"
              }
            >
              {number}
            </span>
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