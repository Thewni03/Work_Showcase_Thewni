import { useState } from "react";
import Folder from "./Folder";
import ProjectWindow from "./ProjectWindow";

export default function Projects({ projects }) {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="font-display font-bold text-3xl mb-2 flex items-center gap-3">
        <span className="w-8 h-8 bg-yellow nb-border inline-block" />
        Selected Projects
      </h2>
      <p className="font-mono text-sm text-ink/60 mb-10">
        click a folder to open it
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 pt-6">
        {projects.map((project, i) => (
          <Folder
            key={project.id}
            project={project}
            index={i}
            onOpen={setActive}
          />
        ))}
      </div>

      <ProjectWindow project={active} onClose={() => setActive(null)} />
    </section>
  );
}
