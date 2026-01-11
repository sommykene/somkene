import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Flutter", "iOS", "Android", "Expo"],
  },
  {
    title: "Tools & Design",
    skills: ["Git", "Figma", "VS Code", "Docker", "Vercel"],
  },
];

const SkillBadge = ({ skill, delay }: { skill: string; delay: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.15)" }}
    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium cursor-default transition-colors"
  >
    {skill}
  </motion.span>
);

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium mb-3">Skills & Expertise</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Technologies I work with
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill}
                      skill={skill}
                      delay={isInView ? categoryIndex * 0.1 + skillIndex * 0.05 : 0}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
