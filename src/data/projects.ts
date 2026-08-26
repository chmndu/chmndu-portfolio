export type Project = {
  title: string;
  slug: string;
  year: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: string;
  externalUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    slug: "project-one",
    year: "2026",
    description:
      "A placeholder project exploring how a digital product can be presented through a focused and considered interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/project-one.svg",
    liveUrl: "#",
  },
  {
    title: "Project Two",
    slug: "project-two",
    year: "2026",
    description:
      "A second placeholder project used to test the selected work experience and project switching.",
    technologies: ["React", "TypeScript", "CSS"],
    image: "/projects/project-two.svg",
    githubUrl: "#",
  },
  {
    title: "Project Three",
    slug: "project-three",
    year: "2025",
    description:
      "A third placeholder project representing a different kind of digital work.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    image: "/projects/project-three.svg",
    externalUrl: "#",
  },
];