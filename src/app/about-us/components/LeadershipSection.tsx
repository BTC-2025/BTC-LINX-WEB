import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface LeadershipSectionProps {
  className?: string;
}

interface Leader {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  alt: string;
  expertise: string[];
  linkedin: string;
}

const LeadershipSection = ({ className = '' }: LeadershipSectionProps) => {
  const leaders: Leader[] = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "Chief Executive Officer",
    bio: "With over 15 years in enterprise technology, Sarah leads BTC Linx's vision of intelligent automation. Former VP of Engineering at Microsoft Azure, she brings deep expertise in cloud infrastructure and AI implementation.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_129b1ff05-1762273604073.png",
    alt: "Professional Asian woman with shoulder-length black hair in navy blazer smiling confidently at camera",
    expertise: ["Cloud Architecture", "AI Strategy", "Enterprise Scaling"],
    linkedin: "https://linkedin.com/in/sarahchen"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    position: "Chief Technology Officer",
    bio: "Marcus drives our technical innovation with 12+ years in AI and machine learning. Previously Lead AI Architect at Google Cloud, he specializes in building scalable intelligent systems for enterprise environments.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12a89df3e-1762274591202.png",
    alt: "Hispanic man with short dark hair and beard wearing charcoal suit jacket with confident professional expression",
    expertise: ["Machine Learning", "System Architecture", "DevOps"],
    linkedin: "https://linkedin.com/in/marcusrodriguez"
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    position: "Chief Innovation Officer",
    bio: "Emily leads our R&D initiatives with a PhD in Computer Science from MIT. Her research in conversational AI and natural language processing drives our cutting-edge communication solutions.",
    image: "https://images.unsplash.com/photo-1685540943335-c399ded1b63f",
    alt: "Caucasian woman with blonde hair in professional white blouse smiling warmly in modern office setting",
    expertise: ["AI Research", "NLP", "Product Innovation"],
    linkedin: "https://linkedin.com/in/emilywatson"
  },
  {
    id: 4,
    name: "James Thompson",
    position: "Chief Operating Officer",
    bio: "James ensures operational excellence across all our services with 18+ years in enterprise operations. Former COO at Salesforce, he brings expertise in scaling global technology operations.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1228e6e55-1762274136130.png",
    alt: "African American man with short hair wearing navy blue suit and tie with professional confident smile",
    expertise: ["Operations Management", "Process Optimization", "Global Scaling"],
    linkedin: "https://linkedin.com/in/jamesthompson"
  }];


  return (
    <section className={`py-20 bg-slate-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Leadership Team
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Visionary Leaders Driving Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our executive team combines decades of enterprise technology experience with a passion for transforming how businesses operate through intelligent automation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader) =>
          <div key={leader.id} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <AppImage
                  src={leader.image}
                  alt={leader.alt}
                  className="w-24 h-24 rounded-xl object-cover" />

                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                    <p className="text-primary font-semibold">{leader.position}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {leader.bio}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Expertise Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, index) =>
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {skill}
                          </span>
                      )}
                      </div>
                    </div>
                    
                    <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200">

                      <Icon name="LinkIcon" size={16} />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default LeadershipSection;