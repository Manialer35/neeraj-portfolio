
import { Video, Palette, Code, Brain, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing with advanced effects, color grading, and storytelling techniques.",
      gradient: "from-red-400 to-pink-500",
      skills: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics"]
    },
    {
      icon: Palette,
      title: "Graphics Design",
      description: "Creative visual design solutions for branding, digital media, and print materials.",
      gradient: "from-purple-400 to-pink-500",
      skills: ["Adobe Photoshop", "Illustrator", "Figma", "Brand Identity"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks and responsive design.",
      gradient: "from-emerald-400 to-teal-500",
      skills: ["React", "Node.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: Brain,
      title: "AI Projects",
      description: "Machine learning models and AI-powered applications for innovative solutions.",
      gradient: "from-orange-400 to-rose-500",
      skills: ["Python", "TensorFlow", "OpenAI APIs", "Computer Vision"]
    },
    {
      icon: Smartphone,
      title: "Android Development",
      description: "Native Android applications with modern architecture and user experience.",
      gradient: "from-blue-400 to-purple-500",
      skills: ["Kotlin", "Java", "Jetpack Compose", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-br from-pink-50/50 to-purple-50/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A diverse skill set spanning creative and technical domains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="group hover-scale cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 shadow-sm hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-r ${skill.gradient} p-2 sm:p-3 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold">{skill.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm sm:text-base">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skill.skills.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-muted rounded-full text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
