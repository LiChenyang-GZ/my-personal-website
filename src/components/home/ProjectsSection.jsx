import { useState } from 'react';
/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { Shield, GitBranch, Lock, Bell, Layers, Network, Bot, Gift,
          TrendingUp, Workflow, Unlink, GitMerge, Inbox, RefreshCw,
          LayoutGrid, Scissors, Anchor, Search, FileText, Users } from 'lucide-react';

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

const ICONS = {
   Shield, GitBranch, Lock, Bell, Layers, Network, Bot, Gift,
   TrendingUp, Workflow, Unlink, GitMerge, Inbox, RefreshCw,
   LayoutGrid, Scissors, Anchor, Search, FileText, Users,
 };

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

const DecisionRow = ({ card }) => {
  const [showSolution, setShowSolution] = useState(false);
  const [showTradeoff, setShowTradeoff] = useState(false);
  const Icon = ICONS[card.icon];

  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex w-full flex-col overflow-hidden rounded-[24px] border border-[var(--line)] bg-[rgba(255,251,246,0.9)] p-6 shadow-[0_8px_18px_rgba(88,58,34,0.03)] transition-all duration-300 hover:shadow-md md:p-8"
    >
      {/* Title */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(255,122,89,0.1)] text-[var(--accent)] border border-[rgba(255,122,89,0.2)]">
          {card.icon ? (
            <Icon className="w-5 h-5 text-current" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          )}
        </div>
        <h4 className="text-[1.15rem] font-bold leading-tight tracking-tight text-[var(--ink)]">
          {card.title}
        </h4>
      </div>

      {/* Content Flow */}
      <div className="flex flex-col md:flex-row md:items-stretch gap-4 lg:gap-6">
        
        {/* 1. Problem */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-widest text-[var(--accent)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            The Challenge
          </div>
          <p className="text-[0.92rem] leading-relaxed text-[var(--ink)]/80">
            {card.problem}
          </p>
        </div>

        {/* --- Flow Line 1 --- */}
        <div className="flex justify-center md:items-center text-[var(--accent)] opacity-40">
           {/* Desktop Line */}
           <svg className="hidden md:block w-10 lg:w-16 h-6" viewBox="0 0 64 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M4 12 h48" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="4 4" />
             <motion.path 
               d="M4 12 h48 l-8 -8 M52 12 l-8 8" 
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: showSolution ? 1 : 0, opacity: showSolution ? 1 : 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
             />
           </svg>
           {/* Mobile Line */}
           <svg className="md:hidden w-6 h-8" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M12 4 v16" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="4 4" />
             <motion.path 
               d="M12 4 v16 l-6 -6 M12 20 l6 -6" 
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: showSolution ? 1 : 0, opacity: showSolution ? 1 : 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
             />
           </svg>
        </div>

        {/* 2. Solution */}
        <div 
          className="relative flex-1 flex flex-col gap-3 cursor-pointer"
          onMouseEnter={() => setShowSolution(true)}
          onTouchStart={() => setShowSolution(true)}
        >
          <motion.div 
            initial={false}
            animate={{ filter: showSolution ? "blur(0px)" : "blur(4px)", opacity: showSolution ? 1 : 0.4 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-3 select-none"
          >
            <div className="flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-widest text-[var(--ink)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)]">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              How I solved it
            </div>
            <p className="text-[0.92rem] leading-relaxed text-[var(--ink)]">
              {card.solution}
            </p>
          </motion.div>
        </div>

        {/* --- Flow Line 2 --- */}
        <div className="flex justify-center md:items-center text-[var(--ink)] opacity-30">
           {/* Desktop Line */}
           <svg className="hidden md:block w-10 lg:w-16 h-6" viewBox="0 0 64 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M4 12 h48" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="4 4" />
             <motion.path 
               d="M4 12 h48 l-8 -8 M52 12 l-8 8" 
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: showTradeoff ? 1 : 0, opacity: showTradeoff ? 1 : 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
             />
           </svg>
           {/* Mobile Line */}
           <svg className="md:hidden w-6 h-8" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M12 4 v16" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="4 4" />
             <motion.path 
               d="M12 4 v16 l-6 -6 M12 20 l6 -6" 
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: showTradeoff ? 1 : 0, opacity: showTradeoff ? 1 : 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
             />
           </svg>
        </div>

        {/* 3. Trade-off */}
        <div 
          className="relative flex-1 flex flex-col gap-3 cursor-pointer"
          onMouseEnter={() => setShowTradeoff(true)}
          onTouchStart={() => setShowTradeoff(true)}
        >
          <motion.div 
            initial={false}
            animate={{ filter: showTradeoff ? "blur(0px)" : "blur(4px)", opacity: showTradeoff ? 1 : 0.35 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-3 select-none"
          >
            <div className="flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-widest text-[var(--muted)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 3h5v5"></path>
                <path d="M8 3H3v5"></path>
                <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path>
                <path d="m15 9 6-6"></path>
              </svg>
              Trade-offs
            </div>
            <p className="text-[0.88rem] leading-relaxed text-[var(--muted)]">
              {card.tradeoff}
            </p>
          </motion.div>
        </div>

      </div>
    </motion.article>
  );
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
                                className={`flex min-h-[312px] flex-col overflow-hidden rounded-[28px] border border-[rgba(39,31,27,0.07)] bg-[rgba(255,253,250,0.98)] shadow-[0_8px_18px_rgba(88,58,34,0.03)] ${
                                  project.cards.length >= 4 ? 'w-[340px] shrink-0' : 'w-full'
                                }`}
                              >
                                <div
                                  className={`h-2 w-full bg-gradient-to-r ${artStyles[(projectIndex + cardIndex) % artStyles.length]}`}
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
                                      <div className="min-h-[78px]">
                                        <h4 className="text-[1.32rem] font-bold leading-tight tracking-tight text-[var(--ink)]">
                                          {card.title}
                                        </h4>
                                      </div>

                                      {card.description ? (
                                        <p className="text-[0.95rem] leading-7 text-[var(--muted)]">
                                          {card.description}
                                        </p>
                                      ) : (
                                        <>
                                          <div className="min-h-[84px]">
                                            <p className="text-[0.95rem] leading-7 text-[var(--muted)]">
                                              {card.problem}
                                            </p>
                                          </div>

                                          <div
                                            className={`mt-3 rounded-[20px] bg-gradient-to-br ${solutionStyles[(projectIndex + cardIndex) % solutionStyles.length]} p-4`}
                                          >
                                            <p className="text-[0.92rem] leading-7 text-[var(--ink)]">
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
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                              System Design Decisions
                            </h4>
                            <button
                              type="button"
                              onClick={() => toggleDesignCards(project.title)}
                              className="text-sm font-medium text-blue-600 transition hover:underline"
                            >
                              {designExpanded ? 'Hide Details ↑' : 'View System Design →'}
                            </button>
                          </div>

                          <AnimatePresence initial={false}>
                            {designExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <motion.div
                                  variants={containerVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  className="flex w-full flex-col gap-6"
                                >
                                  {project.designCards.map((card) => (
                                    <DecisionRow key={card.title} card={card} />
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
