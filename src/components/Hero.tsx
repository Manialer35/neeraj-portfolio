
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSkills = () => {
    const element = document.querySelector('#skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950">
      {/* Matrix Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-indigo-950/90 to-purple-950/80"></div>
      </div>
      
      {/* Animated Matrix Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(139,92,246,0.15)_1px,transparent_0)] bg-[size:50px_50px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,182,193,0.1)_50%,transparent_100%)] animate-[slide-right_10s_linear_infinite]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Professional Avatar with Decorations */}
          <div className="mb-6 sm:mb-8 relative">
            {/* Floating Decoration Elements */}
            <div className="absolute -top-8 -left-8 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute -top-6 -right-6 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-bounce delay-300 opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-bounce delay-500 opacity-60"></div>
            <div className="absolute -bottom-8 -right-8 w-4 h-4 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-bounce delay-700 opacity-60"></div>
            
            {/* Rotating Ring Decoration */}
            <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 mx-auto animate-spin-slow">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-pink-400/30"></div>
            </div>
            
            {/* Pulsing Outer Ring */}
            <div className="absolute inset-0 w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full border border-purple-400/20 animate-ping"></div>
            
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-purple-500 p-1 animate-scale-in shadow-2xl relative">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-indigo-900 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face" 
                  alt="Neeraj Madkar" 
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 animate-pulse"></div>
            </div>
            
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 bg-emerald-400 rounded-full animate-pulse border-2 sm:border-4 border-slate-800 flex items-center justify-center">
              <div className="w-3 h-3 bg-emerald-600 rounded-full animate-ping"></div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-rose-300 via-pink-300 to-purple-400 bg-clip-text text-transparent leading-tight">
            Creative Developer
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Crafting digital experiences through 
            <span className="text-rose-400 font-semibold"> Video Editing</span>, 
            <span className="text-pink-400 font-semibold"> Graphics Design</span>, 
            <span className="text-purple-400 font-semibold"> Web Development</span>, 
            <span className="text-emerald-400 font-semibold"> AI Projects</span>, and 
            <span className="text-indigo-400 font-semibold"> Android Development</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="border-2 border-rose-400 hover:bg-rose-500/10 hover:border-rose-300 text-rose-400 hover:text-rose-300 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-transparent"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToSkills}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-200 p-2 rounded-full hover:bg-rose-500/20 text-rose-400"
        aria-label="Scroll to skills section"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
