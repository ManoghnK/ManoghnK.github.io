const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                <div className="w-60 h-60 rounded-xl bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">MK</span>
                </div>
              </div>
            </div>

            <div className="fade-in-up">
              <h2 className="swiss-heading text-4xl md:text-5xl text-foreground mb-8">
                About Me
              </h2>
              
              <div className="swiss-text text-lg text-muted-foreground space-y-6 leading-relaxed">
                <p>
                  I'm a data enthusiast pursuing a Master of Science in Data Analytics and Engineering at Northeastern University. 
                  With a background in Computer Science from VIT, I specialize in data analytics, machine learning, and software development.
                </p>
                
                <p>
                  I bring hands-on experience with Python, Java, R, SQL, cloud technologies, and AI frameworks — applying them in 
                  real-world projects across anomaly detection, automation, and intelligent systems.
                </p>

                <div className="mt-8 p-6 rounded-lg bg-muted/50 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">What I Bring to Different Audiences:</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-primary">For Recruiters:</strong>
                      <span className="text-muted-foreground ml-2">
                        Download my latest resume or reach out directly via LinkedIn/email.
                      </span>
                    </div>
                    
                    <div>
                      <strong className="text-primary">For CXOs & Tech Leaders:</strong>
                      <span className="text-muted-foreground ml-2">
                        Data-driven innovation • Scalable AI systems • Cross-functional collaboration.
                      </span>
                    </div>
                    
                    <div>
                      <strong className="text-primary">For Students & Aspirants:</strong>
                      <span className="text-muted-foreground ml-2">
                        Passionate about mentorship and sharing learnings with aspiring data scientists.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;