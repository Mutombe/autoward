import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Settings, User, BookOpen, Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: Settings, label: 'Services', to: '/services' },
    { icon: User, label: 'About Us', to: '/about' },
    { icon: BookOpen, label: 'Contact', to: '/contact' }
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center text-xl font-bold">
          Autoward Electronics
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.to} 
                className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <ul className="flex flex-col divide-y">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to} 
                    className="flex items-center space-x-4 p-4 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    <item.icon className="h-6 w-6" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};


