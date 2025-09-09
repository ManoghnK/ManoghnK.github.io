import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-inter font-semibold text-xl text-foreground">
            MK
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="mailto:kandiraju.m@northeastern.edu"
              className="btn-swiss-outline text-sm"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;