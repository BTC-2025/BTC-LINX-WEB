'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CultureCareersSectionProps {
  className?: string;
}

interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

interface CultureValue {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
}

const CultureCareersSection = ({ className = '' }: CultureCareersSectionProps) => {
  const [activeTab, setActiveTab] = useState<'culture' | 'careers'>('culture');

  const cultureValues: CultureValue[] = [
  {
    id: 1,
    title: 'Innovation & Excellence',
    description: 'We foster a culture of continuous learning and breakthrough thinking, where every team member is empowered to push boundaries and create exceptional solutions.',
    icon: 'LightBulbIcon',
    image: "https://images.unsplash.com/photo-1573497161854-72447225081d",
    alt: 'Diverse team of professionals collaborating around modern conference table with laptops and documents'
  },
  {
    id: 2,
    title: 'Work-Life Balance',
    description: 'We believe that great work comes from fulfilled individuals. Our flexible work arrangements and comprehensive benefits support both professional growth and personal well-being.',
    icon: 'ScaleIcon',
    image: "https://images.unsplash.com/photo-1720774531750-9483452857fb",
    alt: 'Professional working comfortably from modern home office setup with natural lighting and plants'
  },
  {
    id: 3,
    title: 'Diversity & Inclusion',
    description: 'Our strength comes from our diversity. We create an inclusive environment where different perspectives, backgrounds, and experiences drive innovation and success.',
    icon: 'UserGroupIcon',
    image: "https://images.unsplash.com/photo-1714976327248-935ac2568c1d",
    alt: 'Multicultural team of professionals from different backgrounds smiling together in modern office space'
  }];


  const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead the development of next-generation AI calling solutions and conversational AI systems.'
  },
  {
    id: 2,
    title: 'Cloud Infrastructure Architect',
    department: 'Infrastructure',
    location: 'Austin, TX / Remote',
    type: 'Full-time',
    experience: '7+ years',
    description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.'
  },
  {
    id: 3,
    title: 'Product Manager - Enterprise Solutions',
    department: 'Product',
    location: 'New York, NY / Remote',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Drive product strategy and roadmap for our enterprise automation platform.'
  },
  {
    id: 4,
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'Seattle, WA / Remote',
    type: 'Full-time',
    experience: '6+ years',
    description: 'Enhance our security framework and ensure compliance across all enterprise solutions.'
  },
  {
    id: 5,
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Chicago, IL / Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Ensure client success and drive adoption of our intelligent automation solutions.'
  }];


  return (
    <section className={`py-20 bg-slate-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Culture & Careers
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Join Our Innovation Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a team that's shaping the future of enterprise technology. 
            Discover our culture and explore exciting career opportunities.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-soft">
            <button
              onClick={() => setActiveTab('culture')}
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 ${
              activeTab === 'culture' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`
              }>

              Company Culture
            </button>
            <button
              onClick={() => setActiveTab('careers')}
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 ${
              activeTab === 'careers' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`
              }>

              Career Opportunities
            </button>
          </div>
        </div>
        
        {/* Culture Tab Content */}
        {activeTab === 'culture' &&
        <div className="space-y-16">
            <div className="grid lg:grid-cols-3 gap-8">
              {cultureValues.map((value) =>
            <div key={value.id} className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <AppImage
                src={value.image}
                alt={value.alt}
                className="w-full h-48 object-cover" />

                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={value.icon as any} size={20} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
            )}
            </div>
            
            {/* Benefits Section */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <div className="text-center space-y-6 mb-12">
                <h3 className="text-2xl font-bold text-foreground">Employee Benefits & Perks</h3>
                <p className="text-muted-foreground">
                  We invest in our team's success with comprehensive benefits and growth opportunities.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Icon name="HeartIcon" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Health & Wellness</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive medical, dental, and mental health coverage</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Icon name="AcademicCapIcon" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Learning & Development</h4>
                  <p className="text-sm text-muted-foreground">$5,000 annual learning budget and conference attendance</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Icon name="HomeIcon" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Flexible Work</h4>
                  <p className="text-sm text-muted-foreground">Remote-first culture with flexible hours and locations</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Icon name="GiftIcon" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Equity & Bonuses</h4>
                  <p className="text-sm text-muted-foreground">Stock options and performance-based bonuses</p>
                </div>
              </div>
            </div>
          </div>
        }
        
        {/* Careers Tab Content */}
        {activeTab === 'careers' &&
        <div className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h3 className="text-2xl font-bold text-foreground">Open Positions</h3>
              <p className="text-muted-foreground">
                Join our team of innovators and help shape the future of enterprise technology.
              </p>
            </div>
            
            <div className="grid gap-6">
              {jobOpenings.map((job) =>
            <div key={job.id} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <h4 className="text-lg font-bold text-foreground">{job.title}</h4>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {job.department}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="MapPinIcon" size={16} />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="ClockIcon" size={16} />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="BriefcaseIcon" size={16} />
                          {job.experience}
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Link
                    href="/solutions-overview"
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold">

                        Apply Now
                        <Icon name="ArrowRightIcon" size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
            )}
            </div>
            
            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center border border-primary/10">
              <div className="space-y-4">
                <Icon name="UserPlusIcon" size={48} className="text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Don't See Your Role?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're always looking for exceptional talent. Send us your resume and let us know 
                  how you'd like to contribute to our mission of transforming enterprise technology.
                </p>
                <Link
                href="/solutions-overview"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold">

                  Send Resume
                  <Icon name="PaperAirplaneIcon" size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        }
      </div>
    </section>);

};

export default CultureCareersSection;