import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { projectDetails } from "@/data/project-details";
import SiteHeader from "@/components/site-header";
import ProjectCanvas from "@/components/project-canvas";
import SiteFooter from "@/components/site-footer";
import Link from "next/link";
import type { Metadata } from "next";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;

    const project = projects.find((project) => project.slug === slug);

    if (!project) {
        return {};
    }

    return {
        title: project.title,
    };
}

function OtherSelectedWork({
    projects,
}: {
    projects: Project[];
}) {
    if (projects.length === 0) return null;

    return (
        <div className="mt-20">
            <h2 className="text-sm text-muted">Other selected work</h2>

            <div className="mt-4 flex flex-col gap-3">
                {projects.map((item) => (
                    <Link
                        key={item.slug}
                        href={`/work/${item.slug}`}
                        className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent"
                    >
                        {item.title}
                        <ArrowRight
                            aria-hidden="true"
                            size={15}
                            strokeWidth={2}
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    const project = projects.find((project) => project.slug === slug);

    if (!project) {
        notFound();
    }

    const projectDetail = projectDetails.find(
        (detail) => detail.slug === project.slug
    );

    if (!projectDetail) {
        notFound();
    }

    const otherProjects = projects.filter(
        (item) => item.slug !== project.slug
    );

    return (
        <main className="mx-auto min-h-screen w-full max-w-[1120px] px-6 pb-6">
            <SiteHeader
                context={{
                    initial: "understanding the product",
                    transition: project.context,
                }}
            />

            <div className="pt-2 md:pt-8 grid gap-12 md:grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[360px_minmax(0,1fr)] md:gap-16">
                <aside className="md:sticky md:top-8 md:self-start">
                    <div className="flex items-stretch">
                        <div className="flex w-14 shrink-0 items-center justify-center bg-accent">
                            <Image
                                src={project.icon}
                                alt=""
                                width={36}
                                height={36}
                                className="h-auto w-9"
                            />
                        </div>

                        <div className="pl-3">
                            <h1 className="text-3xl font-medium leading-[1.05] tracking-[-0.02em] lg:text-4xl">
                                {project.title}
                            </h1>

                            <p className="mt-1 text-sm text-muted">
                                {project.year}
                            </p>
                        </div>
                    </div>

                    <p className="mt-6 text-base leading-7 text-muted">
                        {projectDetail.intro}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
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

                    <div className="hidden md:block">
                        <OtherSelectedWork projects={otherProjects} />
                    </div>
                </aside>

                <div>
                    <ProjectCanvas projectDetail={projectDetail} />

                    <div className="md:hidden">
                        <OtherSelectedWork projects={otherProjects} />
                    </div>
                </div>
            </div>

            <SiteFooter />
        </main>
    );
}