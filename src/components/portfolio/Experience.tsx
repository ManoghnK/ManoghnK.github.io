import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  year: string;
  badges: string[];
  shortDescription: string;
  fullDescription: string;
}

const Experience = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 'atvs',
      company: 'American Tech Vision Solutions',
      role: 'Data Analyst',
      year: '2024',
      badges: ['+20% accuracy', 'Predictive insights'],
      shortDescription: 'Enhanced predictive models and automated reporting systems',
      fullDescription: 'Developed YOLO models for computer vision tasks, implemented anomaly detection systems, created Monte Carlo simulations for risk analysis, and built comprehensive reporting dashboards that improved decision-making processes.'
    },
    {
      id: 'rite',
      company: 'Rite Software',
      role: 'Full Stack Developer & Analyst Intern',
      year: '2023',
      badges: ['40% faster pipelines', 'Automated dashboards'],
      shortDescription: 'Built automated HR systems and optimized data processing',
      fullDescription: 'Automated HR dashboard creation reducing manual work by 40%, optimized SQL queries for better performance, implemented NLP solutions for compliance monitoring, and developed full-stack applications with modern frameworks.'
    },
    {
      id: 'tecdatum',
      company: 'Tecdatum',
      role: 'Software Developer Intern',
      year: '2022',
      badges: ['+20% recognition rate', 'OCR optimization'],
      shortDescription: 'Improved OCR systems and performance analysis',
      fullDescription: 'Conducted OCR benchmarking studies, implemented OpenCV preprocessing pipelines that improved character recognition rates by 20%, performed comprehensive system performance analysis, and contributed to computer vision optimization projects.'
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="swiss-heading text-4xl md:text-5xl text-foreground text-center mb-16 fade-in-up">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="swiss-card fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => toggleExpand(exp.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="swiss-heading text-xl font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                        {exp.year}
                      </span>
                    </div>
                    
                    <p className="text-primary font-medium mb-3">{exp.role}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.badges.map((badge, i) => (
                        <span 
                          key={i}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    
                    <p className="swiss-text text-muted-foreground mb-4">
                      {exp.shortDescription}
                    </p>
                    
                    {expandedId === exp.id && (
                      <div className="border-t border-border pt-4 mt-4">
                        <p className="swiss-text text-muted-foreground leading-relaxed">
                          {exp.fullDescription}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="ml-4 flex-shrink-0">
                    {expandedId === exp.id ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;