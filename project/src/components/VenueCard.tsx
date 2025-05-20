import React, { useState } from 'react';
import { Venue } from '../types';
import { Star, MapPin, Clock } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

interface VenueCardProps {
  venue: Venue;
}

const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  const availableSlots = venue.availableSlots.filter(slot => !slot.isBooked).length;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48">
        <img 
          src={venue.imageUrl} 
          alt={venue.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 m-3 bg-primary text-white px-2 py-1 text-sm rounded-md">
          ${venue.price}/hr
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-primary">{venue.name}</h3>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm">{venue.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{venue.sport}</p>
        
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="truncate">{venue.address}</span>
        </div>
        
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
          <span>
            {availableSlots > 0 ? (
              <span className="text-green-600 font-medium">{availableSlots} slots available today</span>
            ) : (
              <span className="text-red-500 font-medium">No slots available today</span>
            )}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {venue.facilities.slice(0, 3).map((facility, index) => (
            <span key={index} className="text-xs bg-gray-100 text-primary px-2 py-1 rounded-full">
              {facility}
            </span>
          ))}
          {venue.facilities.length > 3 && (
            <span className="text-xs bg-gray-100 text-primary px-2 py-1 rounded-full">
              +{venue.facilities.length - 3}
            </span>
          )}
        </div>
        
        <AnimatedButton className="w-full bg-primary text-white">
          Book Now
        </AnimatedButton>
      </div>
    </div>
  );
};

export default VenueCard;