import { ArrowUpRight } from "lucide-react";

export default function SiteLinks() {
  return (
    <nav
      aria-label="External links"
      className="mt-16 flex w-full items-center justify-start gap-5 border-t border-border pt-5 md:justify-end md:pr-5"
    >
      <a
        href="https://github.com/chmndu"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 text-subtle transition-colors hover:text-accent-deep active:text-accent"
      >
        GitHub
        <ArrowUpRight
          aria-hidden="true"
          size={15}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/chamindudahanayaka/"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 text-subtle transition-colors hover:text-accent-deep active:text-accent"
      >
        LinkedIn
        <ArrowUpRight
          aria-hidden="true"
          size={15}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>

      <a
        href="mailto:chamindud.dahanayaka@gmail.com"
        className="text-subtle transition-colors hover:text-accent-deep active:text-accent"
      >
        Email
      </a>
    </nav>
  );
}