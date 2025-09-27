import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesOverview />
    </div>
  );
};

export default HomePage;