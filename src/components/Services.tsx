import { Search, MousePointerClick, MessageSquare, Mail } from "lucide-react";

const services = [
  {
    title: "Search engine optimization",
    icon: Search,
    description: "Improve your visibility and ranking on search engines",
    isDark: false,
  },
  {
    title: "Pay per click advertising",
    icon: MousePointerClick,
    description: "Drive targeted traffic to your website",
    isDark: true,
  },
  {
    title: "Social media marketing",
    icon: MessageSquare,
    description: "Engage with your audience on social platforms",
    isDark: true,
  },
  {
    title: "E-mail marketing",
    icon: Mail,
    description: "Build relationships with your customers",
    isDark: false,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-neon text-black font-medium mb-4">
            Services
          </span>
          <p className="text-muted-foreground">
            As our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online. These services include:
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