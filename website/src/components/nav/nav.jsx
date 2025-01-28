import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Settings, User, BookOpen, Phone, Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: Settings, label: 'Services', to: '/services' },
    { icon: User, label: 'About Us', to: '/about' },
    { icon: Phone, label: 'Contact', to: '/contact' }
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <Settings className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="ml-3 text-xl font-bold text-white">
              Howard Electronics
            </span>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden focus:outline-none text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.to} 
                className="flex items-center space-x-2 hover:text-red-500 transition-colors py-2"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md font-medium transition-colors"
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-blue-900 shadow-lg border-t border-blue-800">
            <ul className="flex flex-col divide-y divide-blue-800">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to} 
                    className="flex items-center space-x-4 p-4 hover:bg-blue-800 transition-colors"
                    onClick={toggleMenu}
                  >
                    <item.icon className="h-6 w-6" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="block p-4 text-center bg-red-600 hover:bg-red-700 transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};



