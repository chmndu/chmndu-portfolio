export type ProjectDetailBlock =
    | {
        type: "text";
        title: string;
        body: string;
    }
    | {
        type: "image";
        src: string;
        alt: string;
    };

export type ProjectDetail = {
    slug: string;
    intro: string;
    blocks: ProjectDetailBlock[];
    closing: string;
};

export const projectDetails: ProjectDetail[] = [
    {
        slug: "wordulary",

        intro:
            "Wordulary is a vocabulary learning app built around the idea that collecting a word should be the beginning of learning it, not the end.",

        blocks: [
            {
                type: "image",
                src: "/projects/wordulary/dashboard-light.webp",
                alt: "Wordulary dashboard",
            },
            {
                type: "text",
                title: "The idea",
                body:
                    "I wanted to build a place where new vocabulary could be collected, understood, organized, and revisited without the interface getting in the way. The product combines a personal vocabulary library with AI-generated learning content, giving each saved word enough context to become useful beyond a single definition.",
            },
            {
                type: "text",
                title: "Designing the learning experience",
                body:
                    "The interface was designed around focused study rather than feature density. Clear hierarchy, generous spacing, and a restrained visual system keep attention on the word being learned. Vocabulary can be organized into custom collections and given a learning status. Terms marked as Learning can then be reviewed, creating a simple path from collecting a word to revisiting it. An import flow also makes it possible to bring an existing vocabulary list into the library instead of starting from scratch.",
            },
            {
                type: "image",
                src: "/projects/wordulary/collections.webp",
                alt: "Wordulary collections",
            },
            {
                type: "text",
                title: "Making AI useful",
                body:
                    "AI is used as part of the learning experience rather than as a feature that exists on its own. When a word is generated, Gemini creates its definition, example sentences, synonyms, antonyms, and difficulty level. This turns a single word into a richer reference that can be saved to the vocabulary library and revisited later.",
            },
            {
                type: "image",
                src: "/projects/wordulary/term-details.webp",
                alt: "Wordulary term details",
            },
            {
                type: "text",
                title: "Building the system",
                body:
                    "Wordulary is built with Next.js and TypeScript, with Supabase providing authentication and PostgreSQL persistence. Row Level Security was implemented to keep each user's vocabulary and collection data isolated. Gemini handles AI-generated vocabulary content, while the application is deployed through Vercel.",
            },
        ],

        closing:
            "Wordulary became an exercise in building a complete product—from shaping the learning experience and integrating AI to handling authentication, user data, and deployment.",
    },
    {
        slug: "invoice-generator",

        intro:
            "Invoice Generator is a lightweight invoicing tool built to make creating and exporting a professional, print-ready invoice straightforward from a single workflow.",

        blocks: [
            {
                type: "image",
                src: "/projects/invoice-generator/editor.webp",
                alt: "Invoice Generator editor and live A4 preview",
            },
            {
                type: "text",
                title: "The idea",
                body:
                    "The project started from a simple need: replace a manually designed invoice workflow with something faster and more consistent. Instead of rebuilding the document for every invoice, the user can enter the customer and order details once and immediately see the resulting invoice.",
            },
            {
                type: "text",
                title: "Designing around the invoice",
                body:
                    "The invoice itself became the main constraint of the interface. A live A4 preview keeps the document visible while the user edits its contents, making it possible to understand the final result before exporting it. Line items, quantities, prices, discounts, customer details, payment information, and total in words are handled within the same workflow.",
            },
            {
                type: "text",
                title: "Keeping the workflow lightweight",
                body:
                    "The tool focuses on the parts of invoicing that are needed most often rather than becoming a full business management system. Invoice numbers can increment automatically on the device, bank details can be saved for reuse, and totals are calculated as the invoice is edited. The result is a focused tool that can be opened and used without setting up an account or maintaining a separate backend.",
            },
            {
                type: "image",
                src: "/projects/invoice-generator/mobile.webp",
                alt: "Invoice Generator on a mobile screen",
            },
            {
                type: "text",
                title: "From editor to final document",
                body:
                    "The invoice needs to work outside the application, so export is part of the experience rather than an afterthought. The tool supports PNG downloads and a dedicated print view for producing a clean A4 PDF. The generated document is treated as a printable invoice rather than simply a screenshot of the web interface.",
            },
            {
                type: "image",
                src: "/projects/invoice-generator/invoice-a4.webp",
                alt: "Generated A4 invoice",
            },
            {
                type: "text",
                title: "Building the system",
                body:
                    "The application is built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Invoice data and settings are stored in localStorage, keeping the tool entirely client-side without requiring a database or account system. Line totals and the final amount are calculated from the entered data, while html-to-image handles PNG export and the print view provides the PDF workflow.",
            },
        ],

        closing:
            "Invoice Generator became an exercise in turning a familiar business document into a focused digital workflow—balancing editable data, live document preview, and reliable output without adding unnecessary complexity.",
    },
];