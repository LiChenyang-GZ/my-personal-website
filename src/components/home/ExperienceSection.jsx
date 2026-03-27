import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const ExperienceSection = ({ timelineItems }) => (
  <section id="experience" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
    <ScrollReveal>
      <SectionHeader eyebrow="Experience" title="Timeline" />
    </ScrollReveal>

    <div className="relative">
      <div className="absolute bottom-0 left-[18px] top-0 w-[2px] bg-[linear-gradient(180deg,rgba(255,122,89,0.34),rgba(31,27,24,0.08))] md:left-1/2 md:-translate-x-1/2" />
      {[...timelineItems].reverse().map((item, index) => (
        <ScrollReveal key={`${item.time}-${item.title}`}>
          <div
            className={`relative mb-6 flex pl-12 ${
              index % 2 === 0
                ? 'md:justify-start md:pr-[calc(50%+30px)]'
                : 'md:justify-end md:pl-[calc(50%+30px)]'
            }`}
          >
            <div className="absolute left-[10px] top-[1.6rem] h-4 w-4 rounded-full border-4 border-[var(--bg)] bg-[var(--accent)] md:left-1/2 md:-translate-x-1/2" />
            <div className="w-full rounded-[28px] border border-[var(--line)] bg-[rgba(255,251,246,0.88)] p-6 shadow-[0_18px_45px_rgba(88,58,34,0.08)]">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                {item.time}
              </p>
              <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
              <p className="mt-1 text-base text-[var(--muted)]">{item.subtitle}</p>
              <p className="mt-4 leading-7 text-[var(--muted)]">{item.detail}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[rgba(255,122,89,0.12)] px-3 py-1.5 text-sm font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
