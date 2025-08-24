import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      degree: "B.Tech Mechanical Engineering",
      institution: "NIT Sikkim",
      period: "2023 - Present",
      grade: "Current CGPA: 7.88",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "12th Grade",
      institution: "Scottish Public School, Katihar, Bihar",
      period: "2023",
      grade: "88.8%",
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: "10th Grade", 
      institution: "SBP Vidya Vihar, Bihar",
      period: "2021",
      grade: "87.2%",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about bridging mechanical engineering with modern web technologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio section */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am Anshu Kumar, a 2nd-year Mechanical Engineering student at NIT Sikkim 
                with skills in HTML, CSS, Tailwind, JavaScript, React, and Appwrite. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have built projects like a music player web app and FoodHub, and I aim 
                to contribute as a Web Developer Intern while enhancing my frontend and 
                database integration skills.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My unique combination of mechanical engineering principles and modern web 
                development allows me to approach problems from multiple perspectives, 
                creating innovative solutions that are both technically sound and user-friendly.
              </p>
            </div>
          </div>
          
          {/* Education timeline */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-primary mb-8">Education Timeline</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="gradient-border bg-card/50 backdrop-blur-sm smooth-transition hover:shadow-card animate-fade-in"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                        <p className="text-muted-foreground mb-2">{edu.institution}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                          <div className="text-sm font-medium text-primary">
                            {edu.grade}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;