import { motion } from "framer-motion";

const colorMap = {
  yellow: "bg-yellow",
  coral: "bg-coral",
  blue: "bg-blue",
};

//like on a desktop folders
const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export default function Folder({ project, index, onOpen }) {
  const rotation = rotations[index % rotations.length];
  const bg = colorMap[project.folderColor] || "bg-yellow";

  return (
    <motion.button
      onClick={() => onOpen(project)}
      whileHover={{ rotate: 0, y: -4 }}
      className={`text-left ${bg} nb-border nb-shadow ${rotation} p-5 transition-transform`}
    >
 
      <div className="w-14 h-3 bg-ink mb-3 -mt-8 ml-1" />
      <h3 className="font-display font-bold text-xl mb-1">{project.name}</h3>
      <p className="font-mono text-xs uppercase tracking-wide text-ink/70">
        {project.tech.join(" · ")}
      </p>
    </motion.button>
  );
}
