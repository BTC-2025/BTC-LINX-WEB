'use client';

import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import IndustrySelector from './IndustrySelector';
import ClientSuccessMetrics from './ClientSuccessMetrics';
import TrustIndicators from './TrustIndicators';
import DemoBookingCTA from './DemoBookingCTA';

interface HomepageInteractiveProps {
  className?: string;
}

const HomepageInteractive = ({ className = '' }: HomepageInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`min-h-screen bg-background ${className}`}>
        <div className="animate-pulse">
          <div className="h-screen bg-surface"></div>
          <div className="h-96 bg-muted"></div>
          <div className="h-96 bg-background"></div>
          <div className="h-96 bg-surface"></div>
          <div className="h-96 bg-primary/10"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <HeroSection />
      <IndustrySelector />
      <ClientSuccessMetrics />
      <TrustIndicators />
      <DemoBookingCTA />
    </div>
  );
};

export default HomepageInteractive;