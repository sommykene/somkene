import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import tiktok from "../../assets/tiktok.svg";
import TikTokIcon from "@/components/TikTokIcon";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Som E-Agwuegbo. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/sommykene"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub">
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/someagwuegbo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@som.kene"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="TikTok">
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
