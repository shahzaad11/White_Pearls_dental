import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className={`ml-2 text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>
            White Pearls
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>
            {isMenuOpen ? (
              <>
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </>
            ) : (
              <>
                <path d="M4 12h16"></path>
                <path d="M4 6h16"></path>
                <path d="M4 18h16"></path>
              </>
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`text-sm font-medium hover:text-secondary-600 transition-colors ${
                    scrolled ? 'text-gray-700' : 'text-gray-800'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#appointment" className="btn-primary ml-6">
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 md:hidden animate-fade-in">
            <ul className="flex flex-col space-y-3 px-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-secondary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a 
                  href="#appointment"
                  className="btn-primary w-full flex justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;