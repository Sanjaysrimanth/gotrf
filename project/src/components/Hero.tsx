import React from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Find and Book Sports Venues Near You
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discover amazing sports facilities, book your slot, and play your favorite game with friends
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-lg animate-slide-up">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 mb-3 md:mb-0 md:mr-3 flex-grow">
                <Search className="h-5 w-5 text-gray-500 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search by sport..." 
                  className="bg-transparent w-full focus:outline-none text-gray-700"
                />
              </div>
              
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 mb-3 md:mb-0 md:mr-3 flex-grow">
                <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="bg-transparent w-full focus:outline-none text-gray-700"
                />
              </div>
              
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 mb-3 md:mb-0 md:mr-3">
                <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                <input 
                  type="date" 
                  className="bg-transparent focus:outline-none text-gray-700"
                />
              </div>
              
              <AnimatedButton className="w-full md:w-auto">
                Search
              </AnimatedButton>
            </div>
          </div>
          
          <div className="mt-6 text-sm flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-2 sm:space-y-0">
            <span className="flex items-center justify-center">
              <span className="bg-blue-400 rounded-full h-2 w-2 inline-block mr-2"></span>
              100+ Venues
            </span>
            <span className="flex items-center justify-center">
              <span className="bg-blue-400 rounded-full h-2 w-2 inline-block mr-2"></span>
              8+ Sports
            </span>
            <span className="flex items-center justify-center">
              <span className="bg-blue-400 rounded-full h-2 w-2 inline-block mr-2"></span>
              Instant Booking
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;