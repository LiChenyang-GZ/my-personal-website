import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const GithubSection = () => (
  <section id="github" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
    <ScrollReveal>
      <SectionHeader eyebrow="GitHub" title="Contribution graph" />
    </ScrollReveal>

    <ScrollReveal>
      <div className="rounded-[34px] border border-[var(--line)] bg-[rgba(255,251,246,0.9)] p-6 shadow-[0_24px_60px_rgba(88,58,34,0.1)] md:p-8">
        <img
          src="https://ghchart.rshah.org/ff7a59/LiChenyang-GZ"
          alt="GitHub contribution graph"
          className="block w-full rounded-[22px] bg-white"
        />
      </div>
    </ScrollReveal>
  </section>
);

export default GithubSection;
