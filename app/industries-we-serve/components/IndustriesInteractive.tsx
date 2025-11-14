'use client';

import React from 'react';
import HeroSection from './HeroSection';
import IndustryGrid from './IndustryGrid';
import CaseStudySection from './CaseStudySection';
import ROICalculator from './ROICalculator';
import ComplianceSection from './ComplianceSection';
import CTASection from './CTASection';

interface IndustriesInteractiveProps {
  className?: string;
}

const IndustriesInteractive = ({ className = '' }: IndustriesInteractiveProps) => {
  return (
    <div className={className}>
      <HeroSection />
      <IndustryGrid />
      <CaseStudySection />
      <ROICalculator />
      <ComplianceSection />
      <CTASection />
    </div>
  );
};

export default IndustriesInteractive;