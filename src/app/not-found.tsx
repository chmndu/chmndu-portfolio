import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/site-header";

export default function NotFound() {
    return (
        <main className="mx-auto min-h-screen w-full max-w-[1120px] px-6 pb-6">
            <SiteHeader
                context={{
                    initial: "looking for something?",
                    transition: "let's get you back",
                }}
            />

            <section className="flex min-h-[calc(100vh-100px)] items-center">
                <div>
                    <p className="text-[clamp(7rem,18vw,12rem)] font-medium leading-none tracking-[-0.08em] text-subtle/30">
                        404
                    </p>

                    <h1 className="mt-4 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                        This page doesn&apos;t exist.
                    </h1>

                    <div className="mt-5 h-0.5 w-8 bg-accent" />

                    <p className="mt-2 max-w-md text-base leading-7 text-muted">
                        The page you&apos;re looking for couldn&apos;t be found.
                    </p>

                    <Link
                        href="/"
                        className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent-deep active:text-accent"
                    >
                        <ArrowLeft className="size-4" />
                        Back to Work
                    </Link>
                </div>
            </section>
        </main>
    );
}