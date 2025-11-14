'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import DemoSection from './DemoSection';
import IntegrationsSection from './IntegrationsSection';
import ROICalculator from './ROICalculator';
import CaseStudiesSection from './CaseStudiesSection';
import CTASection from './CTASection';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'demo' | 'consultation';
}

const DemoModal = ({ isOpen, onClose, type }: DemoModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {type === 'demo' ? 'Request Live Demo' : 'Schedule Consultation'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your specific needs..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
                {type === 'demo' ? 'Request Demo' : 'Schedule Consultation'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Request Submitted!
            </h3>
            <p className="text-muted-foreground">
              We'll contact you within 24 hours to schedule your {type === 'demo' ? 'demo' : 'consultation'}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const AICallingSolutionsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'consultation';
  }>({
    isOpen: false,
    type: 'demo'
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleDemoClick = () => {
    if (!isHydrated) return;
    setModalState({ isOpen: true, type: 'demo' });
  };

  const handleConsultationClick = () => {
    if (!isHydrated) return;
    setModalState({ isOpen: true, type: 'consultation' });
  };

  const handleCloseModal = () => {
    if (!isHydrated) return;
    setModalState({ isOpen: false, type: 'demo' });
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-white">
        <div className="animate-pulse">
          <div className="h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
          <div className="h-96 bg-white"></div>
          <div className="h-96 bg-slate-50"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeroSection 
        onDemoClick={handleDemoClick}
        onConsultationClick={handleConsultationClick}
      />
      <FeaturesSection />
      <DemoSection onBookDemo={handleDemoClick} />
      <IntegrationsSection />
      <ROICalculator />
      <CaseStudiesSection />
      <CTASection 
        onDemoRequest={handleDemoClick}
        onConsultationRequest={handleConsultationClick}
      />
      
      <DemoModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
      />
    </>
  );
};

export default AICallingSolutionsInteractive;