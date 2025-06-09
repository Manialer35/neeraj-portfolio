
import { Video, Palette, Code, Brain, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing with advanced effects, color grading, and storytelling techniques.",
      gradient: "from-red-400 to-pink-600",
      skills: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics"]
    },
    {
      icon: Palette,
      title: "Graphics Design",
      description: "Creative visual design solutions for branding, digital media, and print materials.",
      gradient: "from-purple-400 to-blue-600",
      skills: ["Adobe Photoshop", "Illustrator", "Figma", "Brand Identity"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks and responsive design.",
      gradient: "from-green-400 to-teal-600",
      skills: ["React", "Node.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: Brain,
      title: "AI Projects",
      description: "Machine learning models and AI-powered applications for innovative solutions.",
      gradient: "from-orange-400 to-red-600",
      skills: ["Python", "TensorFlow", "OpenAI APIs", "Computer Vision"]
    },
    {
      icon: Smartphone,
      title: "Android Development",
      description: "Native Android applications with modern architecture and user experience.",
      gradient: "from-blue-400 to-indigo-600",
      skills: ["Kotlin", "Java", "Jetpack Compose", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning creative and technical domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="group hover-scale cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${skill.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{skill.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300"
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
