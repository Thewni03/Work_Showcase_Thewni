import { motion } from "framer-motion";

export default function Skills({ skills }) {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="font-display font-bold text-3xl mb-8 flex items-center gap-3">
        <span className="w-8 h-8 bg-coral nb-border inline-block" />
        Skills & Toolkit
      </h2>
      <div className="space-y-5 max-w-2xl">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between font-mono text-sm mb-1">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-4 bg-white nb-border">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full bg-yellow border-r-[3px] border-ink"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
