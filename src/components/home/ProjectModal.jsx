const ProjectModal = ({ project, onClose }) => {
  if (!project) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/45 px-4 py-8 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div className="relative z-10 w-full max-w-4xl rounded-[32px] border border-black/10 bg-[rgba(255,251,246,0.98)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-xl text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--ink)]"
        >
          ×
        </button>

        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start">
          <div className="h-16 w-16 rounded-[20px] border border-[var(--line)] bg-[rgba(201,168,118,0.08)]" />
          <div className="flex-1">
            <h3 className="text-4xl font-bold tracking-tight">{project.title}</h3>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
              <span>{project.period}</span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700">
                {project.status}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-[var(--line)] bg-white/65 p-5 text-lg leading-8 text-[var(--muted)]">
          {project.details}
        </div>

        <div className="mt-8">
          <h4 className="text-2xl font-semibold">Tech Stack</h4>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[rgba(111,148,232,0.24)] bg-white/75 px-4 py-2 text-sm font-semibold text-sky-700 transition duration-200 hover:scale-110"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center rounded-2xl bg-[var(--accent)] px-5 py-3 font-semibold text-white transition hover:-translate-y-px hover:shadow-lg"
          >
            View project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
