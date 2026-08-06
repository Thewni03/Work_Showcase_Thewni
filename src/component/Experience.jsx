export default function Experience({ experience, education }) {
    return (
      <section id="experience" className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display font-bold text-3xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue nb-border inline-block" />
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((job, i) => (
                <div key={i} className="bg-white nb-border nb-shadow-sm p-4">
                  <p className="font-mono text-xs text-ink/60 mb-1">
                    {job.period}
                  </p>
                  <h3 className="font-display font-bold text-lg">
                    {job.role} · {job.company}
                  </h3>
                  <p className="text-sm mt-1">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
  
          <div>
            <h2 className="font-display font-bold text-3xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-coral nb-border inline-block" />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((ed, i) => (
                <div key={i} className="bg-white nb-border nb-shadow-sm p-4">
                  <p className="font-mono text-xs text-ink/60 mb-1">
                    {ed.period}
                  </p>
                  <h3 className="font-display font-bold text-lg">
                    {ed.degree}
                  </h3>
                  <p className="text-sm">{ed.institution}</p>
                  {ed.notes && (
                    <p className="text-sm mt-1 text-ink/70">{ed.notes}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  