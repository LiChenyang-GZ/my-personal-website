import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About', sectionId: 'about' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'GitHub', sectionId: 'github' },
  { label: 'Contact', sectionId: 'contact' },
];

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(() => scrollToSection(sectionId), 100);
      return;
    }

    scrollToSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(248,241,232,0.78)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="font-display text-xl font-bold tracking-tight"
          >
            Christy Li
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                type="button"
                onClick={() => handleNavClick(item.sectionId)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--ink)]"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <Outlet />
    </div>
  );
};

export default Layout;
