'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Integration {
  id: number;
  name: string;
  category: string;
  description: string;
  apiType: string;
  documentation: string;
  status: 'Active' | 'Beta' | 'Coming Soon';
  complexity: 'Simple' | 'Moderate' | 'Advanced';
  timeToImplement: string;
}

interface IntegrationSectionProps {
  className?: string;
}

const IntegrationSection = ({ className = '' }: IntegrationSectionProps) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);

  const integrations: Integration[] = [
    {
      id: 1,
      name: "Salesforce CRM",
      category: "CRM",
      description: "Seamless integration with Salesforce for customer data synchronization and workflow automation.",
      apiType: "REST API",
      documentation: "Complete API documentation with code examples",
      status: "Active",
      complexity: "Simple",
      timeToImplement: "2-3 days"
    },
    {
      id: 2,
      name: "Microsoft Teams",
      category: "Communication",
      description: "Direct integration with Teams for notifications, meetings, and collaborative workflows.",
      apiType: "Graph API",
      documentation: "SDK and webhook integration guides",
      status: "Active",
      complexity: "Moderate",
      timeToImplement: "3-5 days"
    },
    {
      id: 3,
      name: "AWS Lambda",
      category: "Cloud Services",
      description: "Serverless function integration for scalable backend processing and automation.",
      apiType: "AWS SDK",
      documentation: "Infrastructure as Code templates",
      status: "Active",
      complexity: "Advanced",
      timeToImplement: "5-7 days"
    },
    {
      id: 4,
      name: "Stripe Payments",
      category: "Financial",
      description: "Secure payment processing with subscription management and billing automation.",
      apiType: "REST API",
      documentation: "Payment flow documentation and testing tools",
      status: "Active",
      complexity: "Moderate",
      timeToImplement: "3-4 days"
    },
    {
      id: 5,
      name: "Slack Workspace",
      category: "Communication",
      description: "Real-time notifications and bot integration for team collaboration and alerts.",
      apiType: "Web API",
      documentation: "Bot framework and event handling guides",
      status: "Active",
      complexity: "Simple",
      timeToImplement: "1-2 days"
    },
    {
      id: 6,
      name: "HubSpot Marketing",
      category: "Marketing",
      description: "Marketing automation integration with lead scoring and campaign management.",
      apiType: "REST API",
      documentation: "Marketing automation workflows",
      status: "Beta",
      complexity: "Moderate",
      timeToImplement: "4-6 days"
    },
    {
      id: 7,
      name: "Zoom Meetings",
      category: "Communication",
      description: "Video conferencing integration with automated meeting scheduling and recording.",
      apiType: "SDK",
      documentation: "Meeting SDK and webhook documentation",
      status: "Active",
      complexity: "Advanced",
      timeToImplement: "6-8 days"
    },
    {
      id: 8,
      name: "ServiceNow ITSM",
      category: "IT Service Management",
      description: "IT service management integration for ticket creation and workflow automation.",
      apiType: "REST API",
      documentation: "ITSM workflow integration guides",
      status: "Coming Soon",
      complexity: "Advanced",
      timeToImplement: "7-10 days"
    }
  ];

  const categories = ['All', 'CRM', 'Communication', 'Cloud Services', 'Financial', 'Marketing', 'IT Service Management'];

  const filteredIntegrations = activeFilter === 'All' 
    ? integrations 
    : integrations.filter(integration => integration.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-success text-success-foreground';
      case 'Beta':
        return 'bg-warning text-warning-foreground';
      case 'Coming Soon':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Simple':
        return 'text-success';
      case 'Moderate':
        return 'text-warning';
      case 'Advanced':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <section className={`py-20 lg:py-32 bg-slate-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Icon name="PuzzlePieceIcon" size={16} className="mr-2" />
            Integration Ecosystem
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Seamless Third-Party Integrations
          </h2>
          <p className="text-xl text-muted-foreground">
            Connect with your existing tools and platforms through our comprehensive integration library with detailed documentation and support.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-white text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredIntegrations.map((integration) => (
            <div
              key={integration.id}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedIntegration(integration)}
            >
              {/* Integration Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{integration.name}</h3>
                  <div className="text-sm text-primary">{integration.category}</div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(integration.status)}`}>
                  {integration.status}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{integration.description}</p>

              {/* Integration Details */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">API Type:</span>
                  <span className="text-foreground font-medium">{integration.apiType}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Complexity:</span>
                  <span className={`font-medium ${getComplexityColor(integration.complexity)}`}>
                    {integration.complexity}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Implementation:</span>
                  <span className="text-foreground font-medium">{integration.timeToImplement}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">View Details</span>
                <Icon name="ArrowRightIcon" size={16} className="text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Integration Benefits
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our integration platform provides comprehensive benefits that streamline your workflow and enhance productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="BoltIcon" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Rapid Deployment</h4>
              <p className="text-sm text-muted-foreground">Pre-built connectors reduce integration time by up to 80%</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheckIcon" size={24} className="text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Secure Connections</h4>
              <p className="text-sm text-muted-foreground">Enterprise-grade security with encrypted data transmission</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="DocumentTextIcon" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Complete Documentation</h4>
              <p className="text-sm text-muted-foreground">Comprehensive guides with code examples and best practices</p>
            </div>
          </div>
        </div>

        {/* Integration Modal */}
        {selectedIntegration && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{selectedIntegration.name}</h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-primary font-medium">{selectedIntegration.category}</span>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedIntegration.status)}`}>
                        {selectedIntegration.status}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedIntegration(null)}
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-border transition-colors duration-200"
                  >
                    <Icon name="XMarkIcon" size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">{selectedIntegration.description}</p>

                {/* Technical Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technical Specifications</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">API Type:</span>
                        <span className="text-foreground font-medium">{selectedIntegration.apiType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Complexity:</span>
                        <span className={`font-medium ${getComplexityColor(selectedIntegration.complexity)}`}>
                          {selectedIntegration.complexity}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Implementation Time:</span>
                        <span className="text-foreground font-medium">{selectedIntegration.timeToImplement}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Documentation</h4>
                    <p className="text-muted-foreground text-sm">{selectedIntegration.documentation}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex-1 bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
                    View Documentation
                  </button>
                  <button className="flex-1 bg-muted text-muted-foreground py-3 px-6 rounded-lg font-medium hover:bg-border transition-colors duration-200">
                    Request Integration
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IntegrationSection;