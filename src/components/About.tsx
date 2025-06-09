
import { Award, Users, Coffee, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Award, label: "Projects Completed", value: "50+", color: "from-rose-500 to-pink-600" },
    { icon: Users, label: "Happy Clients", value: "30+", color: "from-purple-500 to-indigo-600" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+", color: "from-amber-500 to-orange-600" },
    { icon: Clock, label: "Years Experience", value: "5+", color: "from-emerald-500 to-teal-600" }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-950">
      {/* Background with Matrix Theme */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1920&h=1080&fit=crop')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-gray-900/95 to-indigo-950/90"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,182,193,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,182,193,0.03)_1px,transparent_1px)] bg-[size:100px_100px] animate-[grid-move_20s_linear_infinite]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-300 via-pink-300 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Passionate developer with a creative mindset and technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Profile Section */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-purple-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Your Name</h3>
                <p className="text-rose-400 font-medium">Creative Developer</p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                I'm a passionate creative developer with over 5 years of experience in crafting digital experiences. 
                My journey spans across multiple domains including video editing, graphics design, web development, 
                AI projects, and Android development.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                I believe in the power of combining creativity with technology to solve real-world problems. 
                Whether it's creating stunning visuals, developing intuitive applications, or implementing 
                cutting-edge AI solutions, I'm always excited to take on new challenges.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                When I'm not coding or designing, you can find me exploring new technologies, contributing to 
                open-source projects, or mentoring aspiring developers.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-2">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${stat.color} p-2 sm:p-2.5 mb-2`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm">
                    {stat.label}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
