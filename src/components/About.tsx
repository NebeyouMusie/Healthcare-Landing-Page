export function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-neon text-black font-medium mb-4">
            About us
          </span>
          <h2 className="text-3xl font-bold mb-6">
            Empowering Businesses Through Digital Innovation
          </h2>
          <p className="text-muted-foreground mb-8">
            We are a team of passionate digital marketers and tech enthusiasts dedicated to helping businesses thrive in the digital age. With years of experience and a proven track record, we deliver results that matter.
          </p>
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Our Team"
            className="rounded-xl w-full object-cover h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}