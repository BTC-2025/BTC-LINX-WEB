'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import SolutionsGrid from './SolutionsGrid';
import ROICalculator from './ROICalculator';
import ComparisonMatrix from './ComparisonMatrix';
import IntegrationShowcase from './IntegrationShowcase';
import CTASection from './CTASection';

const SolutionsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-96 bg-muted"></div>
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-muted rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleGetStarted = () => {
    setActiveSection('solutions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDemo = () => {
    setActiveSection('demo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLearnMore = (solutionId: string) => {
    setSelectedSolution(solutionId);
    setActiveSection('comparison');
  };

  const handleRequestDemo = (solutionId: string) => {
    setSelectedSolution(solutionId);
    setActiveSection('demo');
  };

  const handleCalculateROI = (results: any) => {
    console.log('ROI Results:', results);
  };

  const handleSelectSolution = (solutionId: string) => {
    setSelectedSolution(solutionId);
  };

  const handleLearnMoreIntegration = (integrationId: string) => {
    console.log('Learn more about integration:', integrationId);
  };

  const handleScheduleDemo = () => {
    setActiveSection('demo');
  };

  const handleDownloadGuide = () => {
    console.log('Downloading implementation guide...');
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        onGetStarted={handleGetStarted}
        onViewDemo={handleViewDemo}
      />
      
      <SolutionsGrid 
        onLearnMore={handleLearnMore}
        onRequestDemo={handleRequestDemo}
      />
      
      <ROICalculator 
        onCalculate={handleCalculateROI}
      />
      
      <ComparisonMatrix 
        onSelectSolution={handleSelectSolution}
      />
      
      <IntegrationShowcase 
        onLearnMore={handleLearnMoreIntegration}
      />
      
      <CTASection 
        onGetStarted={handleGetStarted}
        onScheduleDemo={handleScheduleDemo}
        onDownloadGuide={handleDownloadGuide}
      />
    </div>
  );
};

export default SolutionsInteractive;