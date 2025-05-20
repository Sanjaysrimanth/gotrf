import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const EmailSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would call an API to handle the subscription
      setIsSubscribed(true);
      setEmail('');
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };

  return (
    <section className="bg-blue-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="bg-blue-600 text-white p-8 md:w-2/5">
              <div className="flex items-center mb-4">
                <Mail className="h-8 w-8 mr-2" />
                <h2 className="text-2xl font-bold">Stay Updated</h2>
              </div>
              <p className="opacity-90 mb-6">
                Subscribe to our newsletter to get the latest updates on new venues, 
                special offers, and exclusive promotions.
              </p>
              <div className="hidden md:block">
                <div className="flex items-center mb-3">
                  <div className="h-2 w-2 rounded-full bg-blue-300 mr-2"></div>
                  <span>Weekly sport recommendations</span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="h-2 w-2 rounded-full bg-blue-300 mr-2"></div>
                  <span>Early access to special deals</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-300 mr-2"></div>
                  <span>Exclusive member discounts</span>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:w-3/5 flex items-center">
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="w-full">
                  <p className="text-gray-700 mb-6 md:hidden">
                    Subscribe to our newsletter to get the latest updates on new venues, 
                    special offers, and exclusive promotions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <div className="text-center w-full">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You for Subscribing!</h3>
                  <p className="text-gray-600">
                    You've been successfully added to our mailing list. 
                    Look out for exciting updates in your inbox soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;