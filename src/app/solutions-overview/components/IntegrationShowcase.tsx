import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Integration {
  id: string;
  name: string;
  category: string;
  logo: string;
  alt: string;
  description: string;
  compatibility: string[];
}

interface IntegrationShowcaseProps {
  onLearnMore: (integrationId: string) => void;
}

const IntegrationShowcase = ({ onLearnMore }: IntegrationShowcaseProps) => {
  const integrations: Integration[] = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
    category: 'Cloud Platform',
    logo: "https://images.unsplash.com/photo-1667984390535-6d03cff0b11a",
    alt: 'AWS cloud computing logo on modern server infrastructure background',
    description: 'Seamless integration with AWS services for scalable cloud deployment.',
    compatibility: ['AI Calling', 'Network Automation', 'Cloud Infrastructure']
  },
  {
    id: 'microsoft-azure',
    name: 'Microsoft Azure',
    category: 'Cloud Platform',
    logo: "https://images.unsplash.com/photo-1649443992089-8bf1fc3c42f4",
    alt: 'Microsoft Azure cloud platform interface displayed on computer screen',
    description: 'Native Azure integration for enterprise-grade security and compliance.',
    compatibility: ['Data Security', 'Business Intelligence', 'Cloud Infrastructure']
  },
  {
    id: 'salesforce',
    name: 'Salesforce CRM',
    category: 'Customer Management',
    logo: "https://images.unsplash.com/photo-1573311525852-81c1a0b8d03c",
    alt: 'Salesforce CRM dashboard showing customer data analytics and sales metrics',
    description: 'Direct CRM integration for enhanced customer relationship management.',
    compatibility: ['AI Calling', 'Business Intelligence']
  },
  {
    id: 'slack',
    name: 'Slack Workspace',
    category: 'Communication',
    logo: "https://images.unsplash.com/photo-1524635962361-d7f8ae9c79b1",
    alt: 'Slack team communication interface with multiple channels and notifications',
    description: 'Real-time notifications and team collaboration through Slack integration.',
    compatibility: ['Network Automation', 'Data Security']
  },
  {
    id: 'twilio',
    name: 'Twilio Communications',
    category: 'Communication API',
    logo: "https://images.unsplash.com/photo-1676573409128-fdffa81383fb",
    alt: 'Twilio communication API interface showing voice and messaging capabilities',
    description: 'Advanced voice and messaging capabilities through Twilio API.',
    compatibility: ['AI Calling']
  },
  {
    id: 'tableau',
    name: 'Tableau Analytics',
    category: 'Data Visualization',
    logo: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0",
    alt: 'Tableau data visualization dashboard with interactive charts and graphs',
    description: 'Advanced data visualization and business intelligence reporting.',
    compatibility: ['Business Intelligence']
  },
  {
    id: 'cisco',
    name: 'Cisco Networking',
    category: 'Network Infrastructure',
    logo: "https://images.unsplash.com/photo-1698668975271-2ba9a323be6b",
    alt: 'Cisco network equipment and switches in professional data center environment',
    description: 'Enterprise networking solutions and infrastructure management.',
    compatibility: ['Network Automation', 'Data Security']
  },
  {
    id: 'okta',
    name: 'Okta Identity',
    category: 'Identity Management',
    logo: "https://images.unsplash.com/photo-1669643470668-19d6fb1d3f21",
    alt: 'Okta identity management dashboard showing user authentication and security settings',
    description: 'Secure identity and access management for enterprise applications.',
    compatibility: ['Data Security', 'Cloud Infrastructure']
  }];


  const categories = [
  { name: 'Cloud Platform', icon: 'CloudIcon', count: 2 },
  { name: 'Communication', icon: 'ChatBubbleLeftRightIcon', count: 2 },
  { name: 'Customer Management', icon: 'UsersIcon', count: 1 },
  { name: 'Data Visualization', icon: 'ChartBarIcon', count: 1 },
  { name: 'Network Infrastructure', icon: 'GlobeAltIcon', count: 1 },
  { name: 'Identity Management', icon: 'ShieldCheckIcon', count: 1 }];


  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Integration Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Seamlessly connect with your existing tools and platforms through our comprehensive integration library.
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category) =>
          <div key={category.name} className="bg-white p-4 rounded-lg shadow-soft text-center">
              <Icon name={category.icon as any} size={32} className="text-primary mx-auto mb-2" />
              <div className="font-medium text-foreground text-sm">{category.name}</div>
              <div className="text-xs text-muted-foreground">{category.count} integration{category.count > 1 ? 's' : ''}</div>
            </div>
          )}
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {integrations.map((integration) =>
          <div
            key={integration.id}
            className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group">

              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <AppImage
                    src={integration.logo}
                    alt={integration.alt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground">{integration.category}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </div>

              {/* Compatibility */}
              <div className="p-6">
                <h4 className="font-medium text-foreground mb-3">Compatible Solutions</h4>
                <div className="space-y-2">
                  {integration.compatibility.map((solution) =>
                <div key={solution} className="flex items-center text-sm">
                      <Icon name="CheckIcon" size={16} className="text-success mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{solution}</span>
                    </div>
                )}
                </div>
                
                <button
                onClick={() => onLearnMore(integration.id)}
                className="w-full mt-4 bg-primary/10 text-primary py-2 px-4 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200">

                  Learn More
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Integration Benefits */}
        <div className="bg-white rounded-xl shadow-soft p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Why Choose Our Integration Platform?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BoltIcon" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Rapid Deployment</h4>
              <p className="text-muted-foreground text-sm">
                Pre-built connectors and APIs enable quick integration with minimal development time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheckIcon" size={32} className="text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Enterprise Security</h4>
              <p className="text-muted-foreground text-sm">
                Bank-level encryption and compliance standards ensure your data remains secure.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ArrowsRightLeftIcon" size={32} className="text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Seamless Sync</h4>
              <p className="text-muted-foreground text-sm">
                Real-time data synchronization keeps all your systems perfectly aligned.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8 pt-6 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Don't see your platform? We can build custom integrations for your specific needs.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200">
              <Icon name="PlusIcon" size={20} className="mr-2" />
              Request Custom Integration
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default IntegrationShowcase;