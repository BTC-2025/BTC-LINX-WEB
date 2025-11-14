'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import MissionVisionSection from './MissionVisionSection';
import LeadershipSection from './LeadershipSection';
import TechnologyPhilosophySection from './TechnologyPhilosophySection';
import PartnershipsSection from './PartnershipsSection';
import TestimonialsSection from './TestimonialsSection';
import CompanyTimelineSection from './CompanyTimelineSection';
import CultureCareersSection from './CultureCareersSection';

interface AboutUsInteractiveProps {
  className?: string;
}

const AboutUsInteractive = ({ className = '' }: AboutUsInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`min-h-screen bg-background ${className}`}>
        <HeroSection />
        <MissionVisionSection />
        <LeadershipSection />
        <TechnologyPhilosophySection />
        <PartnershipsSection />
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto"></div>
              <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto"></div>
            </div>
          </div>
        </div>
        <CompanyTimelineSection />
        <div className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto"></div>
              <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <HeroSection />
      <MissionVisionSection />
      <LeadershipSection />
      <TechnologyPhilosophySection />
      <PartnershipsSection />
      <TestimonialsSection />
      <CompanyTimelineSection />
      <CultureCareersSection />
    </div>
  );
};

export default AboutUsInteractive;