import React from 'react';
import { User, Clock, Bookmark, History } from 'lucide-react';

const Profile: React.FC = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bookings: [
      {
        id: 1,
        venue: 'Blue Court Arena',
        date: '2025-03-15',
        time: '10:00 AM',
        status: 'Upcoming'
      },
      {
        id: 2,
        venue: 'Greenfield Football Ground',
        date: '2025-03-10',
        time: '2:00 PM',
        status: 'Completed'
      }
    ],
    savedVenues: [
      {
        id: 1,
        name: 'Ace Tennis Club',
        sport: 'Tennis'
      },
      {
        id: 2,
        name: 'Olympic Swimming Center',
        sport: 'Swimming'
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-4 rounded-full">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Booking History */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center mb-4">
            <History className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Booking History</h2>
          </div>
          <div className="space-y-4">
            {user.bookings.map(booking => (
              <div key={booking.id} className="border-b pb-4 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-800">{booking.venue}</h3>
                    <p className="text-sm text-gray-600">
                      {booking.date} at {booking.time}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    booking.status === 'Upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Venues */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Bookmark className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Saved Venues</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {user.savedVenues.map(venue => (
              <div key={venue.id} className="border rounded-lg p-4 hover:border-blue-500 transition-colors">
                <h3 className="font-medium text-gray-800">{venue.name}</h3>
                <p className="text-sm text-gray-600">{venue.sport}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;