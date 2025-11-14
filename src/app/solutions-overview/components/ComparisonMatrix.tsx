'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  name: string;
  description: string;
}

interface Solution {
  id: string;
  name: string;
  icon: string;
  color: string;
  features: { [key: string]: boolean | string };
  pricing: string;
  implementation: string;
  support: string;
}

interface ComparisonMatrixProps {
  onSelectSolution: (solutionId: string) => void;
}

const ComparisonMatrix = ({ onSelectSolution }: ComparisonMatrixProps) => {
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>(['ai-calling', 'network-automation']);
  const [viewMode, setViewMode] = useState<'features' | 'pricing'>('features');

  const allFeatures: Feature[] = [
    { name: 'AI Integration', description: 'Advanced artificial intelligence capabilities' },
    { name: 'Real-time Analytics', description: 'Live data processing and insights' },
    { name: 'Automated Workflows', description: 'Process automation and optimization' },
    { name: 'Security Compliance', description: 'Enterprise-grade security standards' },
    { name: 'Scalability', description: 'Ability to scale with business growth' },
    { name: '24/7 Support', description: 'Round-the-clock technical assistance' },
    { name: 'API Integration', description: 'Seamless third-party integrations' },
    { name: 'Custom Dashboards', description: 'Personalized reporting interfaces' },
    { name: 'Multi-platform', description: 'Cross-platform compatibility' },
    { name: 'Cloud Native', description: 'Built for cloud environments' }
  ];

  const solutions: Solution[] = [
    {
      id: 'ai-calling',
      name: 'AI Calling & BPO',
      icon: 'PhoneIcon',
      color: 'bg-blue-500',
      features: {
        'AI Integration': true,
        'Real-time Analytics': true,
        'Automated Workflows': true,
        'Security Compliance': true,
        'Scalability': true,
        '24/7 Support': true,
        'API Integration': true,
        'Custom Dashboards': true,
        'Multi-platform': true,
        'Cloud Native': true
      },
      pricing: 'Starting at $299/month',
      implementation: '2-4 weeks',
      support: 'Premium 24/7'
    },
    {
      id: 'network-automation',
      name: 'Network Automation',
      icon: 'GlobeAltIcon',
      color: 'bg-green-500',
      features: {
        'AI Integration': true,
        'Real-time Analytics': true,
        'Automated Workflows': true,
        'Security Compliance': true,
        'Scalability': true,
        '24/7 Support': true,
        'API Integration': true,
        'Custom Dashboards': 'Limited',
        'Multi-platform': true,
        'Cloud Native': true
      },
      pricing: 'Starting at $499/month',
      implementation: '4-6 weeks',
      support: 'Business Hours'
    },
    {
      id: 'data-security',
      name: 'Data Security',
      icon: 'ShieldCheckIcon',
      color: 'bg-red-500',
      features: {
        'AI Integration': true,
        'Real-time Analytics': true,
        'Automated Workflows': 'Limited',
        'Security Compliance': true,
        'Scalability': true,
        '24/7 Support': true,
        'API Integration': true,
        'Custom Dashboards': true,
        'Multi-platform': true,
        'Cloud Native': true
      },
      pricing: 'Starting at $399/month',
      implementation: '3-5 weeks',
      support: 'Premium 24/7'
    },
    {
      id: 'business-intelligence',
      name: 'Business Intelligence',
      icon: 'ChartBarIcon',
      color: 'bg-purple-500',
      features: {
        'AI Integration': true,
        'Real-time Analytics': true,
        'Automated Workflows': true,
        'Security Compliance': true,
        'Scalability': true,
        '24/7 Support': 'Limited',
        'API Integration': true,
        'Custom Dashboards': true,
        'Multi-platform': true,
        'Cloud Native': true
      },
      pricing: 'Starting at $199/month',
      implementation: '3-4 weeks',
      support: 'Business Hours'
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      icon: 'CloudIcon',
      color: 'bg-indigo-500',
      features: {
        'AI Integration': 'Limited',
        'Real-time Analytics': true,
        'Automated Workflows': true,
        'Security Compliance': true,
        'Scalability': true,
        '24/7 Support': true,
        'API Integration': true,
        'Custom Dashboards': 'Limited',
        'Multi-platform': true,
        'Cloud Native': true
      },
      pricing: 'Starting at $599/month',
      implementation: '6-8 weeks',
      support: 'Premium 24/7'
    }
  ];

  const toggleSolution = (solutionId: string) => {
    setSelectedSolutions(prev => {
      if (prev.includes(solutionId)) {
        return prev.filter(id => id !== solutionId);
      } else if (prev.length < 3) {
        return [...prev, solutionId];
      }
      return prev;
    });
  };

  const getFeatureIcon = (value: boolean | string) => {
    if (value === true) {
      return <Icon name="CheckIcon" size={20} className="text-success" />;
    } else if (value === 'Limited') {
      return <Icon name="MinusIcon" size={20} className="text-warning" />;
    } else {
      return <Icon name="XMarkIcon" size={20} className="text-destructive" />;
    }
  };

  const selectedSolutionData = solutions.filter(solution => 
    selectedSolutions.includes(solution.id)
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solution Comparison Matrix
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compare features, pricing, and implementation details across our solution portfolio to find the perfect fit for your needs.
          </p>
        </div>

        {/* Solution Selector */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Select Solutions to Compare (Max 3)
          </h3>
          <div className="flex flex-wrap gap-3">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => toggleSolution(solution.id)}
                disabled={!selectedSolutions.includes(solution.id) && selectedSolutions.length >= 3}
                className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedSolutions.includes(solution.id)
                    ? `${solution.color} text-white shadow-lg`
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed'
                }`}
              >
                <Icon name={solution.icon as any} size={20} className="mr-2" />
                {solution.name}
                {selectedSolutions.includes(solution.id) && (
                  <Icon name="XMarkIcon" size={16} className="ml-2" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted p-1 rounded-lg">
            <button
              onClick={() => setViewMode('features')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                viewMode === 'features' ?'bg-primary text-primary-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setViewMode('pricing')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                viewMode === 'pricing' ?'bg-primary text-primary-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Pricing & Details
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        {selectedSolutionData.length > 0 ? (
          <div className="bg-card border border-border rounded-xl shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">
                      {viewMode === 'features' ? 'Features' : 'Details'}
                    </th>
                    {selectedSolutionData.map((solution) => (
                      <th key={solution.id} className="text-center p-4 min-w-[200px]">
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 ${solution.color} rounded-lg flex items-center justify-center mb-2`}>
                            <Icon name={solution.icon as any} size={20} className="text-white" />
                          </div>
                          <div className="font-semibold text-foreground text-sm">
                            {solution.name}
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {viewMode === 'features' ? (
                    allFeatures.map((feature, index) => (
                      <tr key={feature.name} className={index % 2 === 0 ? 'bg-muted/30' : 'bg-white'}>
                        <td className="p-4">
                          <div>
                            <div className="font-medium text-foreground">{feature.name}</div>
                            <div className="text-sm text-muted-foreground">{feature.description}</div>
                          </div>
                        </td>
                        {selectedSolutionData.map((solution) => (
                          <td key={solution.id} className="text-center p-4">
                            <div className="flex justify-center">
                              {getFeatureIcon(solution.features[feature.name])}
                            </div>
                            {typeof solution.features[feature.name] === 'string' && 
                             solution.features[feature.name] !== 'Limited' && (
                              <div className="text-xs text-muted-foreground mt-1">
                                {solution.features[feature.name]}
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <>
                      <tr className="bg-muted/30">
                        <td className="p-4 font-medium text-foreground">Pricing</td>
                        {selectedSolutionData.map((solution) => (
                          <td key={solution.id} className="text-center p-4">
                            <div className="font-semibold text-primary">{solution.pricing}</div>
                          </td>
                        ))}
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 font-medium text-foreground">Implementation Time</td>
                        {selectedSolutionData.map((solution) => (
                          <td key={solution.id} className="text-center p-4">
                            <div className="text-foreground">{solution.implementation}</div>
                          </td>
                        ))}
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="p-4 font-medium text-foreground">Support Level</td>
                        {selectedSolutionData.map((solution) => (
                          <td key={solution.id} className="text-center p-4">
                            <div className="text-foreground">{solution.support}</div>
                          </td>
                        ))}
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/30 rounded-xl">
            <Icon name="Squares2X2Icon" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Select at least one solution above to start comparing features and pricing.
            </p>
          </div>
        )}

        {/* Action Buttons */}
        {selectedSolutionData.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => onSelectSolution('consultation')}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200"
            >
              <Icon name="CalendarIcon" size={20} className="mr-2" />
              Schedule Consultation
            </button>
            <button className="inline-flex items-center px-6 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-primary/10 hover:text-primary transition-all duration-200">
              <Icon name="DocumentArrowDownIcon" size={20} className="mr-2" />
              Download Comparison
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ComparisonMatrix;