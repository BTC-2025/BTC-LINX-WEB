import React from 'react';
// import Icon from '@/components/ui/AppIcon';
// import AppImage from '@/components/ui/AppImage';

import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';


interface ComplianceRequirement {
  industry: string;
  regulations: {
    name: string;
    description: string;
    icon: string;
  }[];
  certifications: string[];
  securityFeatures: string[];
}

interface ComplianceSectionProps {
  className?: string;
}

const ComplianceSection = ({ className = '' }: ComplianceSectionProps) => {
  const complianceData: ComplianceRequirement[] = [
  {
    industry: 'Financial Services',
    regulations: [
    {
      name: 'SOX Compliance',
      description: 'Sarbanes-Oxley Act compliance for financial reporting and data integrity',
      icon: 'DocumentTextIcon'
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard for secure payment processing',
      icon: 'CreditCardIcon'
    },
    {
      name: 'GDPR/CCPA',
      description: 'Data privacy regulations for customer information protection',
      icon: 'ShieldCheckIcon'
    }],

    certifications: ['ISO 27001', 'SOC 2 Type II', 'PCI DSS Level 1'],
    securityFeatures: [
    'End-to-end encryption',
    'Multi-factor authentication',
    'Audit trail logging',
    'Data loss prevention']

  },
  {
    industry: 'Healthcare',
    regulations: [
    {
      name: 'HIPAA Compliance',
      description: 'Health Insurance Portability and Accountability Act for patient data protection',
      icon: 'HeartIcon'
    },
    {
      name: 'HITECH Act',
      description: 'Health Information Technology for Economic and Clinical Health Act',
      icon: 'ComputerDesktopIcon'
    },
    {
      name: 'FDA 21 CFR Part 11',
      description: 'Electronic records and signatures in healthcare systems',
      icon: 'DocumentCheckIcon'
    }],

    certifications: ['HIPAA Compliant', 'HITECH Certified', 'ISO 27799'],
    securityFeatures: [
    'PHI encryption at rest and in transit',
    'Role-based access controls',
    'Comprehensive audit logs',
    'Secure communication channels']

  },
  {
    industry: 'Telecommunications',
    regulations: [
    {
      name: 'FCC Regulations',
      description: 'Federal Communications Commission compliance for telecom operations',
      icon: 'SignalIcon'
    },
    {
      name: 'CALEA',
      description: 'Communications Assistance for Law Enforcement Act compliance',
      icon: 'MegaphoneIcon'
    },
    {
      name: 'TCPA',
      description: 'Telephone Consumer Protection Act for automated calling systems',
      icon: 'PhoneIcon'
    }],

    certifications: ['FCC Certified', 'CALEA Compliant', 'TIA-942'],
    securityFeatures: [
    'Network security monitoring',
    'Call encryption protocols',
    'Lawful intercept capabilities',
    'Fraud detection systems']

  }];


  return (
    <section className={`py-20 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Industry Compliance & Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our solutions are built with industry-specific compliance requirements in mind, ensuring your organization meets all regulatory standards
          </p>
        </div>

        {/* Compliance Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {complianceData.map((industry, index) =>
          <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-6">{industry.industry}</h3>
              
              {/* Regulations */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="DocumentTextIcon" size={20} className="text-primary mr-2" />
                  Key Regulations
                </h4>
                <div className="space-y-4">
                  {industry.regulations.map((regulation, regIndex) =>
                <div key={regIndex} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name={regulation.icon as any} size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{regulation.name}</div>
                        <div className="text-sm text-muted-foreground">{regulation.description}</div>
                      </div>
                    </div>
                )}
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="ShieldCheckIcon" size={20} className="text-success mr-2" />
                  Our Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {industry.certifications.map((cert, certIndex) =>
                <span
                  key={certIndex}
                  className="px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full border border-success/20">

                      {cert}
                    </span>
                )}
                </div>
              </div>

              {/* Security Features */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="LockClosedIcon" size={20} className="text-accent mr-2" />
                  Security Features
                </h4>
                <ul className="space-y-2">
                  {industry.securityFeatures.map((feature, featureIndex) =>
                <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="CheckIcon" size={16} className="text-success flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                )}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Security Standards Overview */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-soft">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Enterprise-Grade Security Standards
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our platform is built on a foundation of security-first principles, ensuring that your data and operations remain protected while meeting the strictest industry compliance requirements.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-success mb-1">256-bit</div>
                  <div className="text-sm text-muted-foreground">AES Encryption</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Security Monitoring</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-warning mb-1">Zero</div>
                  <div className="text-sm text-muted-foreground">Data Breaches</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success" />
                  <span className="text-foreground">Multi-layered security architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success" />
                  <span className="text-foreground">Regular third-party security audits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success" />
                  <span className="text-foreground">Continuous compliance monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success" />
                  <span className="text-foreground">Incident response and recovery plans</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <AppImage
                src="https://images.unsplash.com/photo-1717386255950-f7fbe05eb6c0"
                alt="Secure data center with server racks and blue security lighting showing enterprise-grade infrastructure"
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ComplianceSection;