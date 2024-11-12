import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-sm leading-loose text-center text-muted-foreground md:text-left">
            Built with NextJS & Tailwind
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;