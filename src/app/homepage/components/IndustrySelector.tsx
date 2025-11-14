'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  stats: {
    efficiency: string;
    savings: string;
    implementation: string;
  };
}

interface IndustrySelectorProps {
  className?: string;
}

const IndustrySelector = ({ className = '' }: IndustrySelectorProps) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('bpo');

  const industries: Industry[] = [
  {
    id: 'bpo',
    name: 'BPO & Call Centers',
    description: 'Transform customer interactions with AI-powered calling solutions that reduce costs by up to 60% while improving customer satisfaction.',
    icon: 'PhoneIcon',
    image: "https://images.unsplash.com/photo-1703589535082-ba3f4fbfcd85",
    alt: 'Professional call center agent wearing headset working at modern workstation with multiple monitors',
    stats: {
      efficiency: '60% Cost Reduction',
      savings: '$2M+ Annual Savings',
      implementation: '30-Day Setup'
    }
  },
  {
    id: 'finance',
    name: 'Financial Services',
    description: 'Secure, compliant automation solutions for banking, insurance, and fintech companies with enterprise-grade security.',
    icon: 'BanknotesIcon',
    image: "https://images.unsplash.com/photo-1639539232941-8127a1c64934",
    alt: 'Modern banking office interior with glass walls and financial professionals working on digital trading platforms',
    stats: {
      efficiency: '45% Faster Processing',
      savings: '99.9% Security Score',
      implementation: '45-Day Setup'
    }
  },
  {
    id: 'telecom',
    name: 'Telecommunications',
    description: 'Network automation and infrastructure management solutions that scale with your growing telecommunications business.',
    icon: 'SignalIcon',
    image: "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a",
    alt: 'Telecommunications server room with fiber optic cables and network equipment racks illuminated in blue light',
    stats: {
      efficiency: '70% Network Efficiency',
      savings: '40% OpEx Reduction',
      implementation: '60-Day Setup'
    }
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'HIPAA-compliant automation solutions for patient communication, appointment scheduling, and administrative workflows.',
    icon: 'HeartIcon',
    image: "https://images.unsplash.com/photo-1713600025722-f17601622fb4",
    alt: 'Modern hospital corridor with medical professionals using digital tablets and advanced healthcare technology systems',
    stats: {
      efficiency: '50% Admin Reduction',
      savings: 'HIPAA Compliant',
      implementation: '90-Day Setup'
    }
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Student engagement and administrative automation solutions for universities, schools, and online learning platforms.',
    icon: 'AcademicCapIcon',
    image: "https://images.unsplash.com/photo-1682371693398-5966063729ad",
    alt: 'University lecture hall with students using laptops and digital learning platforms on large interactive displays',
    stats: {
      efficiency: '35% Engagement Boost',
      savings: '25% Cost Savings',
      implementation: '45-Day Setup'
    }
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Customer support automation and inventory management solutions that scale with your online business growth.',
    icon: 'ShoppingCartIcon',
    image: "https://images.unsplash.com/photo-1684695747561-9372850cf165",
    alt: 'Modern e-commerce fulfillment center with automated sorting systems and workers managing digital inventory systems',
    stats: {
      efficiency: '80% Query Resolution',
      savings: '24/7 Availability',
      implementation: '21-Day Setup'
    }
  }];


  const selectedIndustryData = industries.find((industry) => industry.id === selectedIndustry) || industries[0];

  return (
    <section className={`py-20 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tailored Solutions for Every Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how BTC Linx transforms businesses across sectors with intelligent automation solutions designed for your specific industry needs.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((industry) =>
          <button
            key={industry.id}
            onClick={() => setSelectedIndustry(industry.id)}
            className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
            selectedIndustry === industry.id ?
            'bg-primary text-primary-foreground shadow-medium' :
            'bg-background text-foreground hover:bg-muted border border-border'}`
            }>

              <Icon
              name={industry.icon as any}
              size={20}
              className="mr-2" />

              <span className="hidden sm:inline">{industry.name}</span>
              <span className="sm:hidden">{industry.name.split(' ')[0]}</span>
            </button>
          )}
        </div>

        {/* Selected Industry Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Icon
                  name={selectedIndustryData.icon as any}
                  size={24}
                  className="text-primary" />

              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {selectedIndustryData.name}
              </h3>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              {selectedIndustryData.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-background border border-border rounded-lg p-4 text-center">
                <p className="text-lg font-bold text-primary">{selectedIndustryData.stats.efficiency}</p>
                <p className="text-sm text-muted-foreground">Efficiency Gain</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-4 text-center">
                <p className="text-lg font-bold text-success">{selectedIndustryData.stats.savings}</p>
                <p className="text-sm text-muted-foreground">Value Delivered</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-4 text-center">
                <p className="text-lg font-bold text-accent">{selectedIndustryData.stats.implementation}</p>
                <p className="text-sm text-muted-foreground">Go-Live Time</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/industries-we-serve"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200">

                Learn More
                <Icon name="ArrowRightIcon" size={16} className="ml-2" />
              </Link>
              <Link
                href="/ai-calling-solutions"
                className="inline-flex items-center px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all duration-200">

                <Icon name="PlayIcon" size={16} className="mr-2" />
                View Demo
              </Link>
            </div>
          </div>

          <div className="animate-slide-up">
            <AppImage
              src={selectedIndustryData.image}
              alt={selectedIndustryData.alt}
              className="w-full h-96 object-cover rounded-2xl shadow-xl" />

          </div>
        </div>
      </div>
    </section>);

};

export default IndustrySelector;