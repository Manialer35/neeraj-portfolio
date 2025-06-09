import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    // Video Editing Projects with new thumbnails
    {
      id: 1,
      title: "Creative Video Edit #1",
      description: "Professional video editing showcasing creative transitions and effects.",
      category: "video",
      tags: ["Premiere Pro", "After Effects", "Motion Graphics"],
      videoUrl: "https://drive.google.com/file/d/1o1DMkvRBvNJFvI3S4N_Q-U6Ws68keDbQ/view?usp=drive_link",
      thumbnail: "/lovable-uploads/24d5cd86-83ac-4322-a1ec-181b3160247a.png",
      gradient: "from-red-400 to-pink-600",
      isVideo: true
    },
    {
      id: 2,
      title: "YouTube Short #1",
      description: "Engaging short-form content with dynamic editing and sound design.",
      category: "video",
      tags: ["YouTube Shorts", "Mobile Editing", "Social Media"],
      videoUrl: "https://youtube.com/shorts/uaCeP8Xke24?si=H_2Xm0l7dyOLtpSq",
      thumbnail: "/lovable-uploads/d23d194f-d66d-4534-8bff-0ccf066c1da2.png",
      gradient: "from-red-400 to-pink-600",
      isVideo: true
    },
    {
      id: 3,
      title: "YouTube Short #2",
      description: "Creative storytelling through quick cuts and visual effects.",
      category: "video",
      tags: ["YouTube Shorts", "Visual Effects", "Storytelling"],
      videoUrl: "https://youtube.com/shorts/Tl5o8J8p5Ck?si=TiNSYsXAZrsVoXex",
      thumbnail: "/lovable-uploads/bce10a45-321e-45c8-a154-aed572bc0a4c.png",
      gradient: "from-red-400 to-pink-600",
      isVideo: true
    },
    {
      id: 4,
      title: "YouTube Short #3",
      description: "High-energy video editing with synchronized audio and visuals.",
      category: "video",
      tags: ["YouTube Shorts", "Audio Sync", "High Energy"],
      videoUrl: "https://youtube.com/shorts/WqQK1u4XpZE?si=UOiAzfuzI8lJkFGm",
      thumbnail: "/lovable-uploads/dce811a7-14de-43a1-bcfb-184014457fbb.png",
      gradient: "from-red-400 to-pink-600",
      isVideo: true
    },
    
    // Web Development Projects
    {
      id: 5,
      title: "BoostUpMedia - Digital Marketing Agency",
      description: "Modern digital marketing agency website with responsive design and engaging animations.",
      category: "web",
      tags: ["React", "Tailwind CSS", "Digital Marketing", "Responsive"],
      image: "/lovable-uploads/12f20349-c5e1-40fd-a03b-a496a3b98816.png",
      projectUrl: "https://boostupmedia.in/",
      gradient: "from-green-400 to-teal-600"
    },
    {
      id: 6,
      title: "DGineers - Digital Transformation",
      description: "Professional website for digital transformation services with modern UI/UX design.",
      category: "web",
      tags: ["Web Design", "Digital Services", "Modern UI", "Business"],
      image: "/lovable-uploads/188f9d3a-9265-4dc9-b3a8-d94a7a6bf61f.png",
      projectUrl: "https://dgineers.com/",
      gradient: "from-green-400 to-teal-600"
    },

    // Android Development Projects
    {
      id: 7,
      title: "Avishkar Career Compass",
      description: "Mobile application for career guidance and educational resources with user authentication.",
      category: "android",
      tags: ["React Native", "Career Guidance", "Authentication", "Education"],
      image: "/lovable-uploads/ff2da13a-9617-4352-ad3d-8cfbce21b134.png",
      projectUrl: "https://avishkar-career-compass.lovable.app/auth",
      gradient: "from-blue-400 to-indigo-600"
    },

    // AI Projects
    {
      id: 8,
      title: "Fake News Detection System",
      description: "AI-powered system using LSTM neural networks to detect and classify fake news articles.",
      category: "ai",
      tags: ["Python", "LSTM", "Machine Learning", "NLP"],
      image: "/lovable-uploads/7064506a-ec62-4478-869e-22f5258d8607.png",
      projectUrl: "https://github.com/Manialer35/fake-news-detection-lstm",
      gradient: "from-orange-400 to-red-600"
    },

    // Graphics Design Projects - Added old video thumbnails and new designs
    {
      id: 9,
      title: "AdSmart AI - Web Design",
      description: "Modern AI-powered advertising platform interface design with sleek dark theme.",
      category: "graphics",
      tags: ["UI/UX Design", "Web Design", "AI Platform", "Dark Theme"],
      image: "/lovable-uploads/1fd2f95a-f546-41f7-9e73-c465b1b5e79d.png",
      gradient: "from-purple-400 to-blue-600"
    },
    {
      id: 10,
      title: "RAJ Computer Academy - Educational Posters",
      description: "Educational promotional designs for computer training institute with vibrant layouts.",
      category: "graphics",
      tags: ["Educational Design", "Poster Design", "Print Media", "Branding"],
      image: "/lovable-uploads/10400284-aba7-4d59-8db3-cd66bc96390e.png",
      gradient: "from-purple-400 to-blue-600"
    },
    {
      id: 11,
      title: "Valentine's Day Campaign",
      description: "Festive promotional design for educational institute's Valentine's Day admission campaign.",
      category: "graphics",
      tags: ["Campaign Design", "Festive Theme", "Social Media", "Promotional"],
      image: "/lovable-uploads/0d6b408c-ed10-420f-8565-69c0ea7c9d32.png",
      gradient: "from-purple-400 to-blue-600"
    },
    {
      id: 12,
      title: "Digital Marketing Infographic",
      description: "Professional infographic design explaining the importance of digital marketing.",
      category: "graphics",
      tags: ["Infographic", "Digital Marketing", "Business", "Professional"],
      image: "/lovable-uploads/ad1242c6-edf8-48da-a30b-befb52f97a8d.png",
      gradient: "from-purple-400 to-blue-600"
    },
    {
      id: 13,
      title: "Tally Prime Course Promotion",
      description: "Educational course promotion design highlighting Tally Prime software features and benefits.",
      category: "graphics",
      tags: ["Course Design", "Educational", "Software Training", "Professional"],
      image: "/lovable-uploads/7ef4978a-1f47-4332-a98c-ae032efa225c.png",
      gradient: "from-purple-400 to-blue-600"
    },
    {
      id: 14,
      title: "Medical Services - Doctor Information",
      description: "Professional medical service brochure design showcasing doctor credentials and services.",
      category: "graphics",
      tags: ["Medical Design", "Healthcare", "Professional Brochure", "Information Design"],
      image: "/lovable-uploads/4c3996ed-7b4c-482a-ba61-32dbcae55fdc.png",
      gradient: "from-purple-400 to-blue-600"
    },
    {
      id: 15,
      title: "Healthcare Services Portfolio",
      description: "Comprehensive healthcare services design with modern medical interface elements.",
      category: "graphics",
      tags: ["Healthcare Design", "Medical Services", "Modern UI", "Professional"],
      image: "/lovable-uploads/289143c3-b7e0-4588-bcd8-0fac20e6a2da.png",
      gradient: "from-purple-400 to-blue-600"
    },
    {
      id: 16,
      title: "AI Marketing Campaign",
      description: "Futuristic AI-focused marketing design exploring the future of digital marketing.",
      category: "graphics",
      tags: ["AI Design", "Marketing Campaign", "Futuristic", "Digital Marketing"],
      image: "/lovable-uploads/10bc52dc-35e5-4b9f-8f7e-e2a670a4ee63.png",
      gradient: "from-purple-400 to-blue-600"
    },
    {
      id: 17,
      title: "DG Neers Media Logo",
      description: "Elegant and professional logo design for DG Neers Media with sophisticated typography.",
      category: "graphics",
      tags: ["Logo Design", "Branding", "Typography", "Corporate Identity"],
      image: "/lovable-uploads/81dd9d51-3185-4eb3-91ce-8c45dee466ee.png",
      gradient: "from-purple-400 to-blue-600"
    },
    {
      id: 18,
      title: "Video Thumbnail Design #1",
      description: "Eye-catching video thumbnail design with engaging visual elements and typography.",
      category: "graphics",
      tags: ["Thumbnail Design", "Video Graphics", "Visual Design", "Social Media"],
      image: "/lovable-uploads/c05312dd-a287-41ae-a891-6dd12351a89b.png",
      gradient: "from-purple-400 to-blue-600"
    },
    {
      id: 19,
      title: "Video Thumbnail Design #2",
      description: "Dynamic video thumbnail with bold colors and engaging visual storytelling.",
      category: "graphics",
      tags: ["Thumbnail Design", "YouTube Graphics", "Visual Impact", "Content Creation"],
      image: "/lovable-uploads/0d865d7d-f639-482f-8c96-ad287f94ce1a.png",
      gradient: "from-purple-400 to-blue-600"
    },
    {
      id: 20,
      title: "Video Thumbnail Design #3",
      description: "Creative video thumbnail design showcasing visual effects and engaging composition.",
      category: "graphics",
      tags: ["Thumbnail Design", "Visual Effects", "Creative Design", "Digital Art"],
      image: "/lovable-uploads/e0af69df-0997-47c5-8945-a52f5adb5d0d.png",
      gradient: "from-purple-400 to-blue-600"
    },
    {
      id: 21,
      title: "Video Thumbnail Design #4",
      description: "High-energy video thumbnail with bold graphics and attention-grabbing design elements.",
      category: "graphics",
      tags: ["Thumbnail Design", "High Energy", "Bold Graphics", "Visual Impact"],
      image: "/lovable-uploads/4a72b6fc-86a8-461a-b267-9a8fe1510414.png",
      gradient: "from-purple-400 to-blue-600"
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

  const handleProjectClick = (project: any) => {
    if (project.videoUrl) {
      window.open(project.videoUrl, '_blank');
    } else if (project.projectUrl) {
      window.open(project.projectUrl, '_blank');
    }
  };

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
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden">
                {project.isVideo ? (
                  <div className="relative">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl mb-2">▶️</div>
                        <p className="text-sm font-medium">Click to Watch Video</p>
                      </div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  </div>
                ) : (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  </>
                )}
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
