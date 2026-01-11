import asusuIgboImage from "../assets/projects/asusu-igbo.png";
import odaraHealthImage from "../assets/projects/odara-health.png";
import blackInSportImage from "../assets/projects/black-in-sport.png";
import somkeneImage from "../assets/projects/somkene.png";
import chaseImage from "../assets/projects/chase.png";
import nestworkImage from "../assets/projects/nestwork.jpg";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  years: string;
  type: "Personal" | "Professional" | "Startup";
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Black In Sport",
    description:
      "A large-scale platform celebrating Black excellence in sport. I worked on frontend development and design-led features, collaborating closely with marketing and creative teams to deliver impactful, content-driven experiences for a broad audience.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Contentful CMS",
      "Firebase",
    ],
    liveUrl: "https://blackinsport.com/",
    image: blackInSportImage,
    years: "2021-present",
    featured: false,
    type: "Startup",
  },
  {
    title: "Personal Website",
    description: `My personal website and digital home, designed to showcase my work, writing, and journey in tech. Built with a focus on clean UI, subtle motion, and a strong foundation for evolving into a design-system-led platform.`,
    tech: ["Vite", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://somkene.co.uk",
    image: somkeneImage,
    years: "",
    type: "Personal",
    featured: false,
  },
  {
    title: "Nestwork",
    description: `An AI-powered careers platform I co-founded and built as CTO alongside working in banking tech. I led engineering across frontend, backend, and mobile, helping scale the product from early prototype to thousands of active users.`,
    tech: [
      "Next.js",
      "TypeScript",
      "Python",
      "GraphQL",
      "PostgreSQL",
      "Vector DB",
      "Playwright",
    ],
    image: nestworkImage,
    years: "2021 - 2025",
    featured: false,
    type: "Startup",
  },
  {
    title: "Chase UK",
    description:
      "Frontend and mobile development work within a large banking environment, contributing to customer-facing features built with React Native. Focused on reliability, accessibility, and delivering high-quality experiences at scale.",
    tech: ["React Native", "TypeScript", "Styled Components"],
    image: chaseImage,
    years: "2022 - 2025",
    type: "Professional",
    featured: false,
  },
  {
    title: "Asụsụ Igbo",
    description:
      "A language-learning platform focused on preserving and teaching the Igbo language through interactive lessons and culturally rooted content. Built as a personal project with an emphasis on internationalisation and accessibility.",
    tech: [
      "React",
      "Firebase Auth",
      "Firebase Firestore",
      "React Router",
      "I18Next",
    ],
    liveUrl: "https://coc251-asusu-igbo-v3.web.app/",
    githubUrl: "https://github.com/sommykene/coc251-project-v3",
    image: asusuIgboImage,
    years: "2021 - 2022",
    type: "Personal",
    featured: false,
  },
  {
    title: "Odara Health",
    description:
      "A mobile health application built during my startup journey, focused on improving access to healthcare for underserved communities. I worked primarily on the React Native app, shaping the product experience from early concept to implementation.",
    tech: ["React Native", "TypeScript", "Firebase", "Expo"],
    image: odaraHealthImage,
    years: "2021",
    type: "Startup",
    featured: false,
  },
];
