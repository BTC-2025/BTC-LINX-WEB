'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Technology {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  specifications: {
    performance: string;
    scalability: string;
    security: string;
    integration: string;
  };
  useCases: string[];
}

interface TechnologyShowcaseProps {
  className?: string;
}

const TechnologyShowcase = ({ className = '' }: TechnologyShowcaseProps) => {
  const [activeCategory, setActiveCategory] = useState('AI & Machine Learning');
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  const technologies: Technology[] = [
  {
    id: 1,
    name: "GPT-4 Integration",
    category: "AI & Machine Learning",
    description: "Advanced natural language processing with custom model training for enterprise applications.",
    features: ["Natural Language Understanding", "Custom Model Training", "Multi-language Support", "Real-time Processing"],
    image: "https://images.unsplash.com/photo-1719650592946-55163c4994cb",
    alt: "AI neural network visualization with glowing nodes and data connections in blue and purple",
    specifications: {
      performance: "< 200ms response time",
      scalability: "1M+ requests/hour",
      security: "End-to-end encryption",
      integration: "REST API & SDK"
    },
    useCases: ["Customer Service Automation", "Content Generation", "Data Analysis", "Process Automation"]
  },
  {
    id: 2,
    name: "Computer Vision AI",
    category: "AI & Machine Learning",
    description: "Advanced image and video analysis capabilities for automated quality control and monitoring.",
    features: ["Object Detection", "Facial Recognition", "Quality Inspection", "Real-time Analysis"],
    image: "https://images.unsplash.com/photo-1724125372587-3bc5f24ae968",
    alt: "Computer vision interface showing object detection and analysis on multiple camera feeds",
    specifications: {
      performance: "30 FPS processing",
      scalability: "100+ concurrent streams",
      security: "GDPR compliant",
      integration: "WebRTC & RTMP"
    },
    useCases: ["Security Monitoring", "Quality Control", "Inventory Management", "Safety Compliance"]
  },
  {
    id: 3,
    name: "SD-WAN Architecture",
    category: "Network Infrastructure",
    description: "Software-defined wide area network with intelligent traffic routing and optimization.",
    features: ["Dynamic Path Selection", "Traffic Optimization", "Centralized Management", "Zero-Touch Provisioning"],
    image: "https://images.unsplash.com/photo-1719386591547-37db3f0cf5d4",
    alt: "Network topology diagram showing interconnected nodes and data flow paths across global infrastructure",
    specifications: {
      performance: "99.99% uptime",
      scalability: "10,000+ endpoints",
      security: "IPSec encryption",
      integration: "Multi-vendor support"
    },
    useCases: ["Branch Connectivity", "Cloud Access", "Application Optimization", "Disaster Recovery"]
  },
  {
    id: 4,
    name: "Network Automation Platform",
    category: "Network Infrastructure",
    description: "Intelligent network management with automated provisioning and self-healing capabilities.",
    features: ["Auto-provisioning", "Self-healing Networks", "Performance Monitoring", "Predictive Analytics"],
    image: "https://images.unsplash.com/photo-1573717871496-bc57b6ae4963",
    alt: "Network operations center with multiple monitoring screens showing real-time network performance data",
    specifications: {
      performance: "Real-time monitoring",
      scalability: "Enterprise-grade",
      security: "Role-based access",
      integration: "SNMP & REST APIs"
    },
    useCases: ["Network Operations", "Capacity Planning", "Fault Management", "Performance Optimization"]
  },
  {
    id: 5,
    name: "Zero Trust Security",
    category: "Security Framework",
    description: "Comprehensive security architecture with identity verification and continuous monitoring.",
    features: ["Identity Verification", "Continuous Monitoring", "Micro-segmentation", "Threat Detection"],
    image: "https://images.unsplash.com/photo-1642783327432-d269921e0f20",
    alt: "Cybersecurity dashboard showing threat detection, security alerts, and network protection status",
    specifications: {
      performance: "Real-time threat detection",
      scalability: "Global deployment",
      security: "Military-grade encryption",
      integration: "SIEM & SOAR platforms"
    },
    useCases: ["Identity Management", "Network Security", "Data Protection", "Compliance Monitoring"]
  },
  {
    id: 6,
    name: "Advanced Threat Protection",
    category: "Security Framework",
    description: "AI-powered threat detection and response system with behavioral analysis capabilities.",
    features: ["Behavioral Analysis", "Threat Intelligence", "Automated Response", "Forensic Analysis"],
    image: "https://images.unsplash.com/photo-1708794758085-b733c022008c",
    alt: "Security operations center with analysts monitoring threat detection systems and incident response",
    specifications: {
      performance: "< 1 second detection",
      scalability: "Petabyte-scale analysis",
      security: "Air-gapped deployment",
      integration: "Multi-vendor SIEM"
    },
    useCases: ["Malware Detection", "Incident Response", "Vulnerability Assessment", "Security Analytics"]
  }];


  const categories = ["AI & Machine Learning", "Network Infrastructure", "Security Framework"];

  const filteredTechnologies = technologies.filter((tech) => tech.category === activeCategory);

  const openTechModal = (tech: Technology) => {
    setSelectedTech(tech);
  };

  const closeTechModal = () => {
    setSelectedTech(null);
  };

  return (
    <section className={`py-20 lg:py-32 bg-slate-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Icon name="CogIcon" size={16} className="mr-2" />
            Technology Showcase
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Interactive Technology Demonstrations
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore our comprehensive technology stack with interactive demonstrations and detailed specifications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category ?
            'bg-primary text-primary-foreground shadow-medium' :
            'bg-white text-muted-foreground hover:bg-muted hover:text-foreground'}`
            }>

              {category}
            </button>
          )}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTechnologies.map((tech) =>
          <div
            key={tech.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => openTechModal(tech)}>

              {/* Technology Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={tech.image}
                alt={tech.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-semibold text-lg">{tech.name}</div>
                  <div className="text-white/80 text-sm">{tech.category}</div>
                </div>
              </div>

              {/* Technology Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">{tech.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-foreground mb-2">Key Features:</div>
                  <div className="flex flex-wrap gap-2">
                    {tech.features.slice(0, 3).map((feature, index) =>
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">

                        {feature}
                      </span>
                  )}
                    {tech.features.length > 3 &&
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        +{tech.features.length - 3} more
                      </span>
                  }
                  </div>
                </div>

                {/* View Details Button */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Click to explore</div>
                  <Icon name="ArrowRightIcon" size={16} className="text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Technology Modal */}
        {selectedTech &&
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={selectedTech.image}
                alt={selectedTech.alt}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <button
                onClick={closeTechModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">

                  <Icon name="XMarkIcon" size={20} />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedTech.name}</h3>
                  <div className="text-white/80">{selectedTech.category}</div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{selectedTech.description}</p>

                {/* Features Grid */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-foreground mb-4">Features & Capabilities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedTech.features.map((feature, index) =>
                  <div key={index} className="flex items-center space-x-3">
                        <Icon name="CheckCircleIcon" size={16} className="text-success flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                  )}
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-foreground mb-4">Technical Specifications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Performance</div>
                        <div className="text-foreground">{selectedTech.specifications.performance}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Scalability</div>
                        <div className="text-foreground">{selectedTech.specifications.scalability}</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Security</div>
                        <div className="text-foreground">{selectedTech.specifications.security}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Integration</div>
                        <div className="text-foreground">{selectedTech.specifications.integration}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Use Cases</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedTech.useCases.map((useCase, index) =>
                  <div key={index} className="flex items-center space-x-3">
                        <Icon name="LightBulbIcon" size={16} className="text-accent flex-shrink-0" />
                        <span className="text-foreground">{useCase}</span>
                      </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>);

};

export default TechnologyShowcase;