'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Solution {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  icon: string;
  image: string;
  alt: string;
  category: string;
  roi: string;
  implementation: string;
}

interface SolutionsGridProps {
  onLearnMore: (solutionId: string) => void;
  onRequestDemo: (solutionId: string) => void;
}

const SolutionsGrid = ({ onLearnMore, onRequestDemo }: SolutionsGridProps) => {
  const [expandedSolution, setExpandedSolution] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const solutions: Solution[] = [
  {
    id: 'ai-calling',
    title: 'AI Calling & BPO Automation',
    description: 'Revolutionize your customer interactions with intelligent voice automation and seamless BPO integration.',
    features: [
    'Natural Language Processing',
    'Real-time Sentiment Analysis',
    'Automated Call Routing',
    'Performance Analytics',
    'Multi-language Support'],

    benefits: [
    '60% reduction in call handling time',
    '95% customer satisfaction rate',
    '24/7 availability',
    'Scalable operations'],

    icon: 'PhoneIcon',
    image: "https://images.unsplash.com/photo-1703589535082-ba3f4fbfcd85",
    alt: 'Professional call center agent wearing headset working at modern workstation with multiple monitors',
    category: 'automation',
    roi: '300% ROI in 6 months',
    implementation: '2-4 weeks'
  },
  {
    id: 'network-automation',
    title: 'Network Automation',
    description: 'Streamline network operations with intelligent automation and proactive monitoring solutions.',
    features: [
    'Automated Configuration Management',
    'Predictive Maintenance',
    'Real-time Monitoring',
    'Security Compliance',
    'Performance Optimization'],

    benefits: [
    '80% faster deployment',
    '99.9% network uptime',
    'Reduced human errors',
    'Cost optimization'],

    icon: 'GlobeAltIcon',
    image: "https://images.unsplash.com/photo-1640068689382-94270dfb58db",
    alt: 'Modern data center with rows of server racks illuminated by blue LED lights',
    category: 'infrastructure',
    roi: '250% ROI in 8 months',
    implementation: '4-6 weeks'
  },
  {
    id: 'data-security',
    title: 'Data Security Solutions',
    description: 'Protect your enterprise with advanced threat detection and comprehensive security frameworks.',
    features: [
    'Advanced Threat Detection',
    'Zero Trust Architecture',
    'Compliance Management',
    'Incident Response',
    'Security Analytics'],

    benefits: [
    '99.8% threat prevention',
    'Regulatory compliance',
    'Real-time protection',
    'Risk mitigation'],

    icon: 'ShieldCheckIcon',
    image: "https://images.unsplash.com/photo-1562071674-dbd4a7ebf9e5",
    alt: 'Cybersecurity specialist analyzing threat data on multiple computer screens in dark security operations center',
    category: 'security',
    roi: '400% ROI in 12 months',
    implementation: '3-5 weeks'
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description: 'Transform data into actionable insights with advanced analytics and interactive dashboards.',
    features: [
    'Real-time Analytics',
    'Predictive Modeling',
    'Custom Dashboards',
    'Data Visualization',
    'Automated Reporting'],

    benefits: [
    'Data-driven decisions',
    'Improved efficiency',
    'Revenue optimization',
    'Competitive advantage'],

    icon: 'ChartBarIcon',
    image: "https://images.unsplash.com/photo-1663780852957-0e1f8bda3d0d",
    alt: 'Business analyst reviewing colorful data visualization charts and graphs on large wall-mounted display',
    category: 'analytics',
    roi: '350% ROI in 9 months',
    implementation: '3-4 weeks'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Modernize your IT infrastructure with scalable cloud solutions and seamless migration services.',
    features: [
    'Multi-cloud Strategy',
    'Automated Scaling',
    'Disaster Recovery',
    'Cost Optimization',
    'Migration Services'],

    benefits: [
    '50% cost reduction',
    'Improved scalability',
    'Enhanced reliability',
    'Global accessibility'],

    icon: 'CloudIcon',
    image: "https://images.unsplash.com/photo-1733295928625-439a9692ba63",
    alt: 'Abstract visualization of cloud computing infrastructure with interconnected nodes and data streams',
    category: 'infrastructure',
    roi: '280% ROI in 10 months',
    implementation: '6-8 weeks'
  }];


  const categories = [
  { id: 'all', name: 'All Solutions', icon: 'Squares2X2Icon' },
  { id: 'automation', name: 'Automation', icon: 'CogIcon' },
  { id: 'infrastructure', name: 'Infrastructure', icon: 'ServerIcon' },
  { id: 'security', name: 'Security', icon: 'LockClosedIcon' },
  { id: 'analytics', name: 'Analytics', icon: 'PresentationChartLineIcon' }];


  const filteredSolutions = activeCategory === 'all' ?
  solutions :
  solutions.filter((solution) => solution.category === activeCategory);

  const toggleExpanded = (solutionId: string) => {
    setExpandedSolution(expandedSolution === solutionId ? null : solutionId);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Solution Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive enterprise solutions designed to transform your business operations and drive sustainable growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) =>
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            activeCategory === category.id ?
            'bg-primary text-primary-foreground shadow-lg' :
            'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'}`
            }>

              <Icon name={category.icon as any} size={20} className="mr-2" />
              {category.name}
            </button>
          )}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredSolutions.map((solution) =>
          <div
            key={solution.id}
            className="bg-card border border-border rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group">

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={solution.image}
                alt={solution.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Icon name={solution.icon as any} size={24} className="text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {solution.description}
                </p>

                {/* ROI & Implementation */}
                <div className="flex justify-between items-center mb-4 p-3 bg-muted rounded-lg">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-success">{solution.roi}</div>
                    <div className="text-xs text-muted-foreground">Expected ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-primary">{solution.implementation}</div>
                    <div className="text-xs text-muted-foreground">Implementation</div>
                  </div>
                </div>

                {/* Expandable Content */}
                {expandedSolution === solution.id &&
              <div className="mb-4 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
                        <ul className="space-y-1">
                          {solution.features.slice(0, 3).map((feature, index) =>
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                              <Icon name="CheckIcon" size={16} className="text-success mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                      )}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Benefits</h4>
                        <ul className="space-y-1">
                          {solution.benefits.slice(0, 3).map((benefit, index) =>
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                              <Icon name="StarIcon" size={16} className="text-accent mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                      )}
                        </ul>
                      </div>
                    </div>
                  </div>
              }

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                  onClick={() => toggleExpanded(solution.id)}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-muted text-foreground rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200">

                    <Icon
                    name={expandedSolution === solution.id ? "ChevronUpIcon" : "ChevronDownIcon"}
                    size={16}
                    className="mr-2" />

                    {expandedSolution === solution.id ? 'Show Less' : 'Learn More'}
                  </button>
                  <button
                  onClick={() => onRequestDemo(solution.id)}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">

                    <Icon name="PlayIcon" size={16} className="mr-2" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default SolutionsGrid;