import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  location: string;
  duration: string;
  gpa?: string;
  courses: string[];
}

const Education = () => {
  const education: EducationItem[] = [
    {
      id: 'northeastern',
      institution: 'Northeastern University',
      degree: 'Master of Science in Data Analytics & Engineering',
      location: 'Boston, MA',
      duration: '2024 - Dec 2025 (Expected)',
      gpa: '3.7/4.0',
      courses: ['Data Mining', 'Natural Language Processing', 'Neural Networks', 'Big Data Analytics', 'Machine Learning']
    },
    {
      id: 'vit',
      institution: 'VIT University',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      location: 'Vellore, India',
      duration: '2019 - 2023',
      courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Computer Networks']
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="swiss-heading text-4xl md:text-5xl text-foreground text-center mb-16 fade-in-up">
            Education
          </h2>

          <div className="grid gap-8">
            {education.map((edu, index) => (
              <div 
                key={edu.id}
                className="swiss-card fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      
                      <div>
                        <h3 className="swiss-heading text-xl font-semibold text-foreground mb-1">
                          {edu.institution}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {edu.degree}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.duration}
                          </div>
                          {edu.gpa && (
                            <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                              GPA: {edu.gpa}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-1">
                    <h4 className="font-semibold text-foreground mb-3">Relevant Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span 
                          key={i}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded border border-border"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
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

export default Education;