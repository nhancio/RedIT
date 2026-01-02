import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Placements', href: '#placements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-black/95 to-gray-900/95 backdrop-blur-sm z-50 border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/IT_training-1.png" 
              alt="RedDot IT Training Logo" 
              className="h-12 w-auto sm:h-16 md:h-20"
              onError={(e) => {
                // Fallback if image doesn't load
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone className="w-4 h-4" />
              <a href="tel:+917095288950" className="hover:text-red-400 transition-colors">+91 70952 88950</a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@reddotit.com" className="hover:text-red-400 transition-colors">info@reddotit.com</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-red-500/20">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-red-500/10 rounded-lg transition-all text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-red-500/20 px-4 space-y-2">
              <a href="tel:+917095288950" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-red-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 70952 88950</span>
              </a>
              <a href="mailto:info@reddotit.com" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-red-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@reddotit.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;