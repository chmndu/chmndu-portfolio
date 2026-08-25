export default function ProjectStage() {
  return (
    <section className="mt-8">
      <div className="grid gap-8 md:grid-cols-[1.45fr_1fr] md:gap-10">
        <div className="aspect-[4/3] w-full overflow-hidden bg-[#e9e8e5]">
          <div className="flex h-full items-center justify-center">
            <span className="text-sm text-subtle">Project visual</span>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="text-sm text-muted">
              2026
            </div>

            <h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              Project One
            </h1>

            <p className="mt-4 max-w-md text-base leading-7 text-muted">
              A placeholder project exploring how a digital product can be
              presented through a focused and considered interface.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Tailwind CSS</span>
            </div>

            <a
              href="#"
              className="mt-7 inline-flex items-center text-sm font-medium transition-opacity hover:opacity-60"
            >
              View project <span className="ml-2">↗</span>
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5 text-sm text-muted md:mt-8">
            <button
              type="button"
              className="transition-colors hover:text-foreground"
            >
              ← Previous
            </button>

            <button
              type="button"
              className="transition-colors hover:text-foreground"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}