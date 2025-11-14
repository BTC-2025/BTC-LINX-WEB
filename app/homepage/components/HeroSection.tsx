import React from 'react';
import Link from 'next/link';
// import AppImage from '@/components/ui/AppImage';
// import Icon from '@/components/ui/AppIcon';
import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-muted ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Icon name="SparklesIcon" size={16} className="mr-2" />
              AI-Powered Enterprise Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Intelligent Automation That{' '}
              <span className="text-primary">Adapts</span> To Your Business
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Where AI meets infrastructure to create competitive advantage. Transform your enterprise with intelligent connectivity solutions that learn, evolve, and deliver measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                href="/ai-calling-solutions"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-soft hover:shadow-medium">

                <Icon name="PlayIcon" size={20} className="mr-2" />
                See AI Demo
              </Link>
              <Link
                href="/solutions-overview"
                className="inline-flex items-center px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all duration-200">

                Explore Solutions
                <Icon name="ArrowRightIcon" size={20} className="ml-2" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center">
                <Icon name="ShieldCheckIcon" size={16} className="mr-2 text-success" />
                SOC 2 Certified
              </div>
              <div className="flex items-center">
                <Icon name="ClockIcon" size={16} className="mr-2 text-success" />
                99.9% Uptime
              </div>
              <div className="flex items-center">
                <Icon name="UsersIcon" size={16} className="mr-2 text-success" />
                500+ Enterprises
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <AppImage
                src="https://images.unsplash.com/photo-1662638600507-0846616ec508"
                alt="Modern office workspace with multiple monitors displaying AI analytics dashboards and network infrastructure diagrams"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl" />

              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-medium animate-scale-in">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">AI Systems</p>
                    <p className="text-xs text-muted-foreground">Online & Learning</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-medium animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">98.7%</p>
                  <p className="text-xs text-muted-foreground">Automation Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDownIcon" size={24} className="text-muted-foreground" />
      </div>
    </section>);

};

export default HeroSection;