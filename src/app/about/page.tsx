import SiteHeader from "@/components/site-header";
import { ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/contact-form";

const tools = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Git",
    "Figma",
    "Affinity",
];

export default function AboutPage() {
    return (
        <main className="mx-auto min-h-screen w-full max-w-[1120px] px-6 pb-6">
            <SiteHeader
                context={{
                    initial: "a little more about me",
                    transition: "the person behind the work",
                }}
            />

            <div className="mt-2 grid md:mt-8 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
                <div>
                    <section className="max-w-2xl">
                        <h1 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                            Chamindu Dahanayaka
                        </h1>

                        <p className="mt-2 text-base font-medium text-muted sm:text-lg">
                            Frontend Developer
                        </p>

                        <div className="mt-2 h-0.5 w-8 bg-accent" />

                        <div className="mt-5 max-w-xl space-y-5 text-base leading-7 text-muted">
                            <p>
                                I build thoughtful interfaces and digital products for the web,
                                with a focus on clarity, responsiveness, and the details that make
                                an experience feel considered.
                            </p>

                            <p>
                                I enjoy working across the interface—from shaping structure and
                                interaction to refining the small details that make a product feel
                                right.
                            </p>
                        </div>
                    </section>

                    <div className="grid sm:grid-cols-2 sm:gap-12 lg:grid-cols-1 lg:gap-0">
                        <section className="mt-12">
                            <h2 className="border-l-2 border-accent pl-4 text-base font-medium text-foreground">
                                Tools
                            </h2>

                            <div className="mt-5 flex max-w-xl flex-wrap gap-1.5">
                                {tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="border border-border bg-accent-soft px-3 py-1.5 text-sm text-foreground"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section className="mt-12">
                            <h2 className="border-l-2 border-accent pl-4 text-base font-medium text-foreground">
                                Elsewhere
                            </h2>

                            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-1.5 text-base font-medium text-foreground transition-colors hover:text-accent-deep"
                                >
                                    Resume
                                    <ArrowUpRight
                                        aria-hidden="true"
                                        size={15}
                                        strokeWidth={2}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </a>

                                <a
                                    href="https://github.com/chmndu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-1.5 text-base font-medium text-foreground transition-colors hover:text-accent-deep"
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
                                    className="group inline-flex items-center gap-1.5 text-base font-medium text-foreground transition-colors hover:text-accent-deep"
                                >
                                    LinkedIn
                                    <ArrowUpRight
                                        aria-hidden="true"
                                        size={15}
                                        strokeWidth={2}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </a>
                            </div>
                        </section>
                    </div>
                </div>

                <ContactForm />
            </div>
        </main>
    );
}