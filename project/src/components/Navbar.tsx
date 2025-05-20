import React, { useState } from 'react';
import { Menu, X, User, Search, CalendarClock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedButton from './AnimatedButton';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary-container">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <CalendarClock className="h-8 w-8 text-white" />
            <span className="ml-2 text-2xl font-bold text-white">GOTRF</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-menu text-white hover:text-menu-hover transition-all duration-300"
            >
              Home
            </Link>
            <Link 
              to="/turfs" 
              className="text-menu text-white hover:text-menu-hover transition-all duration-300"
            >
              Turfs
            </Link>
            <Link 
              to="/venues" 
              className="text-menu text-white hover:text-menu-hover transition-all duration-300"
            >
              Venues
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search venues..." 
                className="pl-10 pr-4 py-2 rounded-lg bg-white text-primary"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Link to="/profile">
              <div className="bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <User className="h-6 w-6 text-primary" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary-container mt-2 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-menu text-white hover:text-menu-hover transition-all duration-300"
              >
                Home
              </Link>
              <Link 
                to="/turfs" 
                className="text-menu text-white hover:text-menu-hover transition-all duration-300"
              >
                Turfs
              </Link>
              <Link 
                to="/venues" 
                className="text-menu text-white hover:text-menu-hover transition-all duration-300"
              >
                Venues
              </Link>
              <Link 
                to="/profile" 
                className="text-menu text-white hover:text-menu-hover transition-all duration-300"
              >
                Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;