import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">WizardZ</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium">
              About us
            </a>
            <a href="#services" className="text-sm font-medium">
              Services
            </a>
            <a href="#cases" className="text-sm font-medium">
              Use Cases
            </a>
            <a href="#pricing" className="text-sm font-medium">
              Pricing
            </a>
            <a href="#blog" className="text-sm font-medium">
              Blog
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex bg-neon text-black hover:bg-neon/90">
            Request a quote
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}