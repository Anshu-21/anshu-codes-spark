import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                  Hi, There 👋🏻
                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="gradient-text glow">
                    I'm Anshu Kumar
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-slide-in-left" style={{animationDelay: '0.4s'}}>
                  Mechanical Engineering Student | Web Developer | Innovator
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in" style={{animationDelay: '0.6s'}}>
                3rd-year student at NIT Sikkim passionate about frontend development, 
                robotics, and creating innovative solutions that bridge engineering and technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-scale-in" style={{animationDelay: '0.8s'}}>
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-primary hover:opacity-90 smooth-transition shadow-hero text-lg px-8 py-6"
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition text-lg px-8 py-6"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Contact Me
                </Button>
              </div>
              
              <Button 
                variant="ghost" 
                className="text-muted-foreground hover:text-primary smooth-transition animate-fade-in" 
                style={{animationDelay: '1s'}}
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-glow-pulse"></div>
                
                {/* Profile image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-hero">
                  <img 
                    src="/lovable-uploads/e862b252-ca07-41c6-9777-dd9f21cf1984.png"
                    alt="Anshu Kumar - Profile Picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="w-6 h-6 text-muted-foreground cursor-pointer hover:text-primary smooth-transition"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default HeroSection;