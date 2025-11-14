'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CaseStudy {
  id: string;
  industry: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  alt: string;
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
}

interface CaseStudySectionProps {
  className?: string;
}

const CaseStudySection = ({ className = '' }: CaseStudySectionProps) => {
  const [selectedCase, setSelectedCase] = useState<string>('bpo-telecom');

  const caseStudies: CaseStudy[] = [
  {
    id: 'bpo-telecom',
    industry: 'BPO & Telecom',
    client: 'Global Telecom BPO Network',
    challenge: 'A leading telecom BPO with 5,000+ agents across 12 locations was struggling with 35% annual agent turnover, inconsistent service quality, and escalating training costs that reached $2.8M annually.',
    solution: 'Implemented comprehensive AI calling system with real-time coaching, automated quality assurance, intelligent call routing, and predictive workforce management across all locations.',
    results: [
    'Reduced agent turnover from 35% to 19%',
    'Improved average CSAT scores from 3.2 to 4.6',
    'Decreased training time from 6 weeks to 2.5 weeks',
    'Achieved 99.2% system uptime across all centers',
    'Saved $1.8M annually in training and recruitment costs'],

    image: "https://images.unsplash.com/photo-1727249000948-bd625ab8cfff",
    alt: 'Large modern call center with rows of workstations and agents wearing headsets working at computers',
    metrics: [
    { label: 'Agent Retention', value: '81%', improvement: '+46%' },
    { label: 'Customer Satisfaction', value: '4.6/5', improvement: '+44%' },
    { label: 'Training Efficiency', value: '2.5 weeks', improvement: '-58%' },
    { label: 'Cost Savings', value: '$1.8M', improvement: 'Annual' }]

  },
  {
    id: 'finance-banking',
    industry: 'Financial Services',
    client: 'Regional Banking Network',
    challenge: 'Mid-sized banking network processing 10,000+ loan applications monthly faced 14-day average processing times, 12% error rates, and compliance issues resulting in $500K in regulatory penalties.',
    solution: 'Deployed AI-powered document analysis system with automated compliance checking, intelligent risk assessment, and streamlined approval workflows integrated with existing banking systems.',
    results: [
    'Reduced loan processing time from 14 days to 2 days',
    'Decreased error rates from 12% to 1.8%',
    'Improved compliance scores by 40%',
    'Increased loan approval rates by 25%',
    'Eliminated regulatory penalties saving $500K annually'],

    image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
    alt: 'Professional banker in suit reviewing financial documents at modern desk with multiple computer monitors',
    metrics: [
    { label: 'Processing Time', value: '2 days', improvement: '-86%' },
    { label: 'Error Reduction', value: '1.8%', improvement: '-85%' },
    { label: 'Approval Rate', value: '78%', improvement: '+25%' },
    { label: 'Compliance Score', value: '94%', improvement: '+40%' }]

  },
  {
    id: 'healthcare-system',
    industry: 'Healthcare',
    client: 'Multi-Location Hospital System',
    challenge: 'Regional hospital system with 8 locations experienced 25% patient no-show rates, scheduling conflicts causing $2.1M revenue loss, and overwhelmed administrative staff managing 50,000+ appointments monthly.',
    solution: 'Implemented AI-powered scheduling optimization with automated reminders, intelligent conflict resolution, predictive no-show prevention, and integrated patient communication system.',
    results: [
    'Reduced no-show rates from 25% to 8%',
    'Improved scheduling efficiency by 55%',
    'Increased patient satisfaction scores by 35%',
    'Generated $1.8M additional revenue annually',
    'Reduced administrative workload by 40%'],

    image: "https://images.unsplash.com/photo-1730290704356-603f1b30d244",
    alt: 'Modern hospital reception area with medical staff at computers helping patients with scheduling and check-in',
    metrics: [
    { label: 'No-Show Rate', value: '8%', improvement: '-68%' },
    { label: 'Revenue Recovery', value: '$1.8M', improvement: 'Annual' },
    { label: 'Patient Satisfaction', value: '4.4/5', improvement: '+35%' },
    { label: 'Admin Efficiency', value: '55%', improvement: 'Improved' }]

  },
  {
    id: 'ecommerce-retail',
    industry: 'E-commerce',
    client: 'Multi-Brand Retail Platform',
    challenge: 'E-commerce platform managing 50+ brands faced 68% cart abandonment, inefficient inventory management causing $3.2M in stockouts, and declining customer lifetime value.',
    solution: 'Deployed AI-powered personalization engine with real-time inventory optimization, automated customer journey mapping, and intelligent recommendation systems across all brand touchpoints.',
    results: [
    'Reduced cart abandonment from 68% to 35%',
    'Improved inventory turnover by 45%',
    'Increased average order value by 28%',
    'Boosted customer lifetime value by 40%',
    'Eliminated stockout losses saving $3.2M annually'],

    image: "https://images.unsplash.com/photo-1703563210719-1c5f8586c6d6",
    alt: 'Modern e-commerce fulfillment center with automated conveyor systems and workers managing inventory with tablets',
    metrics: [
    { label: 'Cart Abandonment', value: '35%', improvement: '-48%' },
    { label: 'Inventory Turnover', value: '8.2x', improvement: '+45%' },
    { label: 'Average Order Value', value: '$127', improvement: '+28%' },
    { label: 'Customer LTV', value: '$890', improvement: '+40%' }]

  }];


  const selectedCaseStudy = caseStudies.find((study) => study.id === selectedCase) || caseStudies[0];

  return (
    <section className={`py-20 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how organizations across industries have transformed their operations and achieved measurable success with our AI solutions
          </p>
        </div>

        {/* Case Study Selector */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {caseStudies.map((study) =>
          <button
            key={study.id}
            onClick={() => setSelectedCase(study.id)}
            className={`p-6 rounded-xl border-2 transition-all duration-300 text-left group ${
            selectedCase === study.id ?
            'border-primary bg-primary/5 shadow-medium' :
            'border-border bg-card hover:border-primary/50 hover:shadow-soft'}`
            }>

              <div className="space-y-3">
                <div className={`text-sm font-medium transition-colors duration-300 ${
              selectedCase === study.id ? 'text-primary' : 'text-muted-foreground'}`
              }>
                  {study.industry}
                </div>
                <div className={`font-semibold transition-colors duration-300 ${
              selectedCase === study.id ? 'text-foreground' : 'text-foreground'}`
              }>
                  {study.client}
                </div>
                <div className="flex items-center space-x-2">
                  <Icon
                  name="ArrowRightIcon"
                  size={16}
                  className={`transition-all duration-300 ${
                  selectedCase === study.id ?
                  'text-primary translate-x-1' : 'text-muted-foreground group-hover:translate-x-1'}`
                  } />

                  <span className="text-sm text-muted-foreground">View Case Study</span>
                </div>
              </div>
            </button>
          )}
        </div>

        {/* Selected Case Study */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-soft">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    {selectedCaseStudy.industry}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {selectedCaseStudy.client}
                  </h3>
                </div>

                {/* Challenge */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="ExclamationTriangleIcon" size={20} className="text-warning mr-2" />
                    The Challenge
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="LightBulbIcon" size={20} className="text-accent mr-2" />
                    Our Solution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCaseStudy.solution}
                  </p>
                </div>

                {/* Key Metrics */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedCaseStudy.metrics.map((metric, index) =>
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                        <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                        <div className="text-xs text-success font-medium">{metric.improvement}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Image & Results */}
            <div className="relative">
              <AppImage
                src={selectedCaseStudy.image}
                alt={selectedCaseStudy.alt}
                className="w-full h-64 lg:h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Results Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Icon name="CheckCircleIcon" size={20} className="text-success mr-2" />
                  Results Achieved
                </h4>
                <ul className="space-y-2">
                  {selectedCaseStudy.results.slice(0, 3).map((result, index) =>
                  <li key={index} className="flex items-start space-x-2 text-sm text-white/90">
                      <Icon name="CheckIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span>{result}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CaseStudySection;