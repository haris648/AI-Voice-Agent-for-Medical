import medicalTeamImage from "@/assets/medical-team.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Emergency Medicine Physician",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      content: "MedVoice AI has revolutionized how I handle patient consultations. The accuracy and speed of diagnosis suggestions have significantly improved my workflow."
    },
    {
      name: "Michael Chen",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "As someone with chronic conditions, having 24/7 access to medical guidance has been life-changing. The voice interface is intuitive and understanding."
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Family Medicine",
      image: "https://images.unsplash.com/photo-1594824483472-a8e6e4c6b8e3?w=100&h=100&fit=crop&crop=face",
      content: "The AI's ability to understand complex medical terminology and provide accurate preliminary assessments helps me focus on what matters most - patient care."
    }
  ];

  return (
    <section style={{ backgroundColor: '#f7fdff' }} className="py-20 mb-5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Trusted by <span className="text-blue-500">Healthcare Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See what doctors and patients are saying about their experience with MedVoice AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in">
            <img 
              src={'./medical-team.jpg'} 
              alt="Medical Team" 
              className="w-full h-auto rounded-2xl shadow-medical"
            />
            <div className="absolute inset-0 bg-medical-gradient opacity-10 rounded-2xl"></div>
            
            {/* Trust indicators */}
            <div className="absolute top-6 left-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Trusted by 500+ Healthcare Providers</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-2xl shadow-medical hover:shadow-glow transition-all duration-300 border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Healthcare Providers</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="text-3xl font-bold text-primary mb-2">50k+</div>
            <div className="text-muted-foreground">Patient Consultations</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl font-bold text-primary mb-2">99.2%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;