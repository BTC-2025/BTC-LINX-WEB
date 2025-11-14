import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

const FeaturesSection = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: "MicrophoneIcon",
      title: "Natural Language Processing",
      description: "Advanced AI that understands context, sentiment, and intent for human-like conversations.",
      benefits: [
        "98% accuracy in speech recognition",
        "Multi-language support (50+ languages)",
        "Real-time sentiment analysis",
        "Context-aware responses"
      ]
    },
    {
      id: 2,
      icon: "ChartBarIcon",
      title: "Intelligent Call Routing",
      description: "Smart distribution system that routes calls to the most suitable AI agent or human operator.",
      benefits: [
        "Reduced wait times by 75%",
        "Skill-based routing algorithms",
        "Priority queue management",
        "Load balancing optimization"
      ]
    },
    {
      id: 3,
      icon: "CogIcon",
      title: "Workflow Automation",
      description: "Streamline BPO processes with intelligent automation that learns and adapts to your operations.",
      benefits: [
        "Custom workflow designer",
        "Integration with existing CRM",
        "Automated follow-up sequences",
        "Performance analytics dashboard"
      ]
    },
    {
      id: 4,
      icon: "ClockIcon",
      title: "24/7 Availability",
      description: "Round-the-clock service capability with consistent quality and performance monitoring.",
      benefits: [
        "Zero downtime guarantee",
        "Global timezone support",
        "Instant scalability",
        "Continuous learning algorithms"
      ]
    },
    {
      id: 5,
      icon: "ShieldCheckIcon",
      title: "Security & Compliance",
      description: "Enterprise-grade security with full compliance to industry standards and regulations.",
      benefits: [
        "End-to-end encryption",
        "PCI DSS compliance",
        "HIPAA ready infrastructure",
        "Audit trail logging"
      ]
    },
    {
      id: 6,
      icon: "PresentationChartLineIcon",
      title: "Advanced Analytics",
      description: "Comprehensive insights and reporting to optimize performance and customer satisfaction.",
      benefits: [
        "Real-time performance metrics",
        "Customer satisfaction scoring",
        "Predictive analytics",
        "Custom reporting tools"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Powerful Features for Modern BPO Operations
          </h2>
          <p className="text-xl text-muted-foreground">
            Our AI calling platform combines cutting-edge technology with practical business solutions 
            to transform how you handle customer interactions and manage operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-surface rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon 
                  name={feature.icon as any} 
                  size={32} 
                  className="text-primary" 
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon 
                        name="CheckIcon" 
                        size={16} 
                        className="text-success mt-0.5 flex-shrink-0" 
                      />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Icon name="LightBulbIcon" size={16} className="mr-2" />
            Ready to transform your operations?
          </div>
          <p className="text-muted-foreground mb-6">
            Discover how these features can be customized for your specific business needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;