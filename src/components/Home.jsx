import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  aboutSkills,
  introMessages,
  projects,
  tickerSkills,
  timelineItems,
} from '../data/portfolioData';
import HeroSection from './home/HeroSection';
import AboutSection from './home/AboutSection';
import ProjectsSection from './home/ProjectsSection';
import ProjectModal from './home/ProjectModal';
import ExperienceSection from './home/ExperienceSection';
import GithubSection from './home/GithubSection';
import ContactSection from './home/ContactSection';
import TickerBar from './home/TickerBar';

const Home = () => {
  const formRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [introIndex, setIntroIndex] = useState(0);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
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

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

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

        <HeroSection introIndex={introIndex} introMessages={introMessages} />
        <AboutSection
          aboutSkills={aboutSkills}
          hoveredSkill={hoveredSkill}
          setHoveredSkill={setHoveredSkill}
        />
        <ProjectsSection projects={projects} onSelectProject={setSelectedProject} />
        <ExperienceSection timelineItems={timelineItems} />
        <GithubSection />
        <ContactSection
          formRef={formRef}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          submitting={submitting}
        />

        {notice && (
          <div className="fixed bottom-24 right-5 z-[65] rounded-2xl border border-[var(--line)] bg-[rgba(255,251,246,0.96)] px-4 py-3 text-sm shadow-soft">
            {notice}
          </div>
        )}
      </main>

      <TickerBar tickerSkills={tickerSkills} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export default Home;
