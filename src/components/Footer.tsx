import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6">
          
          {/* Logo/Name */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold gradient-text">
              Anshu Kumar
            </h3>
            <p className="text-muted-foreground">
              Mechanical Engineering Student | Web Developer | Innovator
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {['About', 'Experience', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-muted-foreground hover:text-primary animated-underline smooth-transition"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          
          {/* Copyright and Credits */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-primary" />
              <span>by Anshu Kumar</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <Coffee className="w-4 h-4" />
              <span>Fueled by coffee and curiosity</span>
            </div>
            
            <p className="text-xs text-muted-foreground">
              © {currentYear} Anshu Kumar. All rights reserved.
            </p>
          </div>
          
          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary smooth-transition group"
          >
            <span>Back to top</span>
            <svg 
              className="w-4 h-4 group-hover:-translate-y-1 smooth-transition" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;