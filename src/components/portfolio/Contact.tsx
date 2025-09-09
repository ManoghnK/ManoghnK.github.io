import { Mail, Linkedin, Github, Calendar, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:kandiraju.m@northeastern.edu',
      description: 'kandiraju.m@northeastern.edu'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/manoghn-kandiraju',
      description: 'Connect professionally',
      external: true
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/manoghn',
      description: 'View my code',
      external: true
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: 'Schedule Call',
      href: 'https://calendly.com/manoghn',
      description: 'Book a meeting',
      external: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="swiss-heading text-4xl md:text-5xl mb-6 fade-in-up">
            Let's Collaborate
          </h2>
          
          <p className="swiss-text text-lg mb-12 text-background/80 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Open for collaborations, innovative projects, and data-driven opportunities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="group p-6 rounded-lg border border-background/20 hover:border-background/40 transition-all hover:bg-background/5 fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-background/10 rounded-lg text-background group-hover:bg-background/20 transition-colors mb-3">
                    {link.icon}
                  </div>
                  <h3 className="font-medium mb-1 text-background group-hover:text-background/90 transition-colors flex items-center gap-1">
                    {link.label}
                    {link.external && <ArrowUpRight className="w-4 h-4" />}
                  </h3>
                  <p className="text-sm text-background/70 group-hover:text-background/80 transition-colors">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-background/20 pt-8 fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="swiss-text text-background/60">
              © 2024 Manoghn Kandiraju. Built with modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;