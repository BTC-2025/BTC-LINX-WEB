import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Metric {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: string;
}

interface ClientSuccessMetricsProps {
  className?: string;
}

const ClientSuccessMetrics = ({ className = '' }: ClientSuccessMetricsProps) => {
  const metrics: Metric[] = [
  {
    id: 'cost-reduction',
    value: '60%',
    label: 'Average Cost Reduction',
    description: 'Clients see significant operational cost savings within the first quarter',
    icon: 'TrendingDownIcon'
  },
  {
    id: 'efficiency-gain',
    value: '4.2x',
    label: 'Efficiency Improvement',
    description: 'Automated processes deliver exponential productivity gains',
    icon: 'BoltIcon'
  },
  {
    id: 'uptime',
    value: '99.9%',
    label: 'System Uptime',
    description: 'Enterprise-grade reliability with minimal downtime',
    icon: 'ShieldCheckIcon'
  },
  {
    id: 'roi',
    value: '340%',
    label: 'Average ROI',
    description: 'Return on investment achieved within 12 months',
    icon: 'ChartBarIcon'
  }];


  const clientLogos = [
  {
    name: 'TechCorp Solutions',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe2c016a-1763046731686.png",
    alt: 'TechCorp Solutions company logo with modern geometric design'
  },
  {
    name: 'Global Finance Inc',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f88ca084-1763046731691.png",
    alt: 'Global Finance Inc corporate logo featuring professional banking imagery'
  },
  {
    name: 'Healthcare Plus',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_197612ab1-1763046732769.png",
    alt: 'Healthcare Plus medical services logo with healthcare cross symbol'
  },
  {
    name: 'EduTech Systems',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1dc4848a8-1763046731236.png",
    alt: 'EduTech Systems educational technology logo with academic elements'
  },
  {
    name: 'RetailMax Group',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_194535267-1763046732215.png",
    alt: 'RetailMax Group e-commerce company logo with shopping and retail themes'
  },
  {
    name: 'TeleConnect Pro',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f7f66c14-1763046733238.png",
    alt: 'TeleConnect Pro telecommunications logo featuring network connectivity design'
  }];


  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Success Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our clients achieve measurable business transformation through intelligent automation solutions that deliver real ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) =>
          <div
            key={metric.id}
            className="text-center animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}>

              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon
                name={metric.icon as any}
                size={32}
                className="text-primary" />

              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {metric.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {metric.description}
              </p>
            </div>
          )}
        </div>

        {/* Client Testimonial */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) =>
                <Icon
                  key={i}
                  name="StarIcon"
                  size={20}
                  variant="solid"
                  className="text-accent mr-1" />

                )}
              </div>
              <blockquote className="text-xl text-foreground mb-6 italic">
                "BTC Linx transformed our customer service operations completely. We've seen a 65% reduction in response times and our customer satisfaction scores have never been higher. The AI calling solution pays for itself."
              </blockquote>
              <div className="flex items-center">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_11e5ccf8c-1762274526834.png"
                  alt="Professional headshot of Michael Chen, CTO at TechCorp Solutions, Asian man in navy suit smiling"
                  className="w-12 h-12 rounded-full object-cover mr-4" />

                <div>
                  <p className="font-semibold text-foreground">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">CTO, TechCorp Solutions</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <AppImage
                src="https://images.unsplash.com/photo-1643025267097-377a54606081"
                alt="Modern corporate meeting room with executives reviewing AI analytics dashboards on large wall-mounted displays"
                className="w-full h-64 lg:h-80 object-cover rounded-xl" />

              <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold">
                Live System
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-8">
            Trusted by Leading Enterprises Worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {clientLogos.map((client, index) =>
            <div
              key={client.name}
              className="flex items-center justify-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}>

                <AppImage
                src={client.logo}
                alt={client.alt}
                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />

              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default ClientSuccessMetrics;