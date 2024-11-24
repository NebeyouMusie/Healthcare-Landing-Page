import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navItems = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Patient Stories", href: "#cases" },
  { label: "Insurance Plans", href: "#pricing" },
  { label: "Contact us", href: "#contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-2 py-1 text-lg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="mt-4 bg-neon text-black hover:bg-neon/90">
            Book Appointment
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}