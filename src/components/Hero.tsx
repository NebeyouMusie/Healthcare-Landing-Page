import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Experience exceptional healthcare with our team of dedicated professionals. We provide comprehensive medical services, preventive care, and personalized treatment plans for you and your family.
            </p>
            <Button className="bg-neon text-black hover:bg-neon/90">
              Book an Appointment
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
                alt="Healthcare Professional"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}