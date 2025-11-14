'use client';

import React, { useState } from 'react';
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
    implementations: string;
    avgROI: string;
    timeToValue: string;
  };
  challenges: string[];
  solutions: string[];
  caseStudy: {
    client: string;
    challenge: string;
    solution: string;
    results: string[];
  };
}

interface IndustryGridProps {
  className?: string;
}

const IndustryGrid = ({ className = '' }: IndustryGridProps) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('bpo');

  const industries: Industry[] = [
  {
    id: 'bpo',
    name: 'BPO & Call Centers',
    description: 'Transform customer service operations with AI-powered automation, reducing costs while improving customer satisfaction and agent productivity.',
    icon: 'PhoneIcon',
    image: "https://images.unsplash.com/photo-1702967426797-cff3054fa6c0",
    alt: 'Modern call center office with multiple workstations and headset-wearing agents at computers',
    stats: {
      implementations: '150+',
      avgROI: '340%',
      timeToValue: '30 days'
    },
    challenges: [
    'High agent turnover and training costs',
    'Inconsistent service quality across shifts',
    'Manual processes causing delays',
    'Difficulty scaling during peak periods'],

    solutions: [
    'AI-powered call routing and prioritization',
    'Automated quality assurance and coaching',
    'Real-time sentiment analysis and escalation',
    'Intelligent workforce management'],

    caseStudy: {
      client: 'Global Telecom BPO',
      challenge: 'Struggling with 35% agent turnover and inconsistent customer satisfaction scores across multiple locations.',
      solution: 'Implemented AI calling system with automated quality monitoring and real-time coaching assistance.',
      results: [
      'Reduced agent turnover by 45%',
      'Improved CSAT scores from 3.2 to 4.6',
      'Decreased training time by 60%',
      'Achieved 99.2% uptime across all centers']

    }
  },
  {
    id: 'finance',
    name: 'Financial Services',
    description: 'Enhance security, compliance, and customer experience with intelligent automation for banking, insurance, and fintech operations.',
    icon: 'CurrencyDollarIcon',
    image: "https://images.unsplash.com/photo-1626986710988-a81af761f394",
    alt: 'Professional financial trading floor with multiple monitors displaying market data and charts',
    stats: {
      implementations: '85+',
      avgROI: '420%',
      timeToValue: '45 days'
    },
    challenges: [
    'Strict regulatory compliance requirements',
    'Complex fraud detection and prevention',
    'Manual loan processing delays',
    'Customer onboarding bottlenecks'],

    solutions: [
    'Automated compliance monitoring and reporting',
    'AI-driven fraud detection algorithms',
    'Intelligent document processing for loans',
    'Streamlined KYC and onboarding workflows'],

    caseStudy: {
      client: 'Regional Banking Network',
      challenge: 'Manual loan processing taking 14+ days with high error rates and compliance risks.',
      solution: 'Deployed AI-powered document analysis and automated compliance checking system.',
      results: [
      'Reduced processing time to 2 days',
      'Decreased error rates by 85%',
      'Improved compliance scores by 40%',
      'Increased loan approval rates by 25%']

    }
  },
  {
    id: 'telecom',
    name: 'Telecommunications',
    description: 'Optimize network performance, automate customer support, and enhance service delivery with intelligent infrastructure solutions.',
    icon: 'SignalIcon',
    image: "https://images.unsplash.com/photo-1637053596634-66db164b9ea2",
    alt: 'Telecommunications tower with multiple antennas against blue sky with communication signals visualization',
    stats: {
      implementations: '65+',
      avgROI: '380%',
      timeToValue: '60 days'
    },
    challenges: [
    'Network congestion and performance issues',
    'Complex infrastructure management',
    'High customer churn rates',
    'Reactive maintenance causing outages'],

    solutions: [
    'Predictive network optimization algorithms',
    'Automated infrastructure monitoring',
    'AI-powered customer retention programs',
    'Proactive maintenance scheduling'],

    caseStudy: {
      client: 'National Telecom Provider',
      challenge: 'Experiencing frequent network outages and 18% annual customer churn due to service issues.',
      solution: 'Implemented predictive maintenance system with AI-driven network optimization.',
      results: [
      'Reduced network downtime by 70%',
      'Decreased customer churn to 8%',
      'Improved network efficiency by 45%',
      'Saved $2.3M in maintenance costs']

    }
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Improve patient outcomes and operational efficiency with secure, compliant AI solutions for hospitals, clinics, and healthcare networks.',
    icon: 'HeartIcon',
    image: "https://images.unsplash.com/photo-1516841273335-e39b37888115",
    alt: 'Modern hospital corridor with medical professionals in scrubs walking past patient rooms with advanced medical equipment',
    stats: {
      implementations: '45+',
      avgROI: '290%',
      timeToValue: '90 days'
    },
    challenges: [
    'HIPAA compliance and data security',
    'Manual patient scheduling inefficiencies',
    'Delayed diagnosis and treatment',
    'Administrative burden on medical staff'],

    solutions: [
    'HIPAA-compliant AI communication systems',
    'Intelligent appointment scheduling',
    'AI-assisted diagnostic support',
    'Automated administrative workflows'],

    caseStudy: {
      client: 'Multi-Location Hospital System',
      challenge: 'Struggling with patient scheduling conflicts and 25% no-show rates affecting revenue and care delivery.',
      solution: 'Deployed AI-powered scheduling system with automated reminders and optimization.',
      results: [
      'Reduced no-show rates to 8%',
      'Improved scheduling efficiency by 55%',
      'Increased patient satisfaction by 35%',
      'Generated $1.8M additional revenue']

    }
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Enhance learning outcomes and administrative efficiency with intelligent automation for schools, universities, and educational platforms.',
    icon: 'AcademicCapIcon',
    image: "https://images.unsplash.com/photo-1719159381990-f1dd52d2c733",
    alt: 'Modern university lecture hall with students using laptops and tablets while professor presents on digital screen',
    stats: {
      implementations: '35+',
      avgROI: '250%',
      timeToValue: '75 days'
    },
    challenges: [
    'Student engagement and retention',
    'Administrative process inefficiencies',
    'Personalized learning at scale',
    'Communication gaps between stakeholders'],

    solutions: [
    'AI-powered student engagement analytics',
    'Automated administrative workflows',
    'Personalized learning path recommendations',
    'Intelligent communication systems'],

    caseStudy: {
      client: 'State University System',
      challenge: 'Facing 22% student dropout rate and overwhelmed administrative staff struggling with manual processes.',
      solution: 'Implemented AI-driven student success platform with automated early intervention systems.',
      results: [
      'Reduced dropout rate to 12%',
      'Improved administrative efficiency by 40%',
      'Increased student satisfaction by 30%',
      'Saved 500+ hours monthly on admin tasks']

    }
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Boost sales and customer satisfaction with intelligent automation for inventory, customer service, and personalized shopping experiences.',
    icon: 'ShoppingCartIcon',
    image: "https://images.unsplash.com/photo-1678132021968-68cd9d5339ac",
    alt: 'Modern e-commerce warehouse with automated sorting systems and workers managing inventory with tablets',
    stats: {
      implementations: '120+',
      avgROI: '310%',
      timeToValue: '40 days'
    },
    challenges: [
    'Inventory management complexity',
    'Customer service scalability',
    'Personalization at scale',
    'Cart abandonment and conversion'],

    solutions: [
    'AI-powered inventory optimization',
    'Automated customer support systems',
    'Personalized recommendation engines',
    'Intelligent conversion optimization'],

    caseStudy: {
      client: 'Multi-Brand Retail Platform',
      challenge: 'Struggling with 68% cart abandonment rate and inefficient inventory management across 50+ brands.',
      solution: 'Deployed AI-powered personalization engine with automated inventory optimization.',
      results: [
      'Reduced cart abandonment to 35%',
      'Improved inventory turnover by 45%',
      'Increased average order value by 28%',
      'Boosted customer lifetime value by 40%']

    }
  }];


  const selectedIndustryData = industries.find((industry) => industry.id === selectedIndustry) || industries[0];

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Specialized Solutions by Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep industry expertise combined with cutting-edge AI technology to solve your sector's unique challenges
          </p>
        </div>

        {/* Industry Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {industries.map((industry) =>
          <button
            key={industry.id}
            onClick={() => setSelectedIndustry(industry.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 text-center group ${
            selectedIndustry === industry.id ?
            'border-primary bg-primary/5 shadow-medium' :
            'border-border bg-card hover:border-primary/50 hover:shadow-soft'}`
            }>

              <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center transition-colors duration-300 ${
            selectedIndustry === industry.id ?
            'bg-primary text-primary-foreground' :
            'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'}`
            }>
                <Icon name={industry.icon as any} size={24} />
              </div>
              <div className={`text-sm font-medium transition-colors duration-300 ${
            selectedIndustry === industry.id ?
            'text-primary' : 'text-foreground'}`
            }>
                {industry.name}
              </div>
            </button>
          )}
        </div>

        {/* Selected Industry Details */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-soft">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={selectedIndustryData.icon as any} size={24} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{selectedIndustryData.name}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedIndustryData.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{selectedIndustryData.stats.implementations}</div>
                    <div className="text-sm text-muted-foreground">Implementations</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-success">{selectedIndustryData.stats.avgROI}</div>
                    <div className="text-sm text-muted-foreground">Avg ROI</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">{selectedIndustryData.stats.timeToValue}</div>
                    <div className="text-sm text-muted-foreground">Time to Value</div>
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Challenges</h4>
                    <ul className="space-y-2">
                      {selectedIndustryData.challenges.map((challenge, index) =>
                      <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <Icon name="ExclamationTriangleIcon" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Our Solutions</h4>
                    <ul className="space-y-2">
                      {selectedIndustryData.solutions.map((solution, index) =>
                      <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span>{solution}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <AppImage
                src={selectedIndustryData.image}
                alt={selectedIndustryData.alt}
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default IndustryGrid;