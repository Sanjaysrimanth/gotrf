import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CalendarClock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-4">
              <CalendarClock className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold text-blue-400">PGOTRF</span>
            </div>
            <p className="text-gray-400 mb-4">
              Find and book sports venues with ease. Play your favorite sports anytime, anywhere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <RouterLink to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/venues" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Find Venues
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/sports" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Sports
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/bookings" className="text-gray-400 hover:text-blue-400 transition-colors">
                  My Bookings
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </RouterLink>
              </li>
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Sports</h3>
            <ul className="space-y-2">
              <li>
                <RouterLink to="/sports/football" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Football
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/sports/basketball" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Basketball
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/sports/tennis" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Tennis
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/sports/cricket" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Cricket
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/sports/badminton" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Badminton
                </RouterLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-400">123 Sports Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">support@pgotrf.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PGOTRF. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <RouterLink to="/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </RouterLink>
            <RouterLink to="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </RouterLink>
            <RouterLink to="/faq" className="hover:text-blue-400 transition-colors">
              FAQs
            </RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;