const cases = [
  {
    title: "Recovery Journey",
    description:
      "After a successful cardiac procedure, John experienced a remarkable recovery and returned to his active lifestyle within months.",
  },
  {
    title: "Preventive Care Success",
    description:
      "Through our wellness program, Sarah identified and addressed potential health issues before they became serious concerns.",
  },
  {
    title: "Family Care",
    description:
      "The Thompson family found comprehensive care for all generations under one roof, from pediatrics to geriatric care.",
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="py-20 bg-muted">
      <div className="container">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-neon text-black font-medium mb-4">
            Patient Stories
          </span>
          <h2 className="text-2xl font-bold mb-4">
            Real Stories from Our Patients About Their Healthcare Journey
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
                Read full story
                <span className="text-neon">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}