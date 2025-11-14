'use client';

import React, { useState } from 'react';
// import Icon from '@/components/ui/AppIcon';
import Icon from '../../../components/ui/AppIcon';

interface CTASectionProps {
  onGetStarted: () => void;
  onScheduleDemo: () => void;
  onDownloadGuide: () => void;
}

const CTASection = ({ onGetStarted, onScheduleDemo, onDownloadGuide }: CTASectionProps) => {
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

  const quickActions = [
    {
      title: 'Start Your Journey',
      description: 'Get personalized recommendations based on your business needs',
      icon: 'RocketLaunchIcon',
      action: onGetStarted,
      buttonText: 'Get Started',
      color: 'bg-primary'
    },
    {
      title: 'See It In Action',
      description: 'Watch a live demonstration of our AI-powered solutions',
      icon: 'PlayIcon',
      action: onScheduleDemo,
      buttonText: 'Schedule Demo',
      color: 'bg-success'
    },
    {
      title: 'Implementation Guide',
      description: 'Download our comprehensive guide to solution implementation',
      icon: 'DocumentArrowDownIcon',
      action: onDownloadGuide,
      buttonText: 'Download Guide',
      color: 'bg-accent'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Join hundreds of enterprises that have already revolutionized their operations with our AI-powered solutions.
          </p>
          
          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto mb-8">
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 disabled:opacity-50"
              >
                {isSubscribed ? (
                  <Icon name="CheckIcon" size={20} />
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
            {isSubscribed && (
              <p className="text-sm text-success mt-2 animate-fade-in">
                Thank you! You'll receive our latest insights and updates.
              </p>
            )}
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 p-8 text-center group"
            >
              <div className={`w-16 h-16 ${action.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <Icon name={action.icon as any} size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {action.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {action.description}
              </p>
              
              <button
                onClick={action.action}
                className={`w-full ${action.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105`}
              >
                {action.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-xl shadow-soft p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Trusted by Industry Leaders
            </h3>
            <p className="text-muted-foreground">
              Join the growing community of enterprises transforming with BTC Linx
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">$50M+</div>
              <div className="text-sm text-muted-foreground">Client Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>

          {/* Security Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-6 border-t border-border">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="ShieldCheckIcon" size={20} className="text-success" />
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="LockClosedIcon" size={20} className="text-success" />
              <span>ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="CheckBadgeIcon" size={20} className="text-success" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="GlobeAltIcon" size={20} className="text-success" />
              <span>Global Infrastructure</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have questions? Our solution experts are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+1-800-BTC-LINX"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
            >
              <Icon name="PhoneIcon" size={20} className="mr-2" />
              +1 (800) BTC-LINX
            </a>
            <span className="hidden sm:block text-muted-foreground">|</span>
            <a
              href="mailto:solutions@btclinx.com"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
            >
              <Icon name="EnvelopeIcon" size={20} className="mr-2" />
              solutions@btclinx.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;