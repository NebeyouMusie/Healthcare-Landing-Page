import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-neon text-black font-medium mb-4">
            Contact us
          </span>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have questions about our services? We're here to help.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-neon flex items-center justify-center">
                <MapPin className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold">Our Location</h3>
                <p className="text-muted-foreground">123 Medical Center Ave, Health City</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-neon flex items-center justify-center">
                <Mail className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-muted-foreground">care@healthcareplus.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-neon flex items-center justify-center">
                <Phone className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold">Emergency Line</h3>
                <p className="text-muted-foreground">+1 (555) 911-1234</p>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-background border"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-background border"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-lg bg-background border"
            ></textarea>
            <Button className="w-full bg-neon text-black hover:bg-neon/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}