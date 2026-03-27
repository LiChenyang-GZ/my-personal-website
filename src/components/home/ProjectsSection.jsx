import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const ProjectsSection = ({ projects, onSelectProject }) => (
  <section id="projects" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
    <ScrollReveal>
      <SectionHeader eyebrow="Projects" title="Selected projects" />
    </ScrollReveal>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ScrollReveal key={project.title}>
          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--line)] bg-[rgba(255,251,246,0.88)] text-left shadow-[0_18px_45px_rgba(88,58,34,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_rgba(88,58,34,0.14)]"
          >
            <div
              className="h-[190px] bg-cover bg-center"
              style={{ backgroundImage: `url("${project.image}")` }}
            />
            <div className="flex h-full flex-col p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[rgba(255,122,89,0.12)] px-3 py-1 text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-[var(--accent)]">
                  {project.status}
                </span>
                <span className="text-sm text-[var(--muted)]">{project.period}</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--line)] bg-white/75 px-3 py-1.5 text-xs font-bold transition duration-200 group-hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </button>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
