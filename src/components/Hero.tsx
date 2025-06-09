
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 to-purple-100/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(244,114,182,0.15)_1px,transparent_0)] bg-[size:50px_50px] animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Professional Avatar */}
          <div className="mb-6 sm:mb-8 relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 p-1 animate-scale-in">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
                <span className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">YN</span>
              </div>
            </div>
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-emerald-400 rounded-full animate-pulse border-2 sm:border-4 border-background"></div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            Creative Developer
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Crafting digital experiences through 
            <span className="text-pink-500 font-semibold"> Video Editing</span>, 
            <span className="text-rose-500 font-semibold"> Graphics Design</span>, 
            <span className="text-purple-500 font-semibold"> Web Development</span>, 
            <span className="text-emerald-500 font-semibold"> AI Projects</span>, and 
            <span className="text-orange-500 font-semibold"> Android Development</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 hover:from-pink-600 hover:via-rose-500 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="border-2 border-pink-300 hover:bg-pink-50 hover:border-pink-400 text-pink-600 hover:text-pink-700 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToSkills}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-200 p-2 rounded-full hover:bg-pink-100/50"
        aria-label="Scroll to skills section"
      >
        <ChevronDown className="text-muted-foreground" size={28} />
      </button>
    </section>
  );
};

export default Hero;
