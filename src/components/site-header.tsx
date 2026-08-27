"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ContextDisplay from "@/components/context-display";

export default function SiteHeader() {
  const pathname = usePathname();

  const isWorkActive = pathname === "/";
  const isAboutActive = pathname === "/about";

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
          className={`cursor-pointer transition-colors hover:text-accent-deep active:text-accent ${isWorkActive ? "text-foreground" : "text-muted"
            }`}
        >
          Work
        </Link>

        <Link
          href="/about"
          className={`cursor-pointer transition-colors hover:text-accent-deep active:text-accent ${isAboutActive ? "text-foreground" : "text-muted"
            }`}
        >
          About
        </Link>
      </nav>

      <div className="col-span-2 mt-7 justify-self-start md:col-span-1 md:col-start-2 md:row-start-1 md:mt-0 md:justify-self-center">
        <ContextDisplay
          text={
            isAboutActive
              ? "a little more about me"
              : "building digital products for the web"
          }
        />
      </div>
    </header>
  );
}