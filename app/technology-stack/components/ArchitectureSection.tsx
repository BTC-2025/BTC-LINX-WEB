import React from 'react';
// import Icon from '@/components/ui/AppIcon';

import Icon from '../../../components/ui/AppIcon';

interface ArchitectureLayer {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  icon: string;
  color: string;
}

interface ArchitectureSectionProps {
  className?: string;
}

const ArchitectureSection = ({ className = '' }: ArchitectureSectionProps) => {
  const architectureLayers: ArchitectureLayer[] = [
    {
      id: 1,
      name: "Presentation Layer",
      description: "User interfaces and client applications with responsive design and accessibility compliance.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Progressive Web Apps"],
      icon: "DevicePhoneMobileIcon",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "API Gateway",
      description: "Secure API management with rate limiting, authentication, and request routing.",
      technologies: ["REST APIs", "GraphQL", "OAuth 2.0", "Rate Limiting", "Load Balancing"],
      icon: "CloudIcon",
      color: "bg-green-500"
    },
    {
      id: 3,
      name: "Business Logic",
      description: "Core application logic with microservices architecture and event-driven processing.",
      technologies: ["Node.js", "Python", "Microservices", "Event Streaming", "Serverless Functions"],
      icon: "CogIcon",
      color: "bg-purple-500"
    },
    {
      id: 4,
      name: "Data Layer",
      description: "Scalable data storage and processing with real-time analytics and backup systems.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Data Warehousing"],
      icon: "CircleStackIcon",
      color: "bg-orange-500"
    },
    {
      id: 5,
      name: "Infrastructure",
      description: "Cloud-native infrastructure with container orchestration and automated scaling.",
      technologies: ["Kubernetes", "Docker", "AWS/Azure", "Terraform", "CI/CD Pipelines"],
      icon: "ServerIcon",
      color: "bg-red-500"
    }
  ];

  const securityFeatures = [
    {
      name: "End-to-End Encryption",
      description: "AES-256 encryption for data in transit and at rest",
      icon: "LockClosedIcon"
    },
    {
      name: "Multi-Factor Authentication",
      description: "Biometric and token-based authentication systems",
      icon: "FingerPrintIcon"
    },
    {
      name: "Zero Trust Network",
      description: "Continuous verification and least privilege access",
      icon: "ShieldCheckIcon"
    },
    {
      name: "Compliance Framework",
      description: "SOC 2, ISO 27001, GDPR, and HIPAA compliance",
      icon: "DocumentCheckIcon"
    }
  ];

  return (
    <section className={`py-20 lg:py-32 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Icon name="BuildingLibraryIcon" size={16} className="mr-2" />
            Technical Architecture
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Enterprise-Grade Architecture
          </h2>
          <p className="text-xl text-muted-foreground">
            Built on modern architectural principles with scalability, security, and performance at its core.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">System Architecture Overview</h3>
            
            <div className="space-y-6">
              {architectureLayers.map((layer, index) => (
                <div key={layer.id} className="relative">
                  {/* Connection Line */}
                  {index < architectureLayers.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-6 bg-border"></div>
                  )}
                  
                  <div className="flex items-start space-x-6 bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                    {/* Layer Icon */}
                    <div className={`w-16 h-16 ${layer.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon name={layer.icon as any} size={24} className="text-white" />
                    </div>
                    
                    {/* Layer Content */}
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-2">{layer.name}</h4>
                      <p className="text-muted-foreground mb-4">{layer.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {layer.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Framework */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Security Framework
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multi-layered security approach ensuring enterprise-grade protection across all system components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-surface rounded-2xl p-6 text-center hover:shadow-medium transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.name}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Performance Standards
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our architecture delivers exceptional performance metrics that exceed industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">&lt; 100ms</div>
              <div className="text-sm text-muted-foreground">API Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.99%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10M+</div>
              <div className="text-sm text-muted-foreground">Requests/Hour</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">&lt; 3s</div>
              <div className="text-sm text-muted-foreground">Page Load Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;