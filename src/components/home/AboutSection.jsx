/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const floatPositions = [
  'left-[2%] top-[8%]',
  'left-[82%] top-[6%]',
  'left-[88%] top-[34%]',
  'left-[84%] top-[76%]',
  'left-[6%] top-[78%]',
  'left-[0%] top-[40%]',
];

const driftVariants = [
  'animate-float-a',
  'animate-float-b',
  'animate-float-c',
  'animate-float-d',
  'animate-float-b',
  'animate-float-c',
];

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.02,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.38, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

const iconMap = {
  Frontend: (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M7 9h4M7 13h6M13.5 9h3.5" />
    </svg>
  ),
  'Full Stack': (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 7h10M7 12h10M7 17h10" />
      <rect x="5" y="4" width="14" height="16" rx="2" />
    </svg>
  ),
  Cloud: (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7.5 18h9.2a4 4 0 0 0 .2-8 5.6 5.6 0 0 0-11 1.5A3.4 3.4 0 0 0 7.5 18Z" />
      <path d="M9 15h6" />
    </svg>
  ),
  'AI Apps': (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
      <path d="M10 10h4v4h-4z" />
    </svg>
  ),
  Database: (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </svg>
  ),
  Testing: (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 4h6M12 4v7" />
      <path d="M8 11h8a3.5 3.5 0 0 1 0 7H8a3.5 3.5 0 0 1 0-7Z" />
      <path d="M9.5 14.5h5" />
    </svg>
  ),
};

const AboutSection = ({ aboutSkills, hoveredSkill, setHoveredSkill }) => (
  <section id="about" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
    <ScrollReveal>
      <SectionHeader eyebrow="About Me" title="What I focus on" />
    </ScrollReveal>

    <div className="relative min-h-[820px] overflow-visible md:min-h-[820px]">
      <div className="absolute left-1/2 top-1/2 z-10 h-[560px] w-[720px] max-w-[calc(100%-40px)] min-w-0 -translate-x-1/2 -translate-y-1/2 rounded-[38px] border border-[var(--line)] bg-[rgba(255,251,246,0.94)] px-6 py-10 shadow-[0_28px_70px_rgba(88,58,34,0.12)] md:h-[520px] md:max-w-[calc(100%-120px)] md:px-8 md:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={hoveredSkill?.label ?? 'default'}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex h-full flex-col"
          >
            <motion.div
              variants={itemVariants}
              className="mx-auto mt-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-lg"
            >
              {hoveredSkill ? (
                <div
                  className="flex h-full w-full items-center justify-center"
                  style={{ color: hoveredSkill.accent, backgroundColor: `${hoveredSkill.accent}12` }}
                  aria-hidden="true"
                >
                  {iconMap[hoveredSkill.label]}
                </div>
              ) : (
                <img
                  src="./photo.png"
                  alt="Christy Li"
                  className="h-full w-full rounded-full object-cover"
                />
              )}
            </motion.div>
            <motion.h3
              variants={itemVariants}
              className="mt-4 flex min-h-[3.25rem] items-center justify-center break-words px-2 text-center text-4xl font-bold leading-tight tracking-tight md:min-h-[4rem] md:text-5xl"
            >
              {hoveredSkill ? hoveredSkill.title : 'Christy Li'}
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="mt-4 flex min-h-[3.5rem] items-center justify-center px-2 text-center text-lg leading-relaxed text-[var(--muted)] md:text-2xl"
            >
              {hoveredSkill
                ? hoveredSkill.label
                : 'Software engineer with web, cloud, and AI application experience'}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-h-[208px] w-full max-w-2xl overflow-y-auto px-1 text-center text-base leading-8 text-[var(--muted)] md:mt-8 md:max-h-[224px] md:text-xl md:leading-9"
            >
              {hoveredSkill
                ? hoveredSkill.description
                : 'I enjoy building practical software products with clean interfaces, reliable systems, and thoughtful use of AI where it genuinely improves the workflow.'}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hidden md:block">
        {aboutSkills.map((skill, index) => (
          <motion.div
            key={skill.label}
            className={`absolute ${floatPositions[index]} ${driftVariants[index]} animate-fade-slide transition-all duration-500 ease-out`}
            style={{
              animationDelay: `${index * -1.7}s`,
              transitionDelay: `${index * 110}ms`,
            }}
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.18 + index * 0.08, duration: 0.45, ease: 'easeOut' }}
          >
            <button
              type="button"
              onMouseEnter={() => setHoveredSkill(skill)}
              onFocus={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              onBlur={() => setHoveredSkill(null)}
              className={`flex h-[64px] w-[170px] items-center justify-center overflow-hidden rounded-full border bg-[rgba(255,251,246,0.84)] px-4 py-3 text-center text-[1rem] font-bold leading-tight shadow-[0_0_0_0_transparent] transition duration-200 hover:scale-105 ${
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
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3 md:hidden">
        {aboutSkills.map((skill) => (
            <button
              key={skill.label}
              type="button"
              onClick={() => setHoveredSkill(skill)}
            className={`flex h-[56px] w-[164px] items-center justify-center overflow-hidden rounded-full border px-4 py-2 text-center text-sm font-semibold leading-tight ${
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
