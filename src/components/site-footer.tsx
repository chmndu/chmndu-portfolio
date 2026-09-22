import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border pt-5 sm:px-5">
      <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-medium text-foreground transition-colors hover:text-accent-deep active:text-accent"
          >
            chmndu
          </Link>

          <span className="text-subtle">
            © {new Date().getFullYear()}
          </span>
        </div>

        <nav
          aria-label="Footer links"
          className="flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          <a
            href="/resume/Chamindu-Dahanayaka-Frontend-Developer-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent-deep active:text-accent"
          >
            Resume
            <ArrowUpRight
              aria-hidden="true"
              size={14}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href="https://github.com/chmndu"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent-deep active:text-accent"
          >
            GitHub
            <ArrowUpRight
              aria-hidden="true"
              size={14}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/chamindudahanayaka/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent-deep active:text-accent"
          >
            LinkedIn
            <ArrowUpRight
              aria-hidden="true"
              size={14}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href="mailto:chamindud.dahanayaka@gmail.com"
            className="text-muted transition-colors hover:text-accent-deep active:text-accent"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}