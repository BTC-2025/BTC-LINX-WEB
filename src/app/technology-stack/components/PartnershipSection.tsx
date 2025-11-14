import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Partner {
  id: number;
  name: string;
  logo: string;
  alt: string;
  category: string;
  description: string;
  certifications: string[];
  integrationLevel: 'Strategic' | 'Premier' | 'Certified';
}

interface PartnershipSectionProps {
  className?: string;
}

const PartnershipSection = ({ className = '' }: PartnershipSectionProps) => {
  const partners: Partner[] = [
  {
    id: 1,
    name: "Amazon Web Services",
    logo: "https://images.unsplash.com/photo-1669865015890-4dbd855de0f7",
    alt: "AWS cloud computing logo with orange and white design on dark background",
    category: "Cloud Infrastructure",
    description: "Advanced cloud computing services with scalable infrastructure and enterprise-grade security.",
    certifications: ["AWS Advanced Partner", "Well-Architected Partner", "Security Competency"],
    integrationLevel: "Strategic"
  },
  {
    id: 2,
    name: "Microsoft Azure",
    logo: "https://images.unsplash.com/photo-1662052955282-da15376f3919",
    alt: "Microsoft Azure cloud platform logo in blue and white corporate branding",
    category: "Cloud Platform",
    description: "Comprehensive cloud platform with AI services, data analytics, and hybrid cloud capabilities.",
    certifications: ["Gold Cloud Platform", "AI & Machine Learning", "Security Partner"],
    integrationLevel: "Strategic"
  },
  {
    id: 3,
    name: "Cisco Systems",
    logo: "https://images.unsplash.com/photo-1577385079498-710ba72c9c3d",
    alt: "Cisco networking equipment and logo displayed in modern data center environment",
    category: "Network Infrastructure",
    description: "Enterprise networking solutions with advanced security and network automation capabilities.",
    certifications: ["Cisco Gold Partner", "Security Specialization", "Data Center Partner"],
    integrationLevel: "Premier"
  },
  {
    id: 4,
    name: "OpenAI",
    logo: "https://images.unsplash.com/photo-1611926069989-38b9925b1c1e",
    alt: "AI and machine learning interface with neural network visualization and data patterns",
    category: "Artificial Intelligence",
    description: "Cutting-edge AI models and natural language processing for intelligent automation solutions.",
    certifications: ["API Integration Partner", "Enterprise Solutions", "Custom Model Training"],
    integrationLevel: "Strategic"
  },
  {
    id: 5,
    name: "Twilio",
    logo: "https://images.unsplash.com/photo-1669643470668-19d6fb1d3f21",
    alt: "Communication technology interface showing messaging and voice call integration dashboard",
    category: "Communications Platform",
    description: "Programmable communications platform enabling voice, messaging, and video integrations.",
    certifications: ["Twilio Partner", "Voice Specialization", "Messaging Excellence"],
    integrationLevel: "Premier"
  },
  {
    id: 6,
    name: "Salesforce",
    logo: "https://images.unsplash.com/photo-1669643470668-19d6fb1d3f21",
    alt: "CRM dashboard interface showing customer data analytics and sales pipeline visualization",
    category: "CRM Platform",
    description: "World's leading CRM platform with advanced analytics and customer engagement tools.",
    certifications: ["Salesforce Partner", "AppExchange Provider", "Integration Specialist"],
    integrationLevel: "Certified"
  }];


  const getIntegrationBadgeColor = (level: string) => {
    switch (level) {
      case 'Strategic':
        return 'bg-accent text-accent-foreground';
      case 'Premier':
        return 'bg-primary text-primary-foreground';
      case 'Certified':
        return 'bg-success text-success-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className={`py-20 lg:py-32 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Icon name="BuildingOffice2Icon" size={16} className="mr-2" />
            Strategic Partnerships
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Powered by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground">
            Our strategic partnerships with technology leaders ensure you get the most advanced, reliable, and secure solutions for your enterprise needs.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) =>
          <div
            key={partner.id}
            className="group bg-surface rounded-2xl p-8 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 border border-border">

              {/* Partner Logo */}
              <div className="relative h-16 mb-6 flex items-center">
                <AppImage
                src={partner.logo}
                alt={partner.alt}
                className="h-12 w-auto object-contain" />

                <div className={`ml-auto px-3 py-1 rounded-full text-xs font-medium ${getIntegrationBadgeColor(partner.integrationLevel)}`}>
                  {partner.integrationLevel}
                </div>
              </div>

              {/* Partner Info */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">{partner.name}</h3>
                <div className="text-sm text-primary font-medium mb-3">{partner.category}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{partner.description}</p>
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-foreground">Certifications:</div>
                <div className="flex flex-wrap gap-2">
                  {partner.certifications.map((cert, index) =>
                <span
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">

                      {cert}
                    </span>
                )}
                </div>
              </div>

              {/* Integration Status */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center text-sm text-success">
                  <Icon name="CheckCircleIcon" size={16} className="mr-2" />
                  Active Integration
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Partnership Benefits
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our strategic partnerships deliver tangible benefits that accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="BoltIcon" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Faster Implementation</h4>
              <p className="text-sm text-muted-foreground">Pre-built integrations reduce deployment time by 60%</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheckIcon" size={24} className="text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Enhanced Security</h4>
              <p className="text-sm text-muted-foreground">Enterprise-grade security with compliance certifications</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="CurrencyDollarIcon" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Cost Optimization</h4>
              <p className="text-sm text-muted-foreground">Preferred pricing and volume discounts available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="PhoneIcon" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Priority Support</h4>
              <p className="text-sm text-muted-foreground">Direct access to partner technical support teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default PartnershipSection;