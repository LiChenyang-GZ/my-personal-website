import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const aboutSkills = [
  {
    label: 'Frontend',
    title: 'Frontend Development',
    description:
      'Building clear, responsive interfaces with React, Next.js, TypeScript, and interaction design that feels deliberate.',
    accent: '#ff7a59',
  },
  {
    label: 'Full Stack',
    title: 'Full Stack Engineering',
    description:
      'Working across UI, backend services, APIs, state management, and product logic to ship useful software.',
    accent: '#8b5cf6',
  },
  {
    label: 'Cloud',
    title: 'Cloud and Deployment',
    description:
      'Using AWS services such as Lambda, SNS, S3, EC2, and Aurora MySQL for scalable and production-minded systems.',
    accent: '#f59e0b',
  },
  {
    label: 'AI Apps',
    title: 'AI Application Development',
    description:
      'Applying LangChain, ChatGLM3, and retrieval workflows to build practical tools instead of one-off demos.',
    accent: '#ec4899',
  },
  {
    label: 'Database',
    title: 'Database Systems',
    description:
      'Working with PostgreSQL, Firebase, Supabase, SQL, schema design, and data flows that support real features.',
    accent: '#14b8a6',
  },
  {
    label: 'Testing',
    title: 'Testing and Quality',
    description:
      'Using Playwright, Jest, and test-oriented workflows to make software more reliable and maintainable.',
    accent: '#38bdf8',
  },
];

const introMessages = [
  'Software engineer building modern web products.',
  'AI application developer focused on practical systems.',
  'Interested in clean interfaces, cloud workflows, and product-minded engineering.',
];

const tickerSkills = [
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'Next.js',
  'Node.js',
  'SQL',
  'PostgreSQL',
  'Tailwind CSS',
  'Spring Boot',
  'AWS',
  'Firebase',
  'Supabase',
  'Docker',
  'Playwright',
  'Jest',
  'LangChain',
];

const projects = [
  {
    title: 'Blotz Task',
    period: '07/2025 - Present',
    status: 'In Progress',
    summary:
      'A full-stack task management app spanning web and mobile-style interactions, designed around productivity and smooth UI behavior.',
    details:
      'Built a React + Next.js frontend with Zustand and Tailwind CSS, connected it to a .NET Core backend with SQL Server, and added features including drag calendar views, subtasks sheets, Lottie-based AI interactions, swipe actions, and a points-based progress system.',
    tech: ['React', 'Next.js', 'TypeScript', 'Zustand', 'Tailwind CSS', '.NET Core'],
    image: './personal-website.jpg',
    link: 'https://github.com/LiChenyang-GZ',
  },
  {
    title: 'Distributed E-commerce Platform',
    period: '10/2025',
    status: 'Course Project',
    summary:
      'A distributed commerce platform built to explore reliability, transaction consistency, and maintainable microservice architecture.',
    details:
      'Designed a Spring Boot + RabbitMQ + PostgreSQL system with separated store, bank, and delivery services. Implemented Outbox Pattern, Saga compensation, retry logic, and dead-letter queues, while keeping the Java backend layered and maintainable with JPA/Hibernate and DTO-based design.',
    tech: ['Java', 'Spring Boot', 'RabbitMQ', 'PostgreSQL', 'Saga', 'Microservices'],
    image: './B2YBooks Online Store.jpg',
  },
  {
    title: 'AWS Image Captioning Platform',
    period: '05/2025',
    status: 'Cloud Project',
    summary:
      'A cloud-native image processing platform built around scaling, automation, and service orchestration on AWS.',
    details:
      'Deployed a Flask app on auto-scaling EC2 instances behind an ALB, used Lambda and SNS for asynchronous caption generation, stored media on S3, managed relational data with Aurora MySQL, and tested performance and fault tolerance under load.',
    tech: ['AWS EC2', 'Lambda', 'SNS', 'S3', 'Aurora MySQL', 'Flask'],
    image: './web-dev.avif',
  },
  {
    title: 'BuildLess Internship',
    period: '08/2025 - Present',
    status: 'Internship',
    summary:
      'Interactive product work for a startup using React, Tailwind CSS, Firebase, and automated testing infrastructure.',
    details:
      'Implemented modular frontend features, validated behavior with the Firebase emulator suite, improved quality with Playwright and Jest, and worked closely with developers and the product owner through agile iteration.',
    tech: ['TypeScript', 'React', 'Tailwind CSS', 'Firebase', 'Playwright', 'Jest'],
    image: './web-dev.jpg',
  },
  {
    title: 'Onboarding AI Assistant',
    period: '2023',
    status: 'AI Application',
    summary:
      'An internal chatbot built to help automate onboarding and policy Q&A with retrieval-based AI support.',
    details:
      'Used LangChain, ChatGLM3, vector retrieval, and document chunking to create a Gradio-based assistant that answered employee questions and reduced repetitive HR support work.',
    tech: ['LangChain', 'ChatGLM3', 'Gradio', 'RAG'],
    image: './ConversationLLM.jpg',
  },
  {
    title: 'Personal Website',
    period: '2025',
    status: 'Portfolio',
    summary:
      'A personal website designed to present my work, experience, and technical direction with stronger visual hierarchy and interaction.',
    details:
      'This portfolio is being redesigned around a better first screen, a cleaner about module, smaller project cards with detail sheets, a more readable experience timeline, and a simpler letter-style contact section.',
    tech: ['React', 'Tailwind CSS', 'EmailJS', 'UI Design'],
    image: './web-dev.avif',
    link: 'https://lichenyang-gz.github.io/my-personal-website/',
  },
];

const timelineItems = [
  {
    time: '09/2018 - 06/2022',
    title: 'Bachelor of Business Administration',
    subtitle: 'Beijing Normal - Hong Kong Baptist University',
    detail:
      'Built the foundation in information systems, database management, algorithm design, and big data applications, graduating with Second Class Division I honors.',
    tags: ['Information Systems', 'Database', 'Algorithms'],
  },
  {
    time: '12/2021',
    title: 'Conference Publication',
    subtitle: 'ICEB 2021',
    detail:
      'Published research on user engagement in online communities during COVID-19, focused on sentiment analysis and online interaction patterns.',
    tags: ['Research', 'Publication', 'Sentiment Analysis'],
  },
  {
    time: '09/2022 - 04/2024',
    title: 'Algorithm Engineer',
    subtitle: 'Guangdong Create Environmental Technology Co., Ltd.',
    detail:
      'Worked on LLM applications, machine learning monitoring, water-quality warning models using Isolation Forest and LSTM, and computer vision systems based on YOLOv5.',
    tags: ['LLM', 'XGBoost', 'LSTM', 'YOLOv5'],
  },
  {
    time: '07/2024 - 09/2026',
    title: 'Master of Computer Science',
    subtitle: 'The University of Sydney',
    detail:
      'Focused on software architecture, distributed systems, cloud computing, advanced programming, and the engineering direction I want to take professionally.',
    tags: ['Architecture', 'Distributed Systems', 'Cloud'],
  },
  {
    time: '08/2025 - Present',
    title: 'Web Developer Internship',
    subtitle: 'BuildLess.online, Sydney',
    detail:
      'Built product features with React, Firebase, Tailwind CSS, Playwright, and Jest, with an emphasis on maintainability, testing, and product iteration.',
    tags: ['React', 'Firebase', 'Testing'],
  },
  {
    time: '09/2025 - Present',
    title: 'Technology Officer',
    subtitle: 'Skill Swap Club, The University of Sydney',
    detail:
      'Contributed to backend design with Spring Boot, supported the React frontend, and implemented APIs, role-based access, and participation workflows.',
    tags: ['Spring Boot', 'React', 'Supabase', 'Agile'],
  },
];

const ScrollReveal = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};

const SectionHeader = ({ eyebrow, title, body }) => (
  <div className="mb-10">
    <p className="section-eyebrow">{eyebrow}</p>
    <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">{title}</h2>
    {body && <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">{body}</p>}
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/45 px-4 py-8 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div className="relative z-10 w-full max-w-4xl rounded-[32px] border border-black/8 bg-[rgba(255,251,246,0.98)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:p-8">
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
            <h3 className="font-display text-4xl font-bold tracking-tight">{project.title}</h3>
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
          <h4 className="font-display text-2xl font-semibold">Tech Stack</h4>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[rgba(111,148,232,0.24)] bg-[rgba(255,255,255,0.75)] px-4 py-2 text-sm font-semibold text-sky-700 transition duration-200 hover:scale-110"
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
            className="mt-8 inline-flex items-center rounded-2xl bg-[var(--accent)] px-5 py-3 font-semibold text-white transition hover:translate-y-[-1px] hover:shadow-lg"
          >
            View project
          </a>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  const formRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [introIndex, setIntroIndex] = useState(0);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIntroIndex((current) => (current + 1) % introMessages.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    emailjs
      .sendForm(
        'service_nz04ena',
        'template_c6juujt',
        formRef.current,
        'JA5RlaOXygWBSKYJI'
      )
      .then(() => {
        setNotice('Your letter has been sent successfully.');
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: '',
        });
      })
      .catch(() => {
        setNotice('Failed to send the letter. Please try again later.');
      })
      .finally(() => {
        setSubmitting(false);
        window.setTimeout(() => setNotice(''), 4000);
      });
  };

  return (
    <>
      <main className="relative overflow-hidden pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(255,122,89,0.16),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(120,101,255,0.08),transparent_18%),radial-gradient(circle_at_30%_52%,rgba(255,210,180,0.16),transparent_20%)]" />

        <section id="home" className="mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center px-5 py-12 md:px-8">
          <div className="w-full">
            <ScrollReveal>
              <div className="max-w-4xl">
                <p className="hero-status">Available for internships & graduate roles · Sydney, AU</p>
                <h1 className="mt-6 font-display text-6xl font-bold leading-[0.9] tracking-tight md:text-[7.5rem]">
                  Web Developer
                  <br className="hidden md:block" />
                  <span className="text-[var(--accent)]"> & AI Builder</span>
                </h1>
                <div className="mt-7 min-h-[88px] max-w-3xl">
                  <p
                    key={introIndex}
                    className="hero-message animate-[fadeSlide_450ms_ease]"
                  >
                    {introMessages[introIndex]}
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/christy-li-8992a3320/"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-link hero-link-primary"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/LiChenyang-GZ"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-link"
                  >
                    GitHub
                  </a>
                  <a
                    href="./Resume-web.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-link"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="About Me"
              title="What I focus on"
              body=""
            />
          </ScrollReveal>

          <div className="about-stage">
            <div className="about-panel">
              <p className="section-eyebrow text-center">Profile</p>
              <h3 className="mt-4 text-center font-display text-5xl font-bold tracking-tight md:text-6xl">
                {hoveredSkill ? hoveredSkill.title : 'Christy Li'}
              </h3>
              <p className="mt-4 text-center text-2xl text-[var(--muted)]">
                {hoveredSkill ? hoveredSkill.label : 'Software engineer with web, cloud, and AI application experience'}
              </p>
              <p className="mx-auto mt-8 max-w-2xl text-center text-xl leading-9 text-[var(--muted)]">
                {hoveredSkill
                  ? hoveredSkill.description
                  : 'I enjoy building practical software products with clean interfaces, reliable systems, and thoughtful use of AI where it genuinely improves the workflow.'}
              </p>
            </div>

            <div className="orbit-shell hidden md:block">
              {aboutSkills.map((skill, index) => (
                <div
                  key={skill.label}
                  className={`float-item float-item-${index + 1}`}
                  style={{
                    '--float-delay': `${index * -1.7}s`,
                  }}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onFocus={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onBlur={() => setHoveredSkill(null)}
                    className={`orbit-chip ${hoveredSkill?.label === skill.label ? 'active' : ''}`}
                    style={{ '--chip-accent': skill.accent }}
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
                  className={`rounded-full border px-4 py-2 font-semibold ${hoveredSkill?.label === skill.label ? 'border-[var(--accent)] bg-[rgba(255,122,89,0.12)] text-[var(--accent)]' : 'border-[var(--line-strong)] bg-white/60 text-[var(--ink)]'}`}
                >
                  {skill.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Projects"
              title="Selected projects"
              body=""
            />
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ScrollReveal key={project.title}>
                <button type="button" onClick={() => setSelectedProject(project)} className="project-card">
                  <div
                    className="project-media"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  />
                  <div className="project-body">
                    <div className="flex items-center justify-between gap-3">
                      <span className="project-badge">{project.status}</span>
                      <span className="text-sm text-[var(--muted)]">{project.period}</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold">{project.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">{project.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span key={tech} className="project-tech">
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

        <section id="experience" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Experience"
              title="Timeline"
              body=""
            />
          </ScrollReveal>

          <div className="timeline-shell">
            {[...timelineItems].reverse().map((item, index) => (
              <ScrollReveal key={`${item.time}-${item.title}`}>
                <div className={`timeline-row ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                      {item.time}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold">{item.title}</h3>
                    <p className="mt-1 text-base text-[var(--muted)]">{item.subtitle}</p>
                    <p className="mt-4 leading-7 text-[var(--muted)]">{item.detail}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="timeline-tag">
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

        <section id="github" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="GitHub"
              title="Contribution graph"
              body=""
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="feature-panel p-6 md:p-8">
              <img
                src="https://ghchart.rshah.org/ff7a59/LiChenyang-GZ"
                alt="GitHub contribution graph"
                className="block w-full rounded-[22px] bg-white"
              />
            </div>
          </ScrollReveal>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Contact"
              title="Write me a letter"
              body=""
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="feature-panel p-6 md:p-10">
              <div className="letter-panel">
                <p className="text-lg leading-8 text-[var(--muted)]">Dear Christy,</p>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <input
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="letter-input"
                  />
                  <input
                    name="user_email"
                    type="email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                    className="letter-input"
                  />
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                    className="letter-input"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    placeholder="I would like to talk about..."
                    className="letter-input resize-none"
                  />
                  <p className="pt-2 text-lg leading-8 text-[var(--muted)]">Best regards,</p>
                  <div className="flex flex-col items-start justify-between gap-4 pt-4 md:flex-row md:items-center">
                    <p className="text-sm text-[var(--muted)]">
                      This message will be sent directly to my inbox through EmailJS.
                    </p>
                    <button type="submit" disabled={submitting} className="hero-link hero-link-primary disabled:cursor-not-allowed disabled:opacity-70">
                      {submitting ? 'Sending...' : 'Send letter'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {notice && (
          <div className="fixed bottom-24 right-5 z-[65] rounded-2xl border border-[var(--line)] bg-[rgba(255,251,246,0.96)] px-4 py-3 text-sm shadow-soft">
            {notice}
          </div>
        )}
      </main>

      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-black/5 bg-[rgba(248,241,232,0.94)] backdrop-blur-xl">
        <div className="overflow-hidden">
          <div className="ticker-track">
            {[...tickerSkills, ...tickerSkills, ...tickerSkills].map((skill, index) => (
              <span key={`${skill}-${index}`} className="ticker-item">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export default Home;
