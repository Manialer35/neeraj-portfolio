
import { Video, Palette, Code, Brain, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing with advanced effects, color grading, and storytelling techniques.",
      gradient: "from-red-500 to-orange-600",
      skills: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics"]
    },
    {
      icon: Palette,
      title: "Graphics Design",
      description: "Creative visual design solutions for branding, digital media, and print materials.",
      gradient: "from-purple-500 to-pink-400",
      skills: ["Adobe Photoshop", "Illustrator", "Figma", "Brand Identity"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks and responsive design.",
      gradient: "from-emerald-500 to-teal-600",
      skills: ["React", "Node.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: Brain,
      title: "AI Projects",
      description: "Machine learning models and AI-powered applications for innovative solutions.",
      gradient: "from-blue-500 to-indigo-600",
      skills: ["Python", "TensorFlow", "OpenAI APIs", "Computer Vision"]
    },
    {
      icon: Smartphone,
      title: "Android Development",
      description: "Native Android applications with modern architecture and user experience.",
      gradient: "from-violet-500 to-purple-600",
      skills: ["Kotlin", "Java", "Jetpack Compose", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-700 via-gray-800 to-slate-900 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            A diverse skill set spanning creative and technical domains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="group hover-scale cursor-pointer border-slate-200 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 shadow-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-r ${skill.gradient} p-2 sm:p-3 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-slate-800">{skill.title}</CardTitle>
                <CardDescription className="text-slate-600 text-sm sm:text-base">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skill.skills.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-slate-100 rounded-full text-slate-700 group-hover:bg-slate-200 transition-colors duration-300"
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
