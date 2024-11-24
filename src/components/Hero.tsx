import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Navigating the digital landscape for success
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Our digital marketing agency helps businesses achieve their goals
              through a comprehensive range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Button className="bg-neon text-black hover:bg-neon/90">
              Book a consultation
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square relative">
              <img
                src="/placeholder.svg"
                alt="Digital Marketing"
                className="object-cover"
              />
              <div className="absolute top-0 right-0 flex gap-2">
                <div className="w-8 h-8 rounded-full bg-neon flex items-center justify-center">
                  ♥
                </div>
                <div className="w-8 h-8 rounded-full bg-neon flex items-center justify-center">
                  ▶
                </div>
                <div className="w-8 h-8 rounded-full bg-neon flex items-center justify-center">
                  📍
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}