import Link from "next/link";

const projectNumbers = ["01", "02", "03"];

export default function ProjectIndex() {
  return (
    <nav aria-label="Selected projects" className="flex items-center gap-4">
      {projectNumbers.map((number, index) => (
        <button
          key={number}
          type="button"
          className="flex items-center gap-1.5 text-sm transition-colors"
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              index === 0 ? "bg-accent" : "bg-transparent"
            }`}
            aria-hidden="true"
          />
          <span
            className={
              index === 0
                ? "text-foreground"
                : "text-muted hover:text-foreground"
            }
          >
            {number}
          </span>
        </button>
      ))}

      <span className="text-subtle">·</span>

      <Link
        href="/work"
        className="text-sm text-muted transition-colors hover:text-foreground"
      >
        All
      </Link>
    </nav>
  );
}