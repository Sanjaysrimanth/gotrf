import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import SportsList from '../components/SportsList';
import FeaturedVenues from '../components/FeaturedVenues';
import Testimonials from '../components/Testimonials';
import EmailSubscription from '../components/EmailSubscription';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <SportsList />
      <FeaturedVenues />
      <Testimonials />
      <EmailSubscription />
    </>
  );
};

export default Home;