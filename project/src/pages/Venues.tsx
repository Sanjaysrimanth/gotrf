import React from 'react';
import { venues } from '../data/venues';
import VenueCard from '../components/VenueCard';
import { Filter, Search } from 'lucide-react';

const Venues: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">All Venues</h1>
        
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search venues..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map(venue => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </div>
  );
};

export default Venues;