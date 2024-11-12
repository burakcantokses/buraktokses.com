import Link from "next/link";
import { Button } from "./button/Button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold font-mono">Burak Tokses</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link 
              href="/about"
              className="flex items-center text-sm font-medium transition-colors hover:text-primary"
            >
              Hakkımda
            </Link>
            <Link 
              href="/projects"
              className="flex items-center text-sm font-medium transition-colors hover:text-primary"
            >
              Projeler
            </Link>
            <Link 
              href="/blog"
              className="flex items-center text-sm font-medium transition-colors hover:text-primary"
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" asChild>
            <Link href="/contact">İletişim</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;