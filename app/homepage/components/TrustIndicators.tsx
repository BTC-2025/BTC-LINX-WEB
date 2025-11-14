import React from 'react';
// import Icon from '@/components/ui/AppIcon';
// import AppImage from '@/components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';

interface Partnership {
  id: string;
  name: string;
  logo: string;
  alt: string;
  category: string;
}

interface Certification {
  id: string;
  name: string;
  description: string;
  icon: string;
  badge: string;
  alt: string;
}

interface TrustIndicatorsProps {
  className?: string;
}

const TrustIndicators = ({ className = '' }: TrustIndicatorsProps) => {
  const partnerships: Partnership[] = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
    logo: "https://images.unsplash.com/photo-1669865015890-4dbd855de0f7",
    alt: 'Amazon Web Services AWS cloud computing platform logo with orange and white branding',
    category: 'Cloud Infrastructure'
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    logo: "https://images.unsplash.com/photo-1609912349845-67470841177f",
    alt: 'Microsoft Azure cloud services logo featuring blue gradient design elements',
    category: 'Cloud Platform'
  },
  {
    id: 'cisco',
    name: 'Cisco Systems',
    logo: "https://images.unsplash.com/photo-1655871282200-5ccf88e2a7de",
    alt: 'Cisco Systems networking equipment logo with blue corporate branding and technology themes',
    category: 'Network Infrastructure'
  },
  {
    id: 'openai',
    name: 'OpenAI',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_197409683-1763046735244.png",
    alt: 'OpenAI artificial intelligence company logo with modern minimalist design and AI symbolism',
    category: 'AI Technology'
  },
  {
    id: 'twilio',
    name: 'Twilio',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17c426273-1763046732379.png",
    alt: 'Twilio communications platform logo featuring red branding and cloud communication symbols',
    category: 'Communications API'
  }];


  const certifications: Certification[] = [
  {
    id: 'soc2',
    name: 'SOC 2 Type II',
    description: 'Audited security controls and compliance standards',
    icon: 'ShieldCheckIcon',
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed49eff1-1763046734257.png",
    alt: 'SOC 2 Type II compliance certification badge with security shield and audit verification symbols'
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    description: 'Information security management system certification',
    icon: 'LockClosedIcon',
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_1c9c22400-1763046733323.png",
    alt: 'ISO 27001 information security certification badge with international standards organization branding'
  },
  {
    id: 'gdpr',
    name: 'GDPR Compliant',
    description: 'European data protection regulation compliance',
    icon: 'DocumentCheckIcon',
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_12fa5c199-1763046732870.png",
    alt: 'GDPR compliance certification badge with European Union flag colors and data protection symbols'
  },
  {
    id: 'hipaa',
    name: 'HIPAA Ready',
    description: 'Healthcare information privacy and security standards',
    icon: 'HeartIcon',
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_1d1f60a65-1763046732383.png",
    alt: 'HIPAA healthcare compliance badge with medical cross and privacy protection symbols'
  }];


  const performanceStats = [
  {
    metric: '99.9%',
    label: 'Uptime SLA',
    description: 'Guaranteed service availability'
  },
  {
    metric: '<50ms',
    label: 'Response Time',
    description: 'Global network latency'
  },
  {
    metric: '24/7',
    label: 'Support',
    description: 'Enterprise-grade assistance'
  },
  {
    metric: '500+',
    label: 'Enterprises',
    description: 'Trusted worldwide'
  }];


  return (
    <section className={`py-20 bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Enterprise-Grade Trust & Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on industry-leading partnerships and certified security standards that enterprise customers demand.
          </p>
        </div>

        {/* Technology Partnerships */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Technology Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {partnerships.map((partner, index) =>
            <div
              key={partner.id}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}>

                <div className="bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:scale-105">
                  <AppImage
                  src={partner.logo}
                  alt={partner.alt}
                  className="h-12 w-auto mx-auto mb-3 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />

                  <p className="text-sm font-medium text-foreground">{partner.name}</p>
                  <p className="text-xs text-muted-foreground">{partner.category}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Security Certifications */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Security & Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) =>
            <div
              key={cert.id}
              className="bg-background rounded-xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}>

                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                  name={cert.icon as any}
                  size={24}
                  className="text-primary" />

                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Performance Statistics */}
        <div className="bg-background rounded-2xl p-8 lg:p-12">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Performance Guarantees
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceStats.map((stat, index) =>
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}>

                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.metric}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Security Statement */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-success/10 text-success rounded-full">
            <Icon name="ShieldCheckIcon" size={20} className="mr-2" />
            <span className="font-medium">Enterprise Security Verified</span>
          </div>
          <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
            All systems undergo continuous security monitoring and regular third-party audits to ensure the highest levels of data protection and system integrity.
          </p>
        </div>
      </div>
    </section>);

};

export default TrustIndicators;