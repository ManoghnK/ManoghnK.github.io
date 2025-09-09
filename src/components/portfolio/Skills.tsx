import { Code, Cloud, BarChart3, Brain } from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 'languages',
      title: 'Languages & Frameworks',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'Java', 'R', 'SQL', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'React', 'Node.js']
    },
    {
      id: 'cloud',
      title: 'Cloud & Big Data',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['AWS', 'Google Cloud', 'Hadoop', 'Snowflake', 'Docker', 'Kubernetes', 'Apache Spark']
    },
    {
      id: 'visualization',
      title: 'Visualization & Analytics',
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ['Tableau', 'PowerBI', 'Excel', 'Matplotlib', 'Plotly', 'D3.js', 'Grafana']
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Transformers', 'LLMs', 'NLP', 'OpenCV', 'Computer Vision', 'Deep Learning', 'MLOps']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="swiss-heading text-4xl md:text-5xl text-foreground text-center mb-16 fade-in-up">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.id}
                className="swiss-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="swiss-heading text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-background border border-border text-foreground px-2 py-1 rounded hover:bg-primary/5 hover:border-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;