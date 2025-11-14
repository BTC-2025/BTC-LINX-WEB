import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TechnologyPhilosophySectionProps {
  className?: string;
}

const TechnologyPhilosophySection = ({ className = '' }: TechnologyPhilosophySectionProps) => {
  const principles = [
    {
      icon: 'CpuChipIcon',
      title: 'AI-First Architecture',
      description: 'Every solution we build incorporates artificial intelligence from the ground up, ensuring adaptive and intelligent behavior that evolves with your business needs.'
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Security by Design',
      description: 'Enterprise-grade security isn\'t an afterthought—it\'s woven into every layer of our technology stack, from data encryption to access controls.'
    },
    {
      icon: 'ArrowPathIcon',
      title: 'Continuous Innovation',
      description: 'We embrace emerging technologies and methodologies, constantly evolving our solutions to stay ahead of industry trends and client needs.'
    },
    {
      icon: 'PuzzlePieceIcon',
      title: 'Seamless Integration',
      description: 'Our solutions are designed to integrate effortlessly with existing enterprise systems, minimizing disruption while maximizing value.'
    },
    {
      icon: 'ChartBarIcon',
      title: 'Data-Driven Decisions',
      description: 'Every recommendation and optimization is backed by comprehensive analytics and real-world performance metrics.'
    },
    {
      icon: 'UserGroupIcon',
      title: 'Human-Centric Design',
      description: 'Technology should empower people, not replace them. Our solutions enhance human capabilities and improve user experiences.'
    }
  ];

  const innovations = [
    {
      year: '2024',
      title: 'Advanced AI Calling Platform',
      description: 'Launched next-generation conversational AI with 99.2% accuracy in natural language understanding.'
    },
    {
      year: '2023',
      title: 'Quantum-Safe Security Framework',
      description: 'Implemented post-quantum cryptography standards across all enterprise solutions.'
    },
    {
      year: '2022',
      title: 'Intelligent Network Automation',
      description: 'Developed self-healing network infrastructure with predictive maintenance capabilities.'
    },
    {
      year: '2021',
      title: 'Enterprise AI Analytics Suite',
      description: 'Created comprehensive business intelligence platform with real-time decision support.'
    }
  ];

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Technology Philosophy
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Innovation Through Intelligent Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our technology philosophy centers on creating intelligent, secure, and scalable solutions that adapt to the evolving needs of modern enterprises.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Core Principles */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">Core Principles</h3>
            
            <div className="grid gap-6">
              {principles.map((principle, index) => (
                <div key={index} className="flex gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={principle.icon as any} size={24} className="text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">{principle.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Innovation Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">Recent Innovations</h3>
            
            <div className="space-y-6">
              {innovations.map((innovation, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l-2 border-primary/20 last:border-l-0 last:pb-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {innovation.year}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground">{innovation.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {innovation.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
              <div className="flex items-start gap-4">
                <Icon name="LightBulbIcon" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Innovation Pipeline</h4>
                  <p className="text-sm text-muted-foreground">
                    We're currently developing next-generation solutions in quantum computing integration, 
                    advanced neural networks, and autonomous system orchestration. Stay tuned for groundbreaking 
                    announcements in 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPhilosophySection;