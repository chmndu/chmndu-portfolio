import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { projectDetails } from "@/data/project-details";
import SiteHeader from "@/components/site-header";
import ProjectCanvas from "@/components/project-canvas";
import SiteLinks from "@/components/site-links";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

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

    return (
        <main className="mx-auto min-h-screen w-full max-w-[1120px] px-6 pb-6">
            <SiteHeader />

            <div className="pt-2 md:pt-8">
                <div className="grid gap-12 md:grid-cols-[360px_minmax(0,1fr)] md:gap-16">
                    <aside className="md:sticky md:top-8 md:self-start">
                        <div className="flex items-center gap-3">
                            <div className="flex size-14 shrink-0 items-center justify-center bg-accent text-xl font-medium">
                                <Image
                                    src={project.icon}
                                    alt=""
                                    width={36}
                                    height={36}
                                />
                            </div>

                            <div>
                                <h1 className="text-4xl font-medium tracking-[-0.02em]">
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

                        <div className="mt-6 flex flex-wrap gap-x-2 gap-y-1.5 text-xs text-muted">
                            {project.technologies.map((technology, index) => (
                                <span key={technology}>
                                    {index > 0 && (
                                        <span className="mr-2">·</span>
                                    )}
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
                                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent"
                                >
                                    Live site
                                    <ArrowUpRight size={15} strokeWidth={2} />
                                </a>
                            )}

                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent"
                                >
                                    GitHub
                                    <ArrowUpRight size={15} strokeWidth={2} />
                                </a>
                            )}
                        </div>
                    </aside>

                    <div>
                        <ProjectCanvas projectDetail={projectDetail} />

                        <div className="mt-16 flex justify-start md:justify-end">
                            <SiteLinks />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}