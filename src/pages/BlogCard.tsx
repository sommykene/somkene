import { blogPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogCard = ({
  post,
  index,
}: {
  post: (typeof blogPosts)[0];
  index: number;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group">
    <Link to={`/blog/${post.slug}`}>
      <div className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h2>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readingTime}
            </span>
          </div>

          <span className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
            Read more <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  </motion.article>
);
