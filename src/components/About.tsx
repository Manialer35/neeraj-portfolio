import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const achievements = [
    "5+ Years of Creative Experience",
    "50+ Successful Projects",
    "Multiple Industry Certifications",
    "International Client Base"
  ];

  const tools = [
    "Adobe Creative Suite",
    "React & Next.js",
    "Python & TensorFlow",
    "Android Studio",
    "Figma & Sketch",
    "Node.js & MongoDB"
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-pink-50/50 to-purple-50/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Passionate about creating innovative digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4">
              <p className="mb-4">
                I'm a creative technologist with a passion for bringing ideas to life through code, design, and storytelling. 
                My journey spans across multiple disciplines, allowing me to create comprehensive digital experiences that 
                resonate with users and drive results.
              </p>
              <p className="mb-4">
                From crafting compelling video narratives to developing cutting-edge AI applications, I believe in the 
                power of technology to solve real-world problems and create meaningful connections.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring the latest tech trends, experimenting with 
                new creative tools, or collaborating with fellow creators on innovative projects.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Key Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement}
                    className="flex items-center space-x-2 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm sm:text-base">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-sm">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">Professional Avatar</h3>
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 p-2 hover-scale">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
                      <span className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">YN</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">Creative Developer</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Bridging the gap between creativity and technology
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-sm">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {tools.map((tool, index) => (
                    <Badge 
                      key={tool}
                      variant="secondary"
                      className="hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-default text-xs sm:text-sm"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
