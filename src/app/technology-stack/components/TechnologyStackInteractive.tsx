'use client';

import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import PartnershipSection from './PartnershipSection';
import TechnologyShowcase from './TechnologyShowcase';
import ArchitectureSection from './ArchitectureSection';
import IntegrationSection from './IntegrationSection';
import CTASection from './CTASection';

interface TechnologyStackInteractiveProps {
  className?: string;
}

const TechnologyStackInteractive = ({ className = '' }: TechnologyStackInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`min-h-screen bg-background ${className}`}>
        {/* Loading skeleton that matches server render */}
        <div className="pt-16">
          <HeroSection />
          <PartnershipSection />
          <div className="py-20 lg:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="animate-pulse">
                <div className="h-8 bg-muted rounded-lg w-1/3 mx-auto mb-4"></div>
                <div className="h-12 bg-muted rounded-lg w-2/3 mx-auto mb-8"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-64 bg-muted rounded-2xl"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ArchitectureSection />
          <div className="py-20 lg:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="animate-pulse">
                <div className="h-8 bg-muted rounded-lg w-1/3 mx-auto mb-4"></div>
                <div className="h-12 bg-muted rounded-lg w-2/3 mx-auto mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-48 bg-muted rounded-2xl"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <CTASection />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <div className="pt-16">
        <HeroSection />
        <PartnershipSection />
        <TechnologyShowcase />
        <ArchitectureSection />
        <IntegrationSection />
        <CTASection />
      </div>
    </div>
  );
};

export default TechnologyStackInteractive;