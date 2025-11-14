import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MissionVisionSectionProps {
  className?: string;
}

const MissionVisionSection = ({ className = '' }: MissionVisionSectionProps) => {
  const values = [
    {
      icon: 'LightBulbIcon',
      title: 'Innovation First',
      description: 'We pioneer cutting-edge solutions that push the boundaries of what\'s possible in enterprise technology.'
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Trust & Security',
      description: 'Every solution we deliver is built with enterprise-grade security and reliability at its core.'
    },
    {
      icon: 'UserGroupIcon',
      title: 'Client Partnership',
      description: 'We believe in long-term partnerships, working alongside our clients to achieve sustainable growth.'
    },
    {
      icon: 'ChartBarIcon',
      title: 'Measurable Impact',
      description: 'Our success is measured by the tangible business outcomes we deliver for our clients.'
    }
  ];

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Mission & Vision */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Our Purpose
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Mission & Vision
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
                  <Icon name="TargetIcon" size={24} className="text-primary" />
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower enterprises with intelligent automation solutions that transform operations, enhance productivity, and drive sustainable growth. We bridge the gap between human potential and artificial intelligence, creating seamless ecosystems where technology amplifies human capability.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
                  <Icon name="EyeIcon" size={24} className="text-primary" />
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in intelligent enterprise solutions, setting the standard for how businesses leverage AI and automation. We envision a future where every organization operates with unprecedented efficiency, security, and innovation through our transformative technologies.
                </p>
              </div>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Core Values</h3>
              <p className="text-muted-foreground">
                The principles that guide every decision and drive our commitment to excellence.
              </p>
            </div>
            
            <div className="grid gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 p-6 bg-slate-50 rounded-xl hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={value.icon as any} size={24} className="text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;