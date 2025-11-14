import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CompanyTimelineSectionProps {
  className?: string;
}

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: string;
  category: 'founding' | 'milestone' | 'innovation' | 'expansion';
}

const CompanyTimelineSection = ({ className = '' }: CompanyTimelineSectionProps) => {
  const timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      year: '2018',
      title: 'Company Founded',
      description: 'BTC Linx Enterprise was established with a vision to bridge the gap between artificial intelligence and enterprise infrastructure.',
      icon: 'RocketLaunchIcon',
      category: 'founding'
    },
    {
      id: 2,
      year: '2019',
      title: 'First Enterprise Client',
      description: 'Secured our first major enterprise contract, implementing AI-powered communication solutions for a Fortune 500 company.',
      icon: 'BuildingOfficeIcon',
      category: 'milestone'
    },
    {
      id: 3,
      year: '2020',
      title: 'AI Calling Platform Launch',
      description: 'Launched our revolutionary AI calling platform, setting new industry standards for conversational artificial intelligence.',
      icon: 'PhoneIcon',
      category: 'innovation'
    },
    {
      id: 4,
      year: '2021',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across North America, Europe, and Asia-Pacific regions with 24/7 support.',
      icon: 'GlobeAltIcon',
      category: 'expansion'
    },
    {
      id: 5,
      year: '2022',
      title: 'Network Automation Suite',
      description: 'Introduced comprehensive network automation solutions with self-healing capabilities and predictive maintenance.',
      icon: 'CpuChipIcon',
      category: 'innovation'
    },
    {
      id: 6,
      year: '2023',
      title: 'Security Framework 2.0',
      description: 'Deployed quantum-safe security framework, becoming the first in our industry to implement post-quantum cryptography.',
      icon: 'ShieldCheckIcon',
      category: 'innovation'
    },
    {
      id: 7,
      year: '2024',
      title: '500+ Enterprise Clients',
      description: 'Reached the milestone of serving over 500 enterprise clients globally with 98% satisfaction rate and 99.9% uptime.',
      icon: 'TrophyIcon',
      category: 'milestone'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'founding': return 'bg-accent text-accent-foreground';
      case 'milestone': return 'bg-success text-success-foreground';
      case 'innovation': return 'bg-primary text-primary-foreground';
      case 'expansion': return 'bg-warning text-warning-foreground';
      default: return 'bg-primary text-primary-foreground';
    }
  };

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Our Journey
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Milestones of Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a visionary startup to a global leader in intelligent enterprise solutions, 
            our journey reflects our commitment to continuous innovation and client success.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden lg:block"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className="relative flex flex-col lg:flex-row gap-8 items-start">
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                
                {/* Year Badge */}
                <div className="flex-shrink-0 lg:ml-20">
                  <div className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                    {event.year}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 lg:ml-8">
                  <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-6">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getCategoryColor(event.category)}`}>
                        <Icon name={event.icon as any} size={24} />
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getCategoryColor(event.category)}`}>
                            {event.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Future Vision */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <div className="space-y-4">
              <Icon name="EyeIcon" size={48} className="text-primary mx-auto" />
              <h3 className="text-2xl font-bold text-foreground">Looking Ahead</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                As we continue our journey, we're focused on pioneering the next generation of intelligent automation, 
                quantum computing integration, and autonomous system orchestration. The future of enterprise technology 
                starts here.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2025</div>
                  <div className="text-sm text-muted-foreground">Quantum AI Launch</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2026</div>
                  <div className="text-sm text-muted-foreground">Global Expansion</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2027</div>
                  <div className="text-sm text-muted-foreground">Industry Leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimelineSection;