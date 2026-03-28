/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
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

const AboutSection = ({ aboutSkills, hoveredSkill, setHoveredSkill }) => (
  <section id="about" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
    <ScrollReveal>
      <SectionHeader eyebrow="About Me" title="What I focus on" />
    </ScrollReveal>

    <div className="relative min-h-[820px] overflow-hidden md:min-h-[820px]">
      <div className="absolute left-1/2 top-1/2 z-10 w-[720px] max-w-[calc(100%-120px)] min-w-0 -translate-x-1/2 -translate-y-1/2 rounded-[38px] border border-[var(--line)] bg-[rgba(255,251,246,0.94)] px-8 py-14 shadow-[0_28px_70px_rgba(88,58,34,0.12)] md:min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={hoveredSkill?.label ?? 'default'}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.p
              variants={itemVariants}
              className="text-center text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--accent)]"
            >
              Profile
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mx-auto mt-6 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg"
            >
              <img src="./photo.png" alt="Christy Li" className="h-full w-full object-cover" />
            </motion.div>
            <motion.h3
              variants={itemVariants}
              className="mt-4 text-center text-5xl font-bold tracking-tight md:text-6xl"
            >
              {hoveredSkill ? hoveredSkill.title : 'Christy Li'}
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-center text-2xl text-[var(--muted)]"
            >
              {hoveredSkill
                ? hoveredSkill.label
                : 'Software engineer with web, cloud, and AI application experience'}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-8 max-w-2xl text-center text-xl leading-9 text-[var(--muted)]"
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
            className={`flex min-h-[52px] min-w-[140px] items-center justify-center rounded-full border px-4 py-2 text-center font-semibold leading-tight ${
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
