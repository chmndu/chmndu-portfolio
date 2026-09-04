export type OtherWorkItem = {
  title: string;
  tags: string[];
  image: string;
  mobileImage?: string;
  href?: string;
  external?: boolean;
};

export const otherWork: OtherWorkItem[] = [
  {
    title: "Pixplore",
    tags: ["React", "Unsplash API"],
    image: "/other-work/pixplore.webp",
    mobileImage: "/other-work/pixplore-mobile.webp",
    href: "https://pixplore-engine.vercel.app/",
    external: true,
  },
  {
    title: "Winner Selector",
    tags: ["React"],
    image: "/other-work/winner-selector.webp",
    mobileImage: "/other-work/winner-selector-mobile.webp",
    href: "https://chmndu.github.io/winner-selector/",
    external: true,
  },
  {
    title: "GrowthBoost",
    tags: ["Webflow", "Frontend"],
    image: "/other-work/growthboost.webp",
    mobileImage: "/other-work/growthboost-mobile.webp",
    href: "https://growthboost1.webflow.io/",
    external: true,
  },
  {
    title: "Frontend Mentor",
    tags: ["Frontend", "UI"],
    image: "/other-work/frontend-mentor.webp",
    mobileImage: "/other-work/frontend-mentor-mobile.webp",
    href: "https://www.frontendmentor.io/profile/chmndu",
    external: true,
  },
  {
    title: "Sofa Catalog",
    tags: ["Print", "Layout"],
    image: "/other-work/sofa-catalog.webp",
    mobileImage: "/other-work/sofa-catalog-mobile.webp",
  },
  {
    title: "Social Media",
    tags: ["Social posts", "Visual design"],
    image: "/other-work/social-media.webp",
    mobileImage: "/other-work/social-media-mobile.webp",
  },
  {
    title: "Logo Design",
    tags: ["Branding", "Identity"],
    image: "/other-work/logo-design.webp",
    mobileImage: "/other-work/logo-design-mobile.webp",
  },
  {
    title: "Video & Content",
    tags: ["Video editing", "Content creation"],
    image: "/other-work/video-content.webp",
    mobileImage: "/other-work/video-content-mobile.webp",
    href: "https://youtu.be/NRyGzTDMD8o?si=ZqDVlf8F49kTjG3Q",
    external: true,
  },
];