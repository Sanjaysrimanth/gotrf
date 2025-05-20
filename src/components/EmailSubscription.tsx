import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface SubscriptionState {
  email: string;
  status: 'idle' | 'submitting' | 'success' | 'error';
  error?: string;
}

const EmailSubscription: React.FC = () => {
  const [state, setState] = useState<SubscriptionState>({
    email: '',
    status: 'idle'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!state.email) {
      setState(prev => ({ ...prev, error: 'Email is required' }));
      return;
    }

    setState(prev => ({ ...prev, status: 'submitting', error: undefined }));

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setState(prev => ({ ...prev, status: 'success', email: '' }));
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setState(prev => ({ ...prev, status: 'idle' }));
      }, 5000);
    } catch (error) {
      setState(prev => ({
        ...prev,
        status: 'error',
        error: 'Failed to subscribe. Please try again.'
      }));
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
              {state.status !== 'success' ? (
                <form onSubmit={handleSubmit} className="w-full">
                  <p className="text-gray-700 mb-6 md:hidden">
                    Subscribe to our newsletter to get the latest updates on new venues, 
                    special offers, and exclusive promotions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-grow">
                      <input
                        type="email"
                        value={state.email}
                        onChange={(e) => setState(prev => ({ ...prev, email: e.target.value, error: undefined }))}
                        placeholder="Enter your email"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          state.error ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        required
                      />
                      {state.error && (
                        <p className="mt-1 text-sm text-red-500">{state.error}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={state.status === 'submitting'}
                      className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors ${
                        state.status === 'submitting'
                          ? 'opacity-75 cursor-not-allowed'
                          : 'hover:bg-blue-700'
                      }`}
                    >
                      {state.status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
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