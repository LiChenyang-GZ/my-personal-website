import ScrollReveal from './ScrollReveal';

const HeroSection = ({ introIndex, introMessages }) => (
  <section id="home" className="mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center px-5 py-12 md:px-8">
    <div className="w-full">
      <ScrollReveal>
        <div className="max-w-4xl">
          <p className="inline-flex items-center rounded-full border border-black/10 bg-[rgba(255,251,246,0.84)] px-4 py-2 text-[0.82rem] font-bold tracking-[0.06em] text-[#6f6760]">
            Available for internships & graduate roles · Sydney, AU
          </p>
          <h1 className="mt-6 text-6xl font-bold leading-[0.9] tracking-tight md:text-[7.5rem]">
            Web Developer
            <br className="hidden md:block" />
            <span className="text-[var(--accent)]"> & AI Builder</span>
          </h1>
          <div className="mt-7 min-h-[88px] max-w-3xl">
            <p key={introIndex} className="animate-fade-slide text-[1.45rem] leading-[1.8] text-[var(--muted)]">
              {introMessages[introIndex]}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/christy-li-8992a3320/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 font-bold text-white shadow-[0_16px_36px_rgba(255,122,89,0.24)] transition duration-200 hover:-translate-y-px hover:bg-[#ff6c47]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/LiChenyang-GZ"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/60 px-6 py-3 font-bold transition duration-200 hover:-translate-y-px hover:bg-white"
            >
              GitHub
            </a>
            <a
              href="./Resume-web.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/60 px-6 py-3 font-bold transition duration-200 hover:-translate-y-px hover:bg-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HeroSection;
