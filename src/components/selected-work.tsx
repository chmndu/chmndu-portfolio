import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type SelectedWorkProps = {
    projects: Project[];
};

export default function SelectedWork({ projects }: SelectedWorkProps) {
    return (
        <section className="mt-8 md:mt-12">
            <div className="space-y-20 md:space-y-28">
                {projects.map((project, index) => {
                    const reverse = index % 2 === 1;

                    return (
                        <article key={project.slug}>
                            <div
                                className={`grid gap-8 md:items-stretch md:gap-10 ${reverse
                                    ? "md:grid-cols-[1fr_1.45fr]"
                                    : "md:grid-cols-[1.45fr_1fr]"
                                    }`}
                            >
                                <div
                                    className={`relative aspect-[4/3] w-full overflow-hidden border border-border ${reverse ? "md:order-2" : ""
                                        }`}
                                >
                                    <Image
                                        src={project.featuredImage}
                                        alt={`${project.title} project preview`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                        loading={index === 0 ? "eager" : "lazy"}
                                        className="object-cover"
                                    />
                                </div>

                                <div
                                    className={`flex flex-col justify-between ${reverse ? "md:order-1" : ""
                                        }`}
                                >
                                    <div>
                                        <div className="text-sm text-muted">
                                            {project.year}
                                        </div>

                                        <h3 className="mt-3 text-4xl font-medium tracking-[-0.04em] lg:text-5xl">
                                            {project.title}
                                        </h3>

                                        <p className="mt-3 max-w-md text-base leading-7 text-muted">
                                            {project.description}
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-1.5">
                                            {project.technologies.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="border border-border bg-surface px-2.5 py-1 text-xs text-subtle"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                                            <Link
                                                href={`/work/${project.slug}`}
                                                className="group inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent"
                                            >
                                                Details
                                                <ArrowRight
                                                    aria-hidden="true"
                                                    size={15}
                                                    strokeWidth={2}
                                                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                                                />
                                            </Link>

                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent"
                                                >
                                                    Live site
                                                    <ArrowUpRight
                                                        aria-hidden="true"
                                                        size={15}
                                                        strokeWidth={2}
                                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                    />
                                                </a>
                                            )}

                                            {project.externalUrl && (
                                                <a
                                                    href={project.externalUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent"
                                                >
                                                    View project
                                                    <ArrowUpRight
                                                        aria-hidden="true"
                                                        size={15}
                                                        strokeWidth={2}
                                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                    />
                                                </a>
                                            )}

                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent"
                                                >
                                                    GitHub
                                                    <ArrowUpRight
                                                        aria-hidden="true"
                                                        size={15}
                                                        strokeWidth={2}
                                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                    />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}