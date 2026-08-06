export default function About({ about }) {
    return (
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display font-bold text-3xl mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-blue nb-border inline-block" />
          {about.heading}
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed">{about.body}</p>
      </section>
    );
  }
  