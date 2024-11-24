import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-red-500" />
            <span className="font-bold text-xl">HealthCare Plus</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About us
            </a>
            <a href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </a>
            <a href="#cases" className="text-sm font-medium hover:text-primary">
              Patient Stories
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary">
              Insurance Plans
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              Contact us
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex bg-neon text-black hover:bg-neon/90">
            Book Appointment
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}