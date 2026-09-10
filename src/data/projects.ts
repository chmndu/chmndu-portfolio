export type Project = {
  title: string;
  slug: string;
  year: string;
  description: string;
  technologies: string[];
  image: string;
  selectedImage: string;
  liveUrl?: string;
  githubUrl?: string;
  externalUrl?: string;
  icon: string;
};

export const projects: Project[] = [
  {
    title: "Wordulary",
    slug: "wordulary",
    year: "2026",
    description:
      "An AI-powered vocabulary learning app for building, organizing, and learning a personal vocabulary library.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Gemini API",
      "Tailwind CSS",
    ],
    image: "/projects/wordulary/stage.webp",
    selectedImage: "/projects/wordulary/selected.webp",
    liveUrl: "https://wordulary.vercel.app/",
    githubUrl: "https://github.com/chmndu/wordulary",
    icon: "/projects/wordulary/icon.svg",
  },

  {
    title: "Invoice Generator",
    slug: "invoice-generator",
    year: "2026",
    description:
      "A mobile-first invoice generator for small businesses, with live A4 preview and PDF or PNG export.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "html-to-image",
    ],
    image: "/projects/invoice-generator/stage.webp",
    selectedImage: "/projects/invoice-generator/selected.webp",
    liveUrl: "https://a4-invoice-generator.vercel.app/",
    githubUrl: "https://github.com/chmndu/invoice-generator",
    icon: "/projects/invoice-generator/icon.svg",
  },
];