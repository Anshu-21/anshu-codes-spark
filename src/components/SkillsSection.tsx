import { Card, CardContent } from '@/components/ui/card';
import { 
  Code2, 
  Database, 
  Palette, 
  Settings, 
  Cog, 
  Users,
  Globe,
  Layers,
  FileCode,
  Zap
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-blue-500 to-purple-500",
      skills: [
        { name: "HTML5", level: 90, icon: <Globe className="w-5 h-5" /> },
        { name: "CSS3", level: 85, icon: <Palette className="w-5 h-5" /> },
        { name: "Tailwind CSS", level: 90, icon: <Settings className="w-5 h-5" /> },
        { name: "JavaScript", level: 80, icon: <FileCode className="w-5 h-5" /> },
        { name: "React.js", level: 85, icon: <Zap className="w-5 h-5" /> }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Appwrite", level: 75, icon: <Database className="w-5 h-5" /> },
        { name: "PHP", level: 70, icon: <Code2 className="w-5 h-5" /> },
        { name: "MySQL", level: 75, icon: <Database className="w-5 h-5" /> },
        { name: "JSON", level: 85, icon: <Settings className="w-5 h-5" /> }
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Figma", level: 80, icon: <Palette className="w-5 h-5" /> },
        { name: "Canva", level: 85, icon: <Palette className="w-5 h-5" /> },
        { name: "Responsive Design", level: 90, icon: <Settings className="w-5 h-5" /> },
        { name: "User Experience", level: 75, icon: <Users className="w-5 h-5" /> }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: <Settings className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Vite", level: 80, icon: <Settings className="w-5 h-5" /> },
        { name: "Redux Toolkit", level: 75, icon: <Code2 className="w-5 h-5" /> },
        { name: "Context API", level: 80, icon: <Zap className="w-5 h-5" /> },
        { name: "Git/GitHub", level: 85, icon: <Code2 className="w-5 h-5" /> }
      ]
    },
    {
      title: "Robotics & Simulation",
      icon: <Cog className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "SolidWorks", level: 70, icon: <Cog className="w-5 h-5" /> },
        { name: "Tinkercad", level: 75, icon: <Cog className="w-5 h-5" /> },
        { name: "Arduino", level: 65, icon: <Cog className="w-5 h-5" /> },
        { name: "CAD Design", level: 70, icon: <Settings className="w-5 h-5" /> }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8" />,
      color: "from-teal-500 to-blue-500",
      skills: [
        { name: "Team Leadership", level: 85, icon: <Users className="w-5 h-5" /> },
        { name: "Problem Solving", level: 90, icon: <Settings className="w-5 h-5" /> },
        { name: "Communication", level: 80, icon: <Users className="w-5 h-5" /> },
        { name: "Project Management", level: 75, icon: <Settings className="w-5 h-5" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning frontend development, design, and engineering
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="gradient-border bg-card/50 backdrop-blur-sm smooth-transition hover:shadow-card hover:-translate-y-2 animate-fade-in"
              style={{animationDelay: `${categoryIndex * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-10`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="text-primary">
                              {skill.icon}
                            </div>
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color} smooth-transition`}
                            style={{ 
                              width: `${skill.level}%`,
                              animation: `scale-in 0.8s ease-out ${(categoryIndex * 0.1) + (skillIndex * 0.1)}s both`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
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

export default SkillsSection;