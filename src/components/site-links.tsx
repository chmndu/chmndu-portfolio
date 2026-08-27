import { ArrowUpRight } from "lucide-react";

export default function SiteLinks() {
  return (
    <nav
      aria-label="External links"
      className="flex items-center gap-5 text-sm"
    >
      <a
        href="https://github.com/chmndu"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex cursor-pointer items-center gap-1.5 text-muted transition-colors hover:text-accent-deep active:text-accent"
      >
        GitHub
        <ArrowUpRight size={15} strokeWidth={2} />
      </a>

      <a
        href="https://www.linkedin.com/in/chamindudahanayaka/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex cursor-pointer items-center gap-1.5 text-muted transition-colors hover:text-accent-deep active:text-accent"
      >
        LinkedIn
        <ArrowUpRight size={15} strokeWidth={2} />
      </a>

      <a
        href="mailto:chamindud.dahanayaka@gmail.com"
        className="cursor-pointer text-muted transition-colors hover:text-accent-deep active:text-accent"
      >
        Email
      </a>
    </nav>
  );
}