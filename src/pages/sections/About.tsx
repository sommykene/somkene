import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import me from "../../assets/me.png";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <p className="text-primary font-medium mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Passionate about creating meaningful experiences
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <motion.img
                src={me}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                alt="About Me"
                className="mx-auto rounded-lg shadow-lg w-auto h-auto aspect-square"
              />
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I’m a frontend engineer and builder who cares deeply about
                creating thoughtful, human-centred experiences through
                technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I started my corporate career working in banking tech, where I
                spent my time on mobile development. Alongside, I co-founded an
                ed-startup, where I built and shipped AI powered web products
                for university students applying for jobs.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Outside of my day-to-day work, I’m deeply invested in community.
                I enjoy speaking at events, and share what I’m learning with
                others, especially for people who don’t always see themselves
                represented in tech.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently focused on improving my design-system thinking,
                frontend architecture knowledge, and growing my personal brand
                💖
              </p>
            </div>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};
