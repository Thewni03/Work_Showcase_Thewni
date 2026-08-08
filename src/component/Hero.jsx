import { motion } from "framer-motion";

export default function Hero({ profile }) {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-sm uppercase tracking-widest text-ink/60 mb-4"
      >
        {profile.role} — based in {profile.location}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display font-bold uppercase leading-[0.9] text-[15vw] sm:text-[8vw]"
      >
        {profile.name}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
      >
        <p className="max-w-md text-lg">{profile.tagline}</p>
        <a
          href="#projects"
          className="inline-block bg-yellow nb-border nb-shadow nb-press font-mono font-medium px-6 py-3 self-start"
        >
          View Projects →
        </a>
      </motion.div>
    </section>
  );
}
