'use client';

import React, { useState } from 'react';
// import Icon from '@/components/ui/AppIcon';
import Icon from '../../../components/ui/AppIcon';

interface CTASectionProps {
  onDemoRequest: () => void;
  onConsultationRequest: () => void;
}

const CTASection = ({ onDemoRequest, onConsultationRequest }: CTASectionProps) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block text-accent">Calling Operations?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join hundreds of companies that have revolutionized their customer interactions 
              with our AI calling platform. Start your transformation today.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={onDemoRequest}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Icon name="PlayIcon" size={20} className="mr-2" />
                Watch Live Demo
              </button>
              <button
                onClick={onConsultationRequest}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200"
              >
                <Icon name="CalendarIcon" size={20} className="mr-2" />
                Schedule Consultation
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={16} />
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheckIcon" size={16} />
                <span>Enterprise security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ClockIcon" size={16} />
                <span>24/7 support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CurrencyDollarIcon" size={16} />
                <span>No setup fees</span>
              </div>
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
                <Icon name="EnvelopeIcon" size={20} className="mr-2" />
                Stay Updated
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Get the latest AI calling insights and industry updates delivered to your inbox.
              </p>
              
              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="text-center py-4">
                  <Icon name="CheckCircleIcon" size={32} className="text-accent mx-auto mb-2" />
                  <p className="text-white font-medium">Successfully subscribed!</p>
                </div>
              )}
            </div>

            {/* Resource Download */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
                <Icon name="DocumentArrowDownIcon" size={20} className="mr-2" />
                Free Resources
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Download our comprehensive guide to AI calling implementation and best practices.
              </p>
              <button className="w-full py-2 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Download Guide
              </button>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
                <Icon name="PhoneIcon" size={20} className="mr-2" />
                Talk to Expert
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Speak directly with our AI specialists to discuss your specific requirements.
              </p>
              <div className="space-y-2 text-sm text-white/90">
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="PhoneIcon" size={14} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="EnvelopeIcon" size={14} />
                  <span>ai-solutions@btclinx.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-16 text-center">
            <p className="text-white/70 text-sm">
              Trusted by 500+ companies worldwide • SOC 2 Type II Certified • GDPR Compliant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;