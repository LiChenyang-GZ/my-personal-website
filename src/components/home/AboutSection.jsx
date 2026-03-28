import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const floatPositions = [
  'left-[2%] top-[12%]',
  'left-[80%] top-[10%]',
  'left-[84%] top-[38%]',
  'left-[76%] top-[72%]',
  'left-[8%] top-[74%]',
  'left-[2%] top-[42%]',
];

const driftVariants = [
  'animate-float-a',
  'animate-float-b',
  'animate-float-c',
  'animate-float-d',
  'animate-float-b',
  'animate-float-c',
];

const AboutSection = ({ aboutSkills, hoveredSkill, setHoveredSkill }) => (
  <section id="about" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
    <ScrollReveal>
      <SectionHeader eyebrow="About Me" title="What I focus on" />
    </ScrollReveal>

    <div className="relative min-h-[820px] overflow-hidden md:min-h-[820px]">
      <div className="absolute left-1/2 top-1/2 z-10 w-[720px] max-w-[calc(100%-120px)] min-w-0 -translate-x-1/2 -translate-y-1/2 rounded-[38px] border border-[var(--line)] bg-[rgba(255,251,246,0.94)] px-8 py-14 shadow-[0_28px_70px_rgba(88,58,34,0.12)] md:min-h-[420px]">
        <p className="text-center text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--accent)]">
          Profile
        </p>
        <div className="mx-auto mt-6 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <img src="./photo.png" alt="Christy Li" className="h-full w-full object-cover" />
        </div>
        <h3 className="mt-4 text-center text-5xl font-bold tracking-tight md:text-6xl">
          {hoveredSkill ? hoveredSkill.title : 'Christy Li'}
        </h3>
        <p className="mt-4 text-center text-2xl text-[var(--muted)]">
          {hoveredSkill
            ? hoveredSkill.label
            : 'Software engineer with web, cloud, and AI application experience'}
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xl leading-9 text-[var(--muted)]">
          {hoveredSkill
            ? hoveredSkill.description
            : 'I enjoy building practical software products with clean interfaces, reliable systems, and thoughtful use of AI where it genuinely improves the workflow.'}
        </p>
      </div>

      <div className="hidden md:block">
        {aboutSkills.map((skill, index) => (
          <div
            key={skill.label}
            className={`absolute ${floatPositions[index]} ${driftVariants[index]}`}
            style={{ animationDelay: `${index * -1.7}s` }}
          >
            <button
              type="button"
              onMouseEnter={() => setHoveredSkill(skill)}
              onFocus={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              onBlur={() => setHoveredSkill(null)}
              className={`whitespace-nowrap rounded-full border bg-[rgba(255,251,246,0.84)] px-5 py-3 font-bold shadow-[0_0_0_0_transparent] transition duration-200 hover:scale-105 ${
                hoveredSkill?.label === skill.label ? 'scale-105' : ''
              }`}
              style={{
                borderColor: `${skill.accent}66`,
                color: skill.accent,
                backgroundColor:
                  hoveredSkill?.label === skill.label ? `${skill.accent}12` : 'rgba(255,251,246,0.84)',
                boxShadow:
                  hoveredSkill?.label === skill.label ? `0 0 0 10px ${skill.accent}12` : undefined,
              }}
            >
              {skill.label}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3 md:hidden">
        {aboutSkills.map((skill) => (
          <button
            key={skill.label}
            type="button"
            onClick={() => setHoveredSkill(skill)}
            className={`rounded-full border px-4 py-2 font-semibold ${
              hoveredSkill?.label === skill.label
                ? 'border-[var(--accent)] bg-[rgba(255,122,89,0.12)] text-[var(--accent)]'
                : 'border-[var(--line-strong)] bg-white/60 text-[var(--ink)]'
            }`}
          >
            {skill.label}
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
