import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps'
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedCategory(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);
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
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Click on any category to explore my toolkit
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {skillCategories.map((category, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                  <Card 
                    className={`gradient-border bg-card/50 backdrop-blur-sm smooth-transition hover:shadow-glow hover:-translate-y-2 cursor-pointer h-full ${
                      index === selectedCategory ? 'shadow-glow ring-2 ring-primary/20' : ''
                    }`}
                    onClick={() => setSelectedCategory(index)}
                  >
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${category.color} p-4 shadow-lg`}>
                        <div className="text-white w-full h-full flex items-center justify-center">
                          {category.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {category.skills.length} tools & technologies
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={scrollNext}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Selected Category Details */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              {skillCategories[selectedCategory].title}
            </h3>
            <p className="text-muted-foreground">
              Tools and technologies I work with
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories[selectedCategory].skills.map((skill, skillIndex) => (
              <Card 
                key={skillIndex}
                className="bg-card/30 backdrop-blur-sm border-muted/50 hover:border-primary/30 smooth-transition hover:shadow-md hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-3 flex justify-center">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {skill.name}
                  </h4>
                  
                  {/* Skill Level */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        Proficiency
                      </span>
                      <span className="text-xs font-medium text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skillCategories[selectedCategory].color} smooth-transition`}
                        style={{ 
                          width: `${skill.level}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;