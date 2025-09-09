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

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;