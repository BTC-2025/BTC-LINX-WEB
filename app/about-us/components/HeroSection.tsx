import React from 'react';
// import AppImage from '@/components/ui/AppImage';
import AppImage from '../../../components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-slate-50 to-white py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Transforming Business Through
                <span className="text-primary block">Intelligent Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At BTC Linx Enterprise, we don't just implement technology—we reimagine how businesses operate in the digital era. Our mission is to bridge the gap between human potential and intelligent automation.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Global Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <AppImage
                src="https://images.unsplash.com/photo-1717169196118-25d850bd5f9e"
                alt="Modern office building with glass facade reflecting blue sky and clouds, representing corporate innovation and technology"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl" />

            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;