import Image from "next/image";

export default function AboutVisual() {
    return (
        <section className="mt-12">
            <div className="relative aspect-[2.2/1] overflow-hidden border border-border sm:aspect-[2048/725]">
                <Image
                    src="/about/about-image.webp"
                    alt="Minimalist workspace overlooking a city"
                    fill
                    sizes="(min-width: 1024px) 616px, 100vw"
                    className="object-cover"
                    priority
                />

                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
                    <p className="text-xs tracking-[-0.02em] text-surface/80">
                        it&apos;s all possible
                    </p>
                </div>
            </div>
        </section>
    );
}