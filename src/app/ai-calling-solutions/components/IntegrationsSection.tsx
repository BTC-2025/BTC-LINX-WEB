import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Integration {
  id: number;
  name: string;
  category: string;
  logo: string;
  alt: string;
  description: string;
  features: string[];
}

const IntegrationsSection = () => {
  const integrations: Integration[] = [
  {
    id: 1,
    name: "Salesforce CRM",
    category: "CRM",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12ef58911-1763046734048.png",
    alt: "Salesforce CRM integration logo with cloud computing symbols and customer relationship management icons",
    description: "Seamless integration with Salesforce for complete customer lifecycle management.",
    features: ["Real-time data sync", "Lead scoring", "Automated follow-ups", "Custom fields mapping"]
  },
  {
    id: 2,
    name: "Microsoft Teams",
    category: "Communication",
    logo: "https://images.unsplash.com/photo-1633410189542-36d96e3762b8",
    alt: "Microsoft Teams collaboration platform logo with video conferencing and team communication elements",
    description: "Direct integration with Teams for unified communication and collaboration.",
    features: ["Video conferencing", "Chat integration", "File sharing", "Calendar sync"]
  },
  {
    id: 3,
    name: "Twilio Voice",
    category: "Telephony",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_14465646c-1763046731692.png",
    alt: "Twilio voice communication platform logo with telephony and API integration symbols",
    description: "Powered by Twilio's robust voice infrastructure for global reach.",
    features: ["Global phone numbers", "SIP trunking", "Call recording", "Voice analytics"]
  },
  {
    id: 4,
    name: "HubSpot",
    category: "Marketing",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1355d11cc-1763046731680.png",
    alt: "HubSpot marketing automation platform logo with inbound marketing and lead generation graphics",
    description: "Complete marketing automation integration with HubSpot's ecosystem.",
    features: ["Lead nurturing", "Email campaigns", "Marketing analytics", "Contact scoring"]
  },
  {
    id: 5,
    name: "Zendesk",
    category: "Support",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10bfe6266-1763046731829.png",
    alt: "Zendesk customer support platform logo with help desk and ticket management interface elements",
    description: "Integrated customer support workflows with Zendesk's ticketing system.",
    features: ["Ticket creation", "Agent handoff", "Knowledge base", "SLA tracking"]
  },
  {
    id: 6,
    name: "Slack",
    category: "Collaboration",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17d9dd657-1763046731369.png",
    alt: "Slack team collaboration platform logo with messaging channels and workplace communication tools",
    description: "Real-time notifications and team collaboration through Slack channels.",
    features: ["Channel notifications", "Bot commands", "File sharing", "Workflow automation"]
  }];


  const categories = ["All", "CRM", "Communication", "Telephony", "Marketing", "Support", "Collaboration"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredIntegrations = activeCategory === "All" ?
  integrations :
  integrations.filter((integration) => integration.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Seamless Integrations with Your Existing Tools
          </h2>
          <p className="text-xl text-muted-foreground">
            Connect our AI calling platform with your favorite business tools and workflows. 
            Over 100+ pre-built integrations available with enterprise-grade security.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === category ?
            'bg-primary text-primary-foreground shadow-md' :
            'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'}`
            }>

              {category}
            </button>
          )}
        </div>

        {/* Integrations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredIntegrations.map((integration) =>
          <div
            key={integration.id}
            className="group bg-surface rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20">

              {/* Logo and Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden">
                  <AppImage
                  src={integration.logo}
                  alt={integration.alt}
                  className="w-12 h-12 object-contain" />

                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {integration.name}
                  </h3>
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                    {integration.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {integration.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-4">
                {integration.features.map((feature, index) =>
              <div key={index} className="flex items-center space-x-2">
                    <Icon name="CheckIcon" size={14} className="text-success flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </div>
              )}
              </div>

              {/* Action Button */}
              <button className="w-full py-2 px-4 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200">
                Learn More
              </button>
            </div>
          )}
        </div>

        {/* Integration Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Available Integrations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">&lt;5min</div>
            <div className="text-sm text-muted-foreground">Setup Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>

        {/* Custom Integration CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-primary/20">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Need a Custom Integration?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our development team can create custom integrations for your specific tools and workflows. 
            Enterprise clients get priority access to our integration development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
              <Icon name="CodeBracketIcon" size={20} className="mr-2" />
              Request Custom Integration
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200">
              <Icon name="DocumentTextIcon" size={20} className="mr-2" />
              View API Documentation
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default IntegrationsSection;