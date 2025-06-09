
const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 border-t border-slate-700 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-1">
              Portfolio
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              Creative Developer & Digital Artist
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 Portfolio. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
