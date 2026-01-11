import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/pages/sections/Footer";
import { blogPosts } from "@/data/blogPosts";
import { BlogCard } from "./BlogCard";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <p className="text-primary font-medium mb-3">Blog</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Thoughts & Ideas
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Writing about technology, design systems, and my journey as a
              developer both personal and corporate.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-xl md:text-2xl font-display font-semibold text-center text-foreground mb-3 group-hover:text-primary transition-colors">
              Coming soon...
            </h2>
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
