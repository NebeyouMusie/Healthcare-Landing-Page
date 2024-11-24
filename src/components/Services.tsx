import { Stethoscope, Heart, Brain, Activity } from "lucide-react";

const services = [
  {
    title: "Primary Care",
    icon: Stethoscope,
    description: "Comprehensive health assessments and preventive care services",
    isDark: false,
  },
  {
    title: "Cardiology",
    icon: Heart,
    description: "Expert cardiac care and heart health monitoring",
    isDark: true,
  },
  {
    title: "Neurology",
    icon: Brain,
    description: "Specialized care for neurological conditions",
    isDark: true,
  },
  {
    title: "Wellness Programs",
    icon: Activity,
    description: "Personalized health and wellness planning",
    isDark: false,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-neon text-black font-medium mb-4">
            Our Services
          </span>
          <p className="text-muted-foreground">
            We offer a comprehensive range of medical services to ensure your complete health and well-being:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`service-card ${
                service.isDark ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}
            >
              <service.icon className="h-8 w-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm mb-4">{service.description}</p>
              <button className="text-sm font-medium flex items-center gap-2">
                Learn more
                <span className="text-neon">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}