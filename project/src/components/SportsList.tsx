import React from 'react';
import { sports } from '../data/sports';
import { Tent as Tennis, FolderRoot as Football, ShoppingBasket as Basketball, School as Pool, Brackets as Racquet, Ticket as Cricket, Wallet as Volleyball, Table as TableTennis } from 'lucide-react';

const getSportIcon = (iconName: string) => {
  switch(iconName) {
    case 'tennis':
      return <Tennis className="h-8 w-8" />;
    case 'football':
      return <Football className="h-8 w-8" />;
    case 'basketball':
      return <Basketball className="h-8 w-8" />;
    case 'swimming-pool':
      return <Pool className="h-8 w-8" />;
    case 'badminton':
      return <Racquet className="h-8 w-8" />;
    case 'cricket':
      return <Cricket className="h-8 w-8" />;
    case 'volleyball':
      return <Volleyball className="h-8 w-8" />;
    case 'table-tennis':
      return <TableTennis className="h-8 w-8" />;
    default:
      return <Basketball className="h-8 w-8" />;
  }
};

const SportsList: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Popular Sports</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {sports.map((sport) => (
            <div 
              key={sport.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center cursor-pointer hover:bg-blue-50"
            >
              <div className="flex justify-center mb-3 text-blue-600">
                {getSportIcon(sport.icon)}
              </div>
              <h3 className="font-medium text-gray-800">{sport.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsList;