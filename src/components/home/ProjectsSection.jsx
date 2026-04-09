import { useState } from 'react';
/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const artStyles = [
  'from-[#ffe08a] to-[#ffd6c3]',
  'from-[#ffdbe8] to-[#ffcfe0]',
  'from-[#d7f2ef] to-[#cfe8ff]',
  'from-[#eadbff] to-[#ffe7bb]',
];

const solutionStyles = [
  'from-[#ffdbe8] to-[#f7c6e8]',
  'from-[#d4eef8] to-[#badcf3]',
  'from-[#f6dfd3] to-[#f2d1c3]',
  'from-[#ddd4ff] to-[#ead7ff]',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.48, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 18,
    scale: 0.98,
    filter: 'blur(4px)',
    transition: { duration: 0.24, ease: 'easeIn' },
  },
};

const ProjectsSection = ({ projects }) => {
  const [expandedProject, setExpandedProject] = useState(projects[0]?.title ?? null);
  const [expandedDesigns, setExpandedDesigns] = useState({});
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (cardKey) => {
    setFlippedCards((current) => ({
      ...current,
      [cardKey]: !current[cardKey],
    }));
  };

  const toggleDesignCards = (projectTitle) => {
    setExpandedDesigns((current) => ({
      ...current,
      [projectTitle]: !current[projectTitle],
    }));
  };

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
      <ScrollReveal>
        <SectionHeader eyebrow="Projects" title="My projects" />
      </ScrollReveal>

      <div className="space-y-8">
        {projects.map((project, projectIndex) => {
          const isExpanded = expandedProject === project.title;
          const designExpanded = Boolean(expandedDesigns[project.title]);

          return (
            <ScrollReveal key={project.title}>
              <div className="rounded-[34px] border border-[var(--line)] bg-[rgba(255,251,246,0.9)] p-6 shadow-[0_24px_60px_rgba(88,58,34,0.1)] md:p-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[rgba(255,122,89,0.12)] px-3 py-1 text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-[var(--accent)]">
                        {project.status}
                      </span>
                      <span className="text-sm font-medium text-[var(--muted)]">{project.period}</span>
                      <span className="text-sm font-medium text-[var(--muted)]">{project.focus}</span>
                    </div>

                    <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
                      {project.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-black/5 bg-white/80 px-3.5 py-1.5 text-sm font-semibold transition duration-200 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-full border border-[var(--line-strong)] bg-white/85 px-5 py-3 font-semibold transition duration-200 hover:-translate-y-px hover:bg-white"
                      >
                        View project
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedProject((current) =>
                          current === project.title ? null : project.title
                        )
                      }
                      className="inline-flex items-center rounded-full bg-[var(--accent)] px-5 py-3 font-semibold text-white transition duration-200 hover:-translate-y-px hover:bg-[#ff6c47]"
                    >
                      {isExpanded ? 'Hide details' : 'Show details'}
                    </button>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 28 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.42, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div
                        className={
                          project.cards.length >= 4
                            ? 'overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
                            : 'mx-auto max-w-[1180px]'
                        }
                      >
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className={
                            project.cards.length >= 4
                              ? 'flex min-w-max gap-4'
                              : `grid gap-4 ${
                                  project.cards.length <= 2
                                    ? 'md:grid-cols-2'
                                    : 'md:grid-cols-2 xl:grid-cols-3'
                                }`
                          }
                        >
                          {project.cards.map((card, cardIndex) => {
                            const cardKey = `${project.title}-${cardIndex}`;
                            const isFlippable = Boolean(card.media?.url);
                            const isFlipped = Boolean(flippedCards[cardKey]);

                            return (
                              <motion.article
                                key={card.title}
                                variants={cardVariants}
                                className={`flex min-h-[340px] flex-col overflow-hidden rounded-[28px] border border-[rgba(39,31,27,0.07)] bg-[rgba(255,253,250,0.99)] shadow-[0_8px_20px_rgba(88,58,34,0.035)] ${
                                  project.cards.length >= 4 ? 'w-[340px] shrink-0' : 'w-full'
                                }`}
                              >
                                <div
                                  className={`h-3 w-full bg-gradient-to-r ${artStyles[(projectIndex + cardIndex) % artStyles.length]}`}
                                />

                                <button
                                  type="button"
                                  onClick={() => (isFlippable ? toggleCard(cardKey) : null)}
                                  className={`relative flex h-full w-full flex-col text-left ${
                                    isFlippable ? 'cursor-pointer' : 'cursor-default'
                                  }`}
                                  aria-pressed={isFlippable ? isFlipped : undefined}
                                >
                                  <div
                                    className={`relative flex h-full w-full flex-col transition-transform duration-500 [transform-style:preserve-3d] ${
                                      isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                    }`}
                                  >
                                    <div className="absolute inset-0 flex h-full w-full flex-col p-5 [backface-visibility:hidden]">
                                      <div className="min-h-[96px]">
                                        <h4 className="text-[1.55rem] font-bold leading-tight tracking-tight text-[var(--ink)]">
                                          {card.title}
                                        </h4>
                                      </div>

                                      {card.description ? (
                                        <p className="text-[0.98rem] leading-7 text-[var(--muted)]">
                                          {card.description}
                                        </p>
                                      ) : (
                                        <>
                                          <div className="min-h-[104px]">
                                            <p className="text-[0.98rem] leading-7 text-[var(--muted)]">
                                              {card.problem}
                                            </p>
                                          </div>

                                          <div
                                            className={`mt-4 rounded-[22px] bg-gradient-to-br ${solutionStyles[(projectIndex + cardIndex) % solutionStyles.length]} p-4`}
                                          >
                                            <p className="text-[0.94rem] leading-7 text-[var(--ink)]">
                                              <span className="mr-1">💡</span>
                                              {card.solution}
                                            </p>
                                          </div>
                                        </>
                                      )}

                                      {isFlippable && !isFlipped && (
                                        <span className="mt-auto inline-flex w-fit items-center rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                                          Tap to view
                                        </span>
                                      )}
                                    </div>

                                    <div className="absolute inset-0 flex h-full w-full flex-col p-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                      {isFlippable ? (
                                        <img
                                          src={card.media.url}
                                          alt={card.media.alt ?? `${card.title} preview`}
                                          className="h-full w-full object-cover"
                                          loading="lazy"
                                        />
                                      ) : null}
                                    </div>
                                  </div>
                                </button>
                              </motion.article>
                            );
                          })}
                        </motion.div>
                      </div>

                      {project.designCards?.length ? (
                        <div className="mt-6">
                          <button
                            type="button"
                            onClick={() => toggleDesignCards(project.title)}
                            className="text-sm font-medium text-blue-600"
                          >
                            {designExpanded ? 'Hide System Design ↑' : 'View System Design →'}
                          </button>

                          <AnimatePresence initial={false}>
                            {designExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <motion.div
                                  variants={containerVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  className={`grid gap-4 ${
                                    project.designCards.length <= 2
                                      ? 'md:grid-cols-2'
                                      : project.designCards.length === 3
                                        ? 'md:grid-cols-2 xl:grid-cols-3'
                                        : 'md:grid-cols-2 2xl:grid-cols-4'
                                  }`}
                                >
                                  {project.designCards.map((card, cardIndex) => (
                                    <motion.article
                                      key={card.title}
                                      variants={cardVariants}
                                      className="flex min-h-[320px] flex-col overflow-hidden rounded-[28px] border border-[rgba(39,31,27,0.07)] bg-[rgba(255,253,250,0.99)] shadow-[0_8px_20px_rgba(88,58,34,0.035)]"
                                    >
                                      <div
                                        className={`h-3 w-full bg-gradient-to-r ${artStyles[(projectIndex + cardIndex + 1) % artStyles.length]}`}
                                      />

                                      <div className="flex h-full flex-col p-5">
                                        <div className="min-h-[108px]">
                                          <h4 className="text-[1.45rem] font-bold leading-tight tracking-tight text-[var(--ink)]">
                                            {card.title}
                                          </h4>
                                        </div>

                                        <div className="min-h-[104px]">
                                          <p className="text-[0.98rem] leading-7 text-[var(--muted)]">
                                            {card.problem}
                                          </p>
                                        </div>

                                        <div
                                          className={`mt-4 rounded-[22px] bg-gradient-to-br ${solutionStyles[(projectIndex + cardIndex + 1) % solutionStyles.length]} p-4`}
                                        >
                                          <p className="text-[0.94rem] leading-7 text-[var(--ink)]">
                                            <span className="mr-1">💡</span>
                                            {card.solution}
                                          </p>
                                        </div>

                                        <p className="mt-auto pt-4 text-xs leading-6 text-[var(--muted)]">
                                          Trade-off: {card.tradeoff}
                                        </p>
                                      </div>
                                    </motion.article>
                                  ))}
                                </motion.div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : null}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
