import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  const actionItems = [
  {
    title: 'Schedule a Demo',
    description: 'See our AI solutions in action with a personalized demonstration',
    icon: 'PlayIcon',
    href: '/ai-calling-solutions',
    primary: true
  },
  {
    title: 'Explore Solutions',
    description: 'Discover our comprehensive suite of AI and automation services',
    icon: 'CogIcon',
    href: '/solutions-overview',
    primary: false
  },
  {
    title: 'View Technology',
    description: 'Learn about our cutting-edge technology stack and partnerships',
    icon: 'CircuitBoardIcon',
    href: '/technology-stack',
    primary: false
  }];


  return (
    <section className={`py-20 bg-gradient-to-br from-primary/5 to-accent/5 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join hundreds of organizations that have already revolutionized their operations with our AI-powered solutions. Let's discuss how we can help your industry achieve similar success.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Implementations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-success mb-1">340%</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
            </div>

            {/* Action Items */}
            <div className="space-y-4">
              {actionItems.map((item, index) =>
              <Link
                key={index}
                href={item.href}
                className={`flex items-center space-x-4 p-6 rounded-xl border-2 transition-all duration-300 group ${
                item.primary ?
                'bg-primary text-primary-foreground border-primary hover:bg-primary/90 shadow-medium' :
                'bg-card text-foreground border-border hover:border-primary/50 hover:shadow-soft'}`
                }>

                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                item.primary ?
                'bg-primary-foreground/20' :
                'bg-primary/10 group-hover:bg-primary/20'}`
                }>
                    <Icon
                    name={item.icon as any}
                    size={24}
                    className={item.primary ? 'text-primary-foreground' : 'text-primary'} />

                  </div>
                  <div className="flex-1">
                    <div className={`font-semibold mb-1 ${
                  item.primary ? 'text-primary-foreground' : 'text-foreground'}`
                  }>
                      {item.title}
                    </div>
                    <div className={`text-sm ${
                  item.primary ? 'text-primary-foreground/80' : 'text-muted-foreground'}`
                  }>
                      {item.description}
                    </div>
                  </div>
                  <Icon
                  name="ArrowRightIcon"
                  size={20}
                  className={`transition-transform duration-300 group-hover:translate-x-1 ${
                  item.primary ? 'text-primary-foreground' : 'text-muted-foreground'}`
                  } />

                </Link>
              )}
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">
                Have questions? Our industry experts are here to help.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="PhoneIcon" size={16} className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="EnvelopeIcon" size={16} className="text-primary" />
                  <span>solutions@btclinx.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="ClockIcon" size={16} className="text-primary" />
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <AppImage
                src="https://images.unsplash.com/photo-1719978184147-c5bf6b82c6e1"
                alt="Diverse business team collaborating around conference table with laptops and documents in modern office"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl" />

            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-medium">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="CheckCircleIcon" size={20} className="text-success" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Success Rate</div>
                  <div className="text-xs text-muted-foreground">98.5% Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-medium">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="RocketLaunchIcon" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Fast Deployment</div>
                  <div className="text-xs text-muted-foreground">30-90 Day Implementation</div>
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CTASection;