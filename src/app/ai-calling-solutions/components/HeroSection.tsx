import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onDemoClick: () => void;
  onConsultationClick: () => void;
}

const HeroSection = ({ onDemoClick, onConsultationClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Icon name="SparklesIcon" size={16} className="mr-2" />
                AI-Powered Calling Solutions
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your
                <span className="text-primary block">BPO Operations</span>
                with Intelligent AI
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Revolutionize customer interactions with our advanced AI calling platform. 
                Automate workflows, enhance productivity, and deliver exceptional customer 
                experiences at scale.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3x</div>
                <div className="text-sm text-muted-foreground">Faster Response</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onDemoClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">

                <Icon name="PlayIcon" size={20} className="mr-2" />
                Watch Live Demo
              </button>
              <button
                onClick={onConsultationClick}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200">

                <Icon name="CalendarIcon" size={20} className="mr-2" />
                Book Consultation
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheckIcon" size={20} className="text-success" />
                <span className="text-sm text-muted-foreground">SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="LockClosedIcon" size={20} className="text-success" />
                <span className="text-sm text-muted-foreground">GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <AppImage
                src="https://images.unsplash.com/photo-1581618074289-3f208289c7d6"
                alt="Modern call center with AI technology displays showing analytics dashboards and automated workflow systems"
                className="w-full h-80 object-cover rounded-lg" />

              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live AI Agent</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Processing 1,247 calls</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-border">
                <div className="text-sm font-medium text-foreground">Response Time</div>
                <div className="text-2xl font-bold text-primary">0.3s</div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;