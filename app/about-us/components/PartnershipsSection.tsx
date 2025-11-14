import React from 'react';
// import AppImage from '@/components/ui/AppImage';
// import Icon from '@/components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

interface PartnershipsSectionProps {
  className?: string;
}

interface Partner {
  id: number;
  name: string;
  category: string;
  logo: string;
  alt: string;
  description: string;
  integrations: string[];
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
  icon: string;
  description: string;
  validUntil: string;
}

const PartnershipsSection = ({ className = '' }: PartnershipsSectionProps) => {
  const partners: Partner[] = [
  {
    id: 1,
    name: "Amazon Web Services",
    category: "Cloud Infrastructure",
    logo: "https://images.unsplash.com/photo-1679872996070-7903e943d24a",
    alt: "AWS logo on modern office building glass facade with blue and orange branding",
    description: "Advanced Partner with expertise in AI/ML services, serverless computing, and enterprise-scale deployments.",
    integrations: ["EC2", "Lambda", "SageMaker", "Connect"]
  },
  {
    id: 2,
    name: "Microsoft Azure",
    category: "Cloud & AI Platform",
    logo: "https://images.unsplash.com/photo-1680128370051-5abace0dfcd9",
    alt: "Microsoft Azure cloud services logo displayed on modern digital screen with blue gradient background",
    description: "Gold Partner specializing in Azure AI, Cognitive Services, and enterprise identity management solutions.",
    integrations: ["Azure AI", "Active Directory", "Teams", "Power Platform"]
  },
  {
    id: 3,
    name: "Cisco Systems",
    category: "Network Infrastructure",
    logo: "https://images.unsplash.com/photo-1554220170-a389aff2a0c3",
    alt: "Cisco networking equipment and routers in professional data center with blue LED indicators",
    description: "Premier Partner for network automation, security solutions, and unified communications infrastructure.",
    integrations: ["Webex", "Meraki", "DNA Center", "SecureX"]
  },
  {
    id: 4,
    name: "Twilio",
    category: "Communications API",
    logo: "https://images.unsplash.com/photo-1732789953074-383034041056",
    alt: "Modern communication technology setup with multiple screens showing API integration dashboards",
    description: "Strategic Partner for voice, messaging, and video communications with global reach and reliability.",
    integrations: ["Voice API", "SMS", "Video", "Flex"]
  }];


  const certifications: Certification[] = [
  {
    id: 1,
    name: "SOC 2 Type II",
    issuer: "AICPA",
    icon: "ShieldCheckIcon",
    description: "Comprehensive security, availability, and confidentiality controls audit",
    validUntil: "December 2024"
  },
  {
    id: 2,
    name: "ISO 27001:2013",
    issuer: "ISO",
    icon: "LockClosedIcon",
    description: "International standard for information security management systems",
    validUntil: "March 2025"
  },
  {
    id: 3,
    name: "GDPR Compliance",
    issuer: "EU Commission",
    icon: "DocumentCheckIcon",
    description: "Full compliance with European data protection regulations",
    validUntil: "Ongoing"
  },
  {
    id: 4,
    name: "HIPAA Compliant",
    issuer: "HHS",
    icon: "HeartIcon",
    description: "Healthcare information privacy and security standards certification",
    validUntil: "Ongoing"
  }];


  return (
    <section className={`py-20 bg-slate-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Partnerships & Certifications
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our strategic partnerships and industry certifications ensure we deliver enterprise-grade solutions with the highest standards of security and reliability.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Strategic Partners */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground text-center">Strategic Technology Partners</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {partners.map((partner) =>
              <div key={partner.id} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <AppImage
                      src={partner.logo}
                      alt={partner.alt}
                      className="w-16 h-16 rounded-lg object-cover" />

                      <div>
                        <h4 className="text-lg font-bold text-foreground">{partner.name}</h4>
                        <p className="text-sm text-primary font-semibold">{partner.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-3">Key Integrations</h5>
                      <div className="flex flex-wrap gap-2">
                        {partner.integrations.map((integration, index) =>
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {integration}
                          </span>
                      )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground text-center">Industry Certifications</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) =>
              <div key={cert.id} className="bg-white rounded-xl p-6 text-center shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon name={cert.icon as any} size={32} className="text-primary" />
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-primary font-semibold">{cert.issuer}</p>
                    </div>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="text-xs text-muted-foreground">
                      Valid until: {cert.validUntil}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Trust Metrics */}
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="text-center space-y-6 mb-8">
              <h3 className="text-2xl font-bold text-foreground">Trust & Reliability Metrics</h3>
              <p className="text-muted-foreground">
                Our commitment to excellence is reflected in our performance and client satisfaction metrics.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">99.99%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Global Support</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default PartnershipsSection;