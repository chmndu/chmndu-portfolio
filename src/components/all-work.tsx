import Link from "next/link";
import type { Project } from "@/data/projects";
import { otherWork } from "@/data/other-work";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type AllWorkProps = {
    projects: Project[];
};

export default function AllWork({ projects }: AllWorkProps) {
    return (
        <section className="mt-8 md:mt-12">
            <div>
                <h2 className="text-sm text-muted">Selected work</h2>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/work/${project.slug}`}
                            className="group block cursor-pointer"
                        >
                            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#e9e8e5]">
                                <div className="absolute inset-0 flex items-end p-4">
                                    <span className="text-sm text-subtle transition-colors group-hover:text-foreground">
                                        {project.title}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-sm text-muted">Other work</h2>

                <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-12 md:grid-rows-6">
                    {otherWork.map((item, index) => {
                        const sizes = [
                            "md:col-span-3 md:row-span-4",
                            "md:col-span-4 md:row-span-2",
                            "md:col-span-5 md:row-span-2",
                            "md:col-span-6 md:row-span-2",
                            "md:col-span-3 md:row-span-2",
                            "md:col-span-4 md:row-span-2",
                            "md:col-span-3 md:row-span-2",
                            "md:col-span-5 md:row-span-2",
                        ];

                        const cardContent = (
                            <>
                                <div className="absolute inset-0 md:hidden">
                                    <Image
                                        src={item.mobileImage ?? item.image}
                                        alt={`${item.title} preview`}
                                        fill
                                        sizes="100vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="absolute inset-0 hidden md:block">
                                    <Image
                                        src={item.image}
                                        alt={`${item.title} preview`}
                                        fill
                                        sizes="50vw"
                                        className="object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                                    />
                                </div>

                                <div className="absolute bottom-2 left-2 bg-accent px-3 py-2">
                                    <h3 className="flex items-center gap-1 text-sm font-medium">
                                        {item.title}

                                        {item.href && (
                                            <ArrowUpRight
                                                size={13}
                                                strokeWidth={1.75}
                                                className="text-foreground/70"
                                            />
                                        )}
                                    </h3>

                                    <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-xs text-foreground/70">
                                        {item.tags.map((tag, tagIndex) => (
                                            <span key={tag}>
                                                {tagIndex > 0 && (
                                                    <span className="mr-2">·</span>
                                                )}
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </>
                        );

                        return item.href ? (
                            <a
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative block min-h-56 cursor-pointer overflow-hidden border border-border bg-accent-soft ${sizes[index]}`}
                            >
                                {cardContent}
                            </a>
                        ) : (
                            <article
                                key={item.title}
                                className={`group relative min-h-56 overflow-hidden border border-border bg-accent-soft ${sizes[index]}`}
                            >
                                {cardContent}
                            </article>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}