
import { Award, Users, Coffee, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "15+", color: "from-rose-500 to-pink-600" },
    { icon: Award, label: "Projects Completed", value: "20+", color: "from-purple-500 to-indigo-600" },
    { icon: Coffee, label: "Cups of Coffee", value: "100+", color: "from-amber-500 to-orange-600" },
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
              {/* Large Profile Image with Decorations */}
              <div className="relative">
                {/* Floating Particles */}
                <div className="absolute -top-4 -left-4 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce opacity-70"></div>
                <div className="absolute -top-6 -right-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-bounce delay-200 opacity-70"></div>
                <div className="absolute -bottom-2 -left-6 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-bounce delay-400 opacity-70"></div>
                <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-bounce delay-600 opacity-70"></div>
                
                {/* Rotating Rings */}
                <div className="absolute inset-0 w-32 h-32 sm:w-36 sm:h-36 animate-spin-slow">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-pink-400/30"></div>
                </div>
                
                {/* Pulsing Outer Ring */}
                <div className="absolute inset-0 w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-purple-400/20 animate-ping"></div>
                
                {/* Main Image Container */}
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-purple-500 p-1 shadow-2xl relative">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-indigo-900">
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face" 
                      alt="Neeraj Madkar" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Animated Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 animate-pulse"></div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Neeraj Madkar</h3>
                <p className="text-rose-400 font-medium">Creative Developer</p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                Hey there! I'm Neeraj Madkar, a passionate and driven tech enthusiast with a strong background in Web Development, Android App Development, and Artificial Intelligence. I'm a Computer Science graduate with hands-on experience building intelligent solutions that bridge creativity and technology.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                I've worked with startups, handled freelance projects on platforms like Fiverr, and co-founded ventures such as CollabxMedia and DGINEERS, where I continue to push the boundaries of what technology can do. Whether it's building modern websites, integrating AI chatbots, or optimizing digital strategies, I thrive on solving real-world problems through code and innovation.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                I'm also a Snapchat Opinion Leader, contributing to digital discussions and trends. Beyond development, I'm deeply interested in ethical hacking, cybersecurity, and using AI for societal good.
              </p>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-emerald-400 font-semibold text-lg mb-2">🔍 Currently Working On:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• My First Book on AI ( Launching Soon!!! )</li>
                    <li>• A research paper on "AI for Society"</li>
                    <li>• Building my personal brand</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-pink-400 font-semibold text-lg mb-2">🎯 My Mission:</h4>
                  <p className="text-gray-300">
                    To use AI and technology not just to build cool projects—but to create a meaningful impact on daily life, national defense, and the future of work. I believe in ethical, responsible AI that empowers individuals over institutions.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-purple-400 font-semibold text-lg mb-2">🚀 What Sets Me Apart:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Unique blend of development, creativity, and cybersecurity</li>
                    <li>• Real startup and client-facing experience</li>
                    <li>• Self-learning mindset with the drive to compete with the best in the world (yes, even Elon Musk 😉)</li>
                  </ul>
                </div>
              </div>
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
