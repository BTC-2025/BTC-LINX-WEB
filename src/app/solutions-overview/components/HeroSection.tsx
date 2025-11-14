import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onGetStarted: () => void;
  onViewDemo: () => void;
}

const HeroSection = ({ onGetStarted, onViewDemo }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Icon name="SparklesIcon" size={16} className="mr-2" />
            Comprehensive AI-Powered Solutions
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transform Your Business with
            <span className="block text-primary">Intelligent Solutions</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered enterprise solutions designed to automate processes, 
            enhance security, and drive digital transformation across your organization.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Icon name="RocketLaunchIcon" size={20} className="mr-2" />
              Get Started Today
            </button>
            <button
              onClick={onViewDemo}
              className="inline-flex items-center px-8 py-4 bg-white text-foreground border border-border rounded-lg font-semibold hover:bg-muted transition-all duration-200"
            >
              <Icon name="PlayIcon" size={20} className="mr-2" />
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;