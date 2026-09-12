import Image from "next/image";
import type { ProjectDetail } from "@/data/project-details";

type ProjectCanvasProps = {
    projectDetail: ProjectDetail;
};

export default function ProjectCanvas({
    projectDetail,
}: ProjectCanvasProps) {
    return (
        <div className="space-y-12">
            {projectDetail.blocks.map((block, index) => {
                if (block.type === "image") {
                    return (
                        <div
                            key={`${block.type}-${index}`}
                            className="w-full overflow-hidden border border-border"
                        >
                            <Image
                                src={block.src}
                                alt={block.alt}
                                width={1200}
                                height={900}
                                sizes="(max-width: 768px) 100vw, 700px"
                                loading={index === 0 ? "eager" : "lazy"}
                                className="h-auto w-full"
                            />
                        </div>
                    );
                }

                return (
                    <section key={`${block.type}-${index}`}>
                        <h2 className="border-l-2 border-accent pl-4 text-base font-medium text-foreground">
                            {block.title}
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                            {block.body}
                        </p>
                    </section>
                );
            })}

            <p className="max-w-2xl text-base leading-7 text-foreground/80">
                {projectDetail.closing}
            </p>
        </div>
    );
}