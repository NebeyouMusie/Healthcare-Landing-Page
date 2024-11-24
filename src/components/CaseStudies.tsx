const cases = [
  {
    title: "Local Restaurant",
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in bookings and a 35% increase in sales.",
  },
  {
    title: "B2B Software",
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key industry terms.",
  },
  {
    title: "Retail Chain",
    description:
      "For a regional retail chain, we created a social media marketing campaign that generated a 200% increase in engagement.",
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="py-20 bg-muted">
      <div className="container">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-neon text-black font-medium mb-4">
            Case study
          </span>
          <h2 className="text-2xl font-bold mb-4">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            Through Our Case Studies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((case_, index) => (
            <div
              key={index}
              className="bg-primary text-primary-foreground rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4">{case_.title}</h3>
              <p className="text-sm mb-4">{case_.description}</p>
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