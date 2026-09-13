"use client";

type WorkView = "selected" | "other";

type WorkToggleProps = {
    view: WorkView;
    onChange: (view: WorkView) => void;
};

export default function WorkToggle({
    view,
    onChange,
}: WorkToggleProps) {
    return (
        <nav
            aria-label="Work views"
            className="flex items-center gap-5"
        >
            <button
                type="button"
                onClick={() => onChange("selected")}
                aria-current={view === "selected" ? "true" : undefined}
                className="group relative cursor-pointer px-2 py-2 text-sm transition-colors active:text-accent md:px-1 md:py-1"
            >
                <span
                    className={
                        view === "selected"
                            ? "text-foreground"
                            : "text-muted group-hover:text-accent-deep"
                    }
                >
                    Selected work
                </span>

                <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-px bg-accent transition-opacity ${view === "selected" ? "opacity-100" : "opacity-0"
                        }`}
                />
            </button>

            <button
                type="button"
                onClick={() => onChange("other")}
                aria-current={view === "other" ? "true" : undefined}
                className="group relative cursor-pointer px-2 py-2 text-sm transition-colors active:text-accent md:px-1 md:py-1"
            >
                <span
                    className={
                        view === "other"
                            ? "text-foreground"
                            : "text-muted group-hover:text-accent-deep"
                    }
                >
                    Other work
                </span>

                <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-px bg-accent transition-opacity ${view === "other" ? "opacity-100" : "opacity-0"
                        }`}
                />
            </button>
        </nav>
    );
}