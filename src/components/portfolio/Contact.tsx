import { Mail, Linkedin, Github, ArrowUpRight, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      href: 'https://www.linkedin.com/in/manoghnkandiraju/',
      description: 'Connect professionally',
      external: true
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/ManoghnK',
      description: 'View my code',
      external: true
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:kandiraju.m@northeastern.edu?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="group p-6 rounded-lg transition-all fade-in-up"
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

            <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-background mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder-background/60 focus:outline-none focus:border-background/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-background mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder-background/60 focus:outline-none focus:border-background/40 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-background mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder-background/60 focus:outline-none focus:border-background/40 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-background/20 hover:bg-background/30 text-background font-medium py-3 px-6 rounded-lg border border-background/30 hover:border-background/50 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
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