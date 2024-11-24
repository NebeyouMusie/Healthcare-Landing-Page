export function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-neon text-black font-medium mb-4">
            About us
          </span>
          <h2 className="text-3xl font-bold mb-6">
            Committed to Excellence in Healthcare
          </h2>
          <p className="text-muted-foreground mb-8">
            With over 20 years of experience, our medical center has been providing exceptional healthcare services to our community. Our team of skilled professionals is dedicated to delivering personalized care with compassion and expertise.
          </p>
          <img
            src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg"
            alt="Our Medical Team"
            className="rounded-xl w-full object-cover h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}