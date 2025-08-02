import consultationImage from "@/assets/consultation-tech.jpg";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Speak Your Symptoms",
      description: "Simply describe your symptoms or health concerns using natural voice commands. Our AI listens and understands medical terminology."
    },
    {
      number: "02", 
      title: "AI Analysis",
      description: "Advanced machine learning algorithms analyze your symptoms, medical history, and current health data to provide accurate assessments."
    },
    {
      number: "03",
      title: "Get Recommendations",
      description: "Receive personalized treatment suggestions, medication recommendations, and when necessary, referrals to specialist doctors."
    },
    {
      number: "04",
      title: "Connect with Doctors",
      description: "For complex cases, seamlessly connect with qualified healthcare professionals from our extensive doctor network."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            How <span className="text-blue-500">It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get medical assistance in just a few simple steps. Our streamlined process ensures you get the care you need quickly and efficiently.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-start space-x-6 group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div style={{ backgroundColor: '#2b7fff' }}  className="w-16 h-16 bg-gradient rounded-full flex items-center justify-center text-white font-bold text-lg shadow-glow group-hover:shadow-xl transition-all duration-300">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <img 
                src={'./consultation-tech.jpg'}
                alt="Digital Health Consultation" 
                className="w-full h-auto rounded-2xl shadow-medical"
              />
              <div className="absolute inset-0 bg-medical-gradient opacity-10 rounded-2xl"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">&lt; 2min</div>
                  <div className="text-sm text-muted-foreground">Average Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">User Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Specialties</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-medical-light/50 px-6 py-3 rounded-full">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-foreground font-medium">Powered by Advanced AI Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;