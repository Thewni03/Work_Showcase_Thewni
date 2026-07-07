import { motion, AnimatePresence } from "framer-motion";

export default function ProjectWindow({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-ink/40 z-50 flex items-center justify-center px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-bg nb-border nb-shadow max-w-lg w-full"
          >

            <div className="nb-border border-t-0 border-x-0 flex items-center gap-2 px-4 py-3">
              <span className="w-3 h-3 rounded-full bg-coral nb-border" />
              <span className="w-3 h-3 rounded-full bg-yellow nb-border" />
              <span className="w-3 h-3 rounded-full bg-blue nb-border" />
              <span className="ml-auto font-mono text-xs uppercase tracking-widest text-ink/60">
                {project.id}
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-display font-bold text-3xl mb-3">
                {project.name}
              </h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-1 nb-border bg-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-yellow nb-border nb-shadow-sm nb-press px-4 py-2 font-mono text-sm"
                  >
                    Live Site ↗
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white nb-border nb-shadow-sm nb-press px-4 py-2 font-mono text-sm"
                  >
                    Repo ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
