import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cog, 
  Users, 
  Code, 
  BookOpen,
  Calendar,
  MapPin
} from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Team Lead",
      organization: "Robotics & Automation",
      period: "Aug 2025 – Present",
      location: "NIT Sikkim",
      description: "Led robotics projects like obstacle avoidance robot and robotic arm prototype.",
      highlights: [
        "Led cross-functional robotics team",
        "Developed autonomous navigation systems",
        "Managed project timelines and deliverables"
      ],
      icon: <Cog className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      role: "Volunteer",
      organization: "Training & Placement",
      period: "May 2025 – Present", 
      location: "NIT Sikkim",
      description: "Assisted with internship/placement outreach and data management.",
      highlights: [
        "Coordinated placement activities",
        "Managed student database",
        "Facilitated industry connections"
      ],
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      role: "Technical Team Member",
      organization: "WDC (Web Development Club)",
      period: "Jan 2025 – Present",
      location: "NIT Sikkim", 
      description: "Worked on institutional website updates and event support.",
      highlights: [
        "Developed responsive web interfaces",
        "Collaborated on institutional projects",
        "Provided technical event support"
      ],
      icon: <Code className="w-6 h-6" />,
      color: "from-teal-500 to-blue-500"
    },
    {
      role: "Member",
      organization: "TRI Literary Club", 
      period: "Aug 2024 – Present",
      location: "NIT Sikkim",
      description: "Organized events, improved communication and management skills.",
      highlights: [
        "Organized literary events and competitions",
        "Enhanced communication skills",
        "Developed leadership capabilities"
      ],
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building leadership skills through diverse roles in technology, robotics, and community engagement
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="gradient-border bg-card/50 backdrop-blur-sm smooth-transition hover:shadow-card hover:-translate-y-2 animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} bg-opacity-10`}>
                      <div className="text-white">
                        {exp.icon}
                      </div> 
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Current
                    </Badge>
                  </div>
                  
                  {/* Role and Organization */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {exp.organization}
                    </p>
                  </div>
                  
                  {/* Period and Location */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Key Achievements:</p>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
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

export default ExperienceSection;