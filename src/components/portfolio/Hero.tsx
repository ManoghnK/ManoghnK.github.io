import { Github, Linkedin, Mail, Calendar, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen hero-bg flex items-center justify-center relative">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 fade-in-up">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">MK</span>
            </div>
          </div>

          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="swiss-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Manoghn Kandiraju
            </h1>
          </div>

          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="swiss-text text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Master of Science in Data Analytics and Engineering • AI Enthusiast
            </h2>
          </div>

          <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="swiss-text text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Building intelligent, data-driven solutions with expertise in AI, analytics, and cloud technologies.
            </p>
          </div>

          <div className="fade-in-up flex flex-wrap gap-4 justify-center" style={{ animationDelay: '0.8s' }}>
            <a
              href="/resume.pdf"
              download="Manoghn_Kandiraju_Resume.pdf"
              className="btn-swiss-primary inline-flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume (PDF)
            </a>
            
            <a
              href="https://github.com/manoghn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-swiss-outline inline-flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
            
            <a
              href="https://linkedin.com/in/manoghn-kandiraju"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-swiss-outline inline-flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            
            <a
              href="mailto:kandiraju.m@northeastern.edu"
              className="btn-swiss-outline inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Email Me
            </a>
            
            <a
              href="https://calendly.com/manoghn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-swiss-outline inline-flex items-center gap-2"
            >
              <Calendar size={20} />
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;