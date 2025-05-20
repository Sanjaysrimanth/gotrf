import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    sport: 'Tennis',
    text: 'PGOTRF made it so easy to find and book tennis courts. No more calling around or waiting for email responses!',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120',
    rating: 5
  },
  {
    id: '2',
    name: 'Mark Thompson',
    sport: 'Football',
    text: 'I organize weekly football games with friends and this platform has been a game-changer for finding available fields.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120',
    rating: 4
  },
  {
    id: '3',
    name: 'Jessica Lee',
    sport: 'Basketball',
    text: 'The booking process is smooth and the venue descriptions are accurate. Highly recommend for any sports enthusiast!',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.sport} Player</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;