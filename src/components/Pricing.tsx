import { Check } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Basic Care",
    price: "$199/month",
    features: ["Primary Care Visits", "Basic Health Screenings", "24/7 Nurse Hotline", "Digital Health Records"],
  },
  {
    name: "Family Care",
    price: "$399/month",
    features: ["All Basic Care Features", "Family Doctor Assignment", "Specialist Consultations", "Preventive Care Programs"],
  },
  {
    name: "Premium Care",
    price: "Custom",
    features: ["Comprehensive Coverage", "Priority Appointments", "Executive Health Program", "Personal Health Concierge"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-neon text-black font-medium mb-4">
            Insurance Plans
          </span>
          <h2 className="text-3xl font-bold mb-4">Choose Your Care Plan</h2>
          <p className="text-muted-foreground">
            Select the perfect healthcare plan for you and your family
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-xl p-8 bg-card border transition-all duration-300 hover:border-neon"
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-neon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-neon text-black hover:bg-neon/90">
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}