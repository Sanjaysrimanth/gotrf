import React from 'react';
import { Search, Calendar, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-10 w-10 text-blue-600" />,
    title: 'Find a Venue',
    description: 'Search for sports venues based on your location, preferred sport, and availability.'
  },
  {
    icon: <Calendar className="h-10 w-10 text-blue-600" />,
    title: 'Book a Slot',
    description: 'Select your preferred date and time slot and reserve it instantly.'
  },
  {
    icon: <CreditCard className="h-10 w-10 text-blue-600" />,
    title: 'Pay & Play',
    description: 'Complete your payment securely online and enjoy your game!'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center relative">
              {/* Step number badge */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              
              <div className="flex justify-center mb-4 mt-4">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;