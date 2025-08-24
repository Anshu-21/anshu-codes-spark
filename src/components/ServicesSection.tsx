import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Palette, 
  Database, 
  Cog,
  ArrowUpRight,
  CheckCircle
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Responsive, interactive websites using React, Tailwind, and JavaScript.",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-purple-500",
      features: [
        "Responsive Design",
        "Modern React Applications",
        "Tailwind CSS Styling",
        "Interactive User Interfaces",
        "Performance Optimization"
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "UI/UX Design",
      description: "Clean, user-friendly interfaces in Figma/Canva.",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500", 
      features: [
        "User Interface Design",
        "User Experience Research",
        "Wireframe & Prototyping",
        "Design Systems",
        "Mobile-First Approach"
      ],
      technologies: ["Figma", "Canva", "Adobe XD", "Photoshop"]
    },
    {
      title: "Database Integration",
      description: "Secure handling of data with Appwrite, MySQL, JSON.",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      features: [
        "Database Design",
        "API Integration",
        "Data Security",
        "Real-time Updates",
        "Backend Management"
      ],
      technologies: ["Appwrite", "MySQL", "PHP", "JSON", "REST APIs"]
    },
    {
      title: "Robotics & Simulation Support",
      description: "SolidWorks design, Tinkercad prototyping.",
      icon: <Cog className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "CAD Design",
        "3D Modeling",
        "Simulation Testing",
        "Prototype Development",
        "Technical Documentation"
      ],
      technologies: ["SolidWorks", "Tinkercad", "Arduino", "AutoCAD"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions bridging web development, design, and engineering
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="gradient-border bg-card/50 backdrop-blur-sm smooth-transition hover:shadow-card hover:-translate-y-2 animate-fade-in group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-10`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary smooth-transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  
                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, tIndex) => (
                        <span 
                          key={tIndex}
                          className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 smooth-transition shadow-glow`}
                    onClick={() => {
                      const element = document.getElementById('contact');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;