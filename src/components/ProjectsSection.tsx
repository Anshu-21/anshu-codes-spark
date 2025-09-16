import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Github, 
  Music, 
  Bot,
  Calendar,
  Star
} from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Surgeet - Music Player Web App",
      period: "2024 – 2025",
      description: "A comprehensive music streaming application built with modern web technologies, featuring user authentication, playlist management, and voice recording capabilities.",
      longDescription: "Built with React, Tailwind CSS, and Appwrite. Features playlists, authentication, audio controls, and voice recording.",
      icon: <Music className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      technologies: ["React.js", "Tailwind CSS", "Appwrite", "JavaScript", "Audio API"],
      features: [
        "User Authentication & Profiles",
        "Dynamic Playlist Management", 
        "Advanced Audio Controls",
        "Voice Recording Integration",
        "Responsive Design",
        "Real-time Data Sync"
      ],
      status: "Completed",
      githubUrl: "#",
      liveUrl: "https://anshu-surgeet.vercel.app"
    },
    {
      title: "Obstacle Avoidance Robot",
      period: "2023 – 2024", 
      description: "An autonomous robot system that uses sensors and microcontroller programming for real-time navigation and obstacle detection.",
      longDescription: "Autonomous robot using sensors and microcontroller programming for real-time navigation.",
      icon: <Bot className="w-8 h-8" />,
      color: "from-blue-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      technologies: ["Arduino", "C++", "Ultrasonic Sensors", "Motor Controllers", "Embedded Systems"],
      features: [
        "Real-time Obstacle Detection",
        "Autonomous Navigation",
        "Sensor Fusion Technology",
        "Microcontroller Programming",
        "Motor Control Systems",
        "Path Planning Algorithm"
      ],
      status: "Completed",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "FoodHub - Food Ordering Platform",
      period: "2024",
      description: "A modern food ordering web application with intuitive user interface and seamless ordering experience.",
      longDescription: "Modern food ordering platform with user-friendly interface and seamless ordering experience.",
      icon: <Star className="w-8 h-8" />,
      color: "from-orange-500 to-red-500", 
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API"],
      features: [
        "Restaurant Browsing",
        "Menu Management",
        "Order Tracking",
        "Payment Integration",
        "User Reviews & Ratings",
        "Admin Dashboard"
      ],
      status: "In Development",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my journey in web development, robotics, and innovative problem-solving
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="gradient-border bg-card/50 backdrop-blur-sm smooth-transition hover:shadow-card animate-fade-in overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col lg:grid-cols-2' : ''}`}>
                  
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-video lg:aspect-square relative">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover smooth-transition hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>
                      
                      {/* Project Icon */}
                      <div className={`absolute top-6 left-6 p-3 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-90`}>
                        <div className="text-white">
                          {project.icon}
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-6 right-6">
                        <Badge 
                          variant={project.status === 'Completed' ? 'default' : 'secondary'}
                          className="bg-background/80 backdrop-blur-sm"
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className={`p-8 lg:p-12 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.period}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        Key Features
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIndex) => (
                          <span 
                            key={tIndex}
                            className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button 
                        className={`bg-gradient-to-r ${project.color} hover:opacity-90 smooth-transition shadow-glow flex-1`}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;