export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
};

export const projects = [
  {
    title: "Asusu Igbo",
    description:
      "A language learning platform dedicated to preserving and teaching the Igbo language through interactive lessons and cultural content.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://asusuigbo.com",
    githubUrl: "https://github.com",
    image: "/placeholder.svg",
    featured: false,
  },
  {
    title: "Odara Health",
    description:
      "A mobile health application focused on making healthcare more accessible and personalized for users in underserved communities.",
    tech: ["React Native", "TypeScript", "Firebase", "Expo"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/placeholder.svg",
    featured: false,
  },
  {
    title: "Personal Website",
    description:
      "My previous portfolio website showcasing my work and thoughts on technology, design, and creativity.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://somkene.co.uk",
    githubUrl: "https://github.com",
    image: "/placeholder.svg",
    featured: false,
  },
];
