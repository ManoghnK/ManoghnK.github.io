import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  metrics: string;
  githubUrl: string;
  tags: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 'synthai',
      title: 'SynthAI',
      description: 'Automated educational content generator using advanced NLP models',
      metrics: '95% lesson coherence, 80% less manual work',
      githubUrl: 'https://github.com/manoghn/synthai',
      tags: ['NLP', 'Education', 'Automation', 'AI']
    },
    {
      id: 'research-critique',
      title: 'Automated Research Paper Critique',
      description: 'Fine-tuned NLP models for academic paper analysis and critique generation',
      metrics: '78% precision on critique classification',
      githubUrl: 'https://github.com/manoghn/research-critique',
      tags: ['NLP', 'Academic', 'Machine Learning', 'Classification']
    },
    {
      id: 'medbud',
      title: 'Medbud – Mental Health Assistant',
      description: 'CNN-LSTM based emotion forecasting system for mental health support',
      metrics: '+25% consistency in emotion prediction',
      githubUrl: 'https://github.com/manoghn/medbud',
      tags: ['Healthcare', 'Deep Learning', 'CNN-LSTM', 'Emotion AI']
    },
    {
      id: 'anomaly-detection',
      title: 'Real-time Anomaly Detection',
      description: 'System for detecting anomalies in streaming data using ML algorithms',
      metrics: '92% accuracy in real-time detection',
      githubUrl: 'https://github.com/manoghn/anomaly-detection',
      tags: ['Real-time', 'Anomaly Detection', 'Streaming', 'ML']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="swiss-heading text-4xl md:text-5xl text-foreground text-center mb-16 fade-in-up">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="swiss-card group fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="swiss-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  </div>
                  
                  <p className="swiss-text text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-primary">
                      {project.metrics}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;