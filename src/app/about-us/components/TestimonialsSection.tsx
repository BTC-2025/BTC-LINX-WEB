'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TestimonialsSectionProps {
  className?: string;
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
  alt: string;
  rating: number;
  videoUrl?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Martinez",
    position: "Chief Technology Officer",
    company: "GlobalTech Solutions",
    content: "BTC Linx transformed our entire communication infrastructure. Their AI calling solution reduced our operational costs by 40% while improving customer satisfaction scores by 35%. The implementation was seamless, and their support team is exceptional.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_105eae956-1762249165986.png",
    alt: "Professional Hispanic man in dark suit with confident smile in modern office environment",
    rating: 5,
    videoUrl: "https://example.com/testimonial-video-1"
  },
  {
    id: 2,
    name: "Jennifer Park",
    position: "VP of Operations",
    company: "FinanceFirst Corp",
    content: "The network automation platform from BTC Linx has revolutionized how we manage our IT infrastructure. We've achieved 99.9% uptime and reduced manual intervention by 80%. Their team truly understands enterprise needs.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11d7bc7ea-1762273732946.png",
    alt: "Asian businesswoman with long black hair in professional navy blazer smiling confidently",
    rating: 5,
    videoUrl: "https://example.com/testimonial-video-2"
  },
  {
    id: 3,
    name: "Robert Thompson",
    position: "CEO",
    company: "Healthcare Innovations Inc",
    content: "Security and compliance are critical in healthcare. BTC Linx delivered a solution that not only meets all HIPAA requirements but also enhanced our operational efficiency. Their expertise in regulated industries is unmatched.",
    image: "https://images.unsplash.com/photo-1714974528889-d51109fb6ae9",
    alt: "Caucasian man with gray hair and beard in professional dark suit with warm smile",
    rating: 5,
    videoUrl: "https://example.com/testimonial-video-3"
  }];


  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Client Success Stories
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from executives who have transformed their businesses with our intelligent automation solutions.
          </p>
        </div>
        
        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-2">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) =>
                  <Icon key={i} name="StarIcon" size={20} className="text-accent fill-current" />
                  )}
                </div>
                
                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <AppImage
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].alt}
                    className="w-16 h-16 rounded-full object-cover" />

                  <div>
                    <div className="font-bold text-foreground">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-sm text-primary font-semibold">
                      {testimonials[activeTestimonial].position}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[activeTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <AppImage
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].alt}
                    className="w-48 h-48 rounded-2xl object-cover shadow-lg" />

                  {testimonials[activeTestimonial].videoUrl &&
                  <button className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl hover:bg-black/30 transition-colors duration-200">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Icon name="PlayIcon" size={24} className="text-primary ml-1" />
                      </div>
                    </button>
                  }
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200">

              <Icon name="ChevronLeftIcon" size={20} />
              Previous
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) =>
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === activeTestimonial ? 'bg-primary' : 'bg-primary/20'}`
                } />

              )}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200">

              Next
              <Icon name="ChevronRightIcon" size={20} />
            </button>
          </div>
        </div>
        
        {/* Additional Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Successful Implementations</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Enterprise Support</div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;