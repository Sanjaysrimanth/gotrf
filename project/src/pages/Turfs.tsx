import React from 'react';
import { sports } from '../data/sports';
import { MapPin, Filter } from 'lucide-react';

const Turfs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Sports Turfs</h1>
        <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
          <Filter className="h-5 w-5 mr-2" />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sports.map(sport => (
          <div key={sport.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{sport.name}</h2>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Multiple locations available</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                View Turfs
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Turfs;