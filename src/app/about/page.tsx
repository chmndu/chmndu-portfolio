import SiteHeader from "@/components/site-header";
import { ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function AboutPage() {
    return (
        <main className="mx-auto min-h-screen w-full max-w-[1120px] px-6 pb-6">
            <SiteHeader
                context={{
                    initial: "a little more about me",
                    transition: "the person behind the work",
                }}
            />

            <div className="mt-2 grid gap-16 md:mt-8 md:grid-cols-[1fr_0.8fr] md:gap-20">
                <div>
                    <section className="max-w-2xl">
                        <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                            Chamindu Dahanayaka
                        </h1>

                        <p className="mt-3 text-lg text-muted">
                            Frontend Developer
                        </p>

                        <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-muted">
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

                    <section className="mt-16">
                        <h2 className="text-sm text-muted">Tools</h2>

                        <p className="mt-4 max-w-xl text-base leading-7 text-muted">
                            HTML · CSS · JavaScript
                            <br />
                            React · Next.js · TypeScript
                            <br />
                            Tailwind CSS · Supabase · Git · Figma
                        </p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-sm text-muted">Elsewhere</h2>

                        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex cursor-pointer items-center gap-1.5 text-muted transition-colors hover:text-accent-deep active:text-accent"
                            >
                                Resume
                                <ArrowUpRight size={15} strokeWidth={2} />
                            </a>

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
                        </div>
                    </section>
                </div>

                <ContactForm />
            </div>
        </main>
    );
}