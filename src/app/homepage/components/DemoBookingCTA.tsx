'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface DemoBookingCTAProps {
  className?: string;
}

const DemoBookingCTA = ({ className = '' }: DemoBookingCTAProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const demoFeatures = [
    {
      icon: 'PhoneIcon',
      title: 'Live AI Calling Demo',
      description: 'See our AI agents handle real customer interactions'
    },
    {
      icon: 'ChartBarIcon',
      title: 'ROI Calculator',
      description: 'Calculate your potential savings and efficiency gains'
    },
    {
      icon: 'CogIcon',
      title: 'Custom Integration',
      description: 'Explore how we integrate with your existing systems'
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Security Overview',
      description: 'Review our enterprise-grade security measures'
    }
  ];

  return (
    <section className={`py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See BTC Linx in Action
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Book a personalized demo and discover how our AI-powered solutions can transform your business operations in just 30 minutes.
            </p>

            {/* Demo Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {demoFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon 
                      name={feature.icon as any} 
                      size={16} 
                      className="text-primary-foreground" 
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm opacity-80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center">
                <Icon name="ClockIcon" size={16} className="mr-2" />
                30-minute demo
              </div>
              <div className="flex items-center">
                <Icon name="UserGroupIcon" size={16} className="mr-2" />
                No sales pressure
              </div>
              <div className="flex items-center">
                <Icon name="DocumentTextIcon" size={16} className="mr-2" />
                Custom ROI report
              </div>
            </div>
          </div>

          {/* Demo Booking Form */}
          <div className="bg-background rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Book Your Demo
              </h3>
              <p className="text-muted-foreground">
                Get started with a personalized demonstration
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input text-foreground placeholder-muted-foreground"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-soft hover:shadow-medium flex items-center justify-center"
                >
                  <Icon name="CalendarIcon" size={20} className="mr-2" />
                  Schedule Demo
                </button>

                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <Link
                    href="/ai-calling-solutions"
                    className="flex items-center hover:text-primary transition-colors duration-200"
                  >
                    <Icon name="PlayIcon" size={16} className="mr-1" />
                    Watch Video Demo
                  </Link>
                  <span>•</span>
                  <Link
                    href="/solutions-overview"
                    className="flex items-center hover:text-primary transition-colors duration-200"
                  >
                    <Icon name="DocumentTextIcon" size={16} className="mr-1" />
                    View Solutions
                  </Link>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckIcon" size={32} className="text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Demo Request Received!
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our team will contact you within 24 hours to schedule your personalized demonstration.
                </p>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <Icon name="ClockIcon" size={16} className="mr-2" />
                  Expected response time: 2-4 hours
                </div>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
                <div className="flex items-center">
                  <Icon name="ShieldCheckIcon" size={14} className="mr-1 text-success" />
                  SOC 2 Certified
                </div>
                <div className="flex items-center">
                  <Icon name="LockClosedIcon" size={14} className="mr-1 text-success" />
                  GDPR Compliant
                </div>
                <div className="flex items-center">
                  <Icon name="StarIcon" size={14} className="mr-1 text-accent" />
                  4.9/5 Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBookingCTA;