import Link from "next/link";
import ContextDisplay from "@/components/context-display";

export default function SiteHeader() {
  return (
    <header className="grid grid-cols-[1fr_auto] items-center py-6 md:grid-cols-[1fr_auto_1fr]">
      <Link
        href="/"
        className="justify-self-start cursor-pointer text-lg font-medium tracking-[-0.02em] transition-opacity hover:opacity-60 active:opacity-80"
      >
        chmndu
      </Link>

      <nav className="flex items-center gap-6 justify-self-end text-sm md:col-start-3">
        <Link
          href="/"
          className="cursor-pointer transition-colors hover:text-accent-deep active:text-accent"
        >
          Work
        </Link>

        <Link
          href="/about"
          className="cursor-pointer text-muted transition-colors hover:text-accent-deep active:text-accent"
        >
          About
        </Link>
      </nav>

      <div className="col-span-2 mt-7 justify-self-start md:col-span-1 md:col-start-2 md:row-start-1 md:mt-0 md:justify-self-center">
        <ContextDisplay />
      </div>
    </header>
  );
}