import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-slate-50 to-slate-100 py-20 lg:py-32 overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Industry Expertise
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Industries We
                <span className="text-primary block">Transform</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Tailored AI and automation solutions designed for the unique challenges and opportunities of your industry. From BPO to healthcare, we deliver measurable transformation.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>6 Core Industries</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>500+ Implementations</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <AppImage
                src="https://images.unsplash.com/photo-1717169196118-25d850bd5f9e"
                alt="Modern office building with glass facade reflecting blue sky and clouds representing diverse industries"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl" />

            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-medium">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">BPO Automation</div>
                  <div className="text-xs text-muted-foreground">40% Cost Reduction</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-medium">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-accent rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Healthcare AI</div>
                  <div className="text-xs text-muted-foreground">60% Faster Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;