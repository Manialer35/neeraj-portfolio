
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Brand Identity Video Campaign",
      description: "Complete video editing project for a tech startup including motion graphics and sound design.",
      category: "video",
      tags: ["Premiere Pro", "After Effects", "Motion Graphics"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400",
      gradient: "from-red-400 to-pink-600"
    },
    {
      id: 2,
      title: "E-commerce Web Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and modern payment integration.",
      category: "web",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400",
      gradient: "from-green-400 to-teal-600"
    },
    {
      id: 3,
      title: "AI-Powered Design Tool",
      description: "Machine learning application that generates design suggestions based on user preferences.",
      category: "ai",
      tags: ["Python", "TensorFlow", "React", "OpenAI"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400",
      gradient: "from-orange-400 to-red-600"
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      description: "Android application for fitness tracking with real-time analytics and social features.",
      category: "android",
      tags: ["Kotlin", "Jetpack Compose", "Firebase", "ML Kit"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=400",
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      id: 5,
      title: "Corporate Branding Package",
      description: "Complete visual identity design including logo, business cards, and marketing materials.",
      category: "graphics",
      tags: ["Illustrator", "Photoshop", "Brand Design", "Print"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400",
      gradient: "from-purple-400 to-blue-600"
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description: "WebSocket-based chat application with file sharing and video call capabilities.",
      category: "web",
      tags: ["Socket.io", "React", "WebRTC", "Express"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
      gradient: "from-green-400 to-teal-600"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'video', label: 'Video Editing' },
    { id: 'graphics', label: 'Graphics Design' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI Projects' },
    { id: 'android', label: 'Android Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A showcase of my work across different creative and technical domains
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`transition-all duration-300 text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 ${
                activeFilter === filter.id 
                  ? "bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 text-white border-0 shadow-lg" 
                  : "hover:bg-pink-50 border-pink-200 text-pink-600 hover:border-pink-300"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group hover-scale cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm sm:text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 text-xs sm:text-sm"
                    >
                      {tag}
                    </Badge>
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

export default Projects;
