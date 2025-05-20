import React from 'react';
import VenueCard from './VenueCard';
import { venues } from '../data/venues';

const FeaturedVenues: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Venues</h2>
          <a href="/venues" className="text-blue-600 hover:underline">View All</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.slice(0, 3).map(venue => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenues;