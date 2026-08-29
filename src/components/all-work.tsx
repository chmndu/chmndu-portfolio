import type { Project } from "@/data/projects";

type AllWorkProps = {
    projects: Project[];
};

const otherWork = [
  { title: "Sofa catalog book" },
  { title: "Social media posts" },
  { title: "YouTube / Gaming" },
  { title: "Frontend Mentor challenges" },
];

export default function AllWork({ projects }: AllWorkProps) {
    return (
        <section className="mt-8 md:mt-12">
            <div>
                <h2 className="text-sm text-muted">Selected work</h2>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {projects.map((project) => {
                        const href =
                            project.liveUrl ??
                            project.externalUrl ??
                            project.githubUrl;

                        const content = (
                            <div className="group relative aspect-[16/9] w-full overflow-hidden bg-[#e9e8e5]">
                                <div className="absolute inset-0 flex items-end p-4">
                                    <span className="text-sm text-subtle transition-colors group-hover:text-foreground">
                                        {project.title}
                                    </span>
                                </div>
                            </div>
                        );

                        if (!href) {
                            return (
                                <article key={project.slug}>
                                    {content}
                                </article>
                            );
                        }

                        return (
                            <a
                                key={project.slug}
                                href={href}
                                className="block cursor-pointer"
                            >
                                {content}
                            </a>
                        );
                    })}
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-sm text-muted">Other work</h2>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {otherWork.map((item) => (
                        <article
                            key={item.title}
                        >
                            <div className="group relative aspect-[4/3] w-full overflow-hidden bg-[#e9e8e5]">
                                <div className="absolute inset-0 flex items-end p-4">
                                    <span className="text-sm text-subtle transition-colors group-hover:text-foreground">
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}