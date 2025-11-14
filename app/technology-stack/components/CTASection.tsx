import React from 'react';
import Link from 'next/link';
// import Icon from '@/components/ui/AppIcon';

import Icon from '../../../components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-blue-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your
            <span className="block text-accent">Technology Infrastructure?</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join hundreds of enterprises who have modernized their technology stack with our comprehensive solutions. Get started with a personalized consultation and technical assessment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/solutions-overview"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-medium hover:shadow-large"
            >
              <Icon name="RocketLaunchIcon" size={20} className="mr-3" />
              Start Your Journey
            </Link>
            
            <Link
              href="/ai-calling-solutions"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="PlayIcon" size={20} className="mr-3" />
              Watch Demo
            </Link>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="PhoneIcon" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Schedule a Call</h3>
              <p className="text-white/70 text-sm mb-4">
                Speak with our technology experts about your specific requirements and challenges.
              </p>
              <Link
                href="/solutions-overview"
                className="text-accent hover:text-white transition-colors duration-200 font-medium"
              >
                Book Consultation →
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="DocumentTextIcon" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Get Documentation</h3>
              <p className="text-white/70 text-sm mb-4">
                Access comprehensive technical documentation and implementation guides.
              </p>
              <Link
                href="/solutions-overview"
                className="text-accent hover:text-white transition-colors duration-200 font-medium"
              >
                Download Resources →
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="BeakerIcon" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Try Our Platform</h3>
              <p className="text-white/70 text-sm mb-4">
                Experience our technology stack with a personalized demo environment.
              </p>
              <Link
                href="/ai-calling-solutions"
                className="text-accent hover:text-white transition-colors duration-200 font-medium"
              >
                Request Demo →
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheckIcon" size={20} />
                <span className="text-sm">SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="LockClosedIcon" size={20} />
                <span className="text-sm">ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckBadgeIcon" size={20} />
                <span className="text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ClockIcon" size={20} />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;