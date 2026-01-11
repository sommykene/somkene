import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: Project;
  index: number;
  isInView: boolean;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 60 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, delay: index * 0.15 }}
    className={`group ${project.featured ? "md:col-span-2" : ""}`}>
    <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
      {/* Project Image */}
      <div className="aspect-video bg-muted relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`View ${project.title} on GitHub`}>
              <Github size={20} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`View ${project.title} live`}>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.article>
);
