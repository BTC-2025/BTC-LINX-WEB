'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface DemoScenario {
  id: number;
  title: string;
  description: string;
  duration: string;
  category: string;
}

interface DemoSectionProps {
  onBookDemo: () => void;
}

const DemoSection = ({ onBookDemo }: DemoSectionProps) => {
  const [activeDemo, setActiveDemo] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const demoScenarios: DemoScenario[] = [
  {
    id: 1,
    title: "Customer Support Call",
    description: "AI agent handling product inquiry with natural conversation flow and issue resolution.",
    duration: "2:30",
    category: "Support"
  },
  {
    id: 2,
    title: "Sales Qualification",
    description: "Lead qualification process with intelligent questioning and CRM integration.",
    duration: "3:15",
    category: "Sales"
  },
  {
    id: 3,
    title: "Appointment Scheduling",
    description: "Automated booking system with calendar integration and confirmation workflow.",
    duration: "1:45",
    category: "Scheduling"
  },
  {
    id: 4,
    title: "Survey Collection",
    description: "Interactive survey completion with adaptive questioning based on responses.",
    duration: "2:00",
    category: "Research"
  }];


  const handlePlayDemo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Experience AI Calling in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            See how our AI agents handle real-world scenarios with human-like intelligence 
            and professional efficiency across different use cases.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Player */}
          <div className="space-y-6">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Video/Demo Area */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <AppImage
                  src="https://images.unsplash.com/photo-1669643470668-19d6fb1d3f21"
                  alt="AI calling interface dashboard showing real-time conversation analytics and call management controls"
                  className="w-full h-full object-cover" />

                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button
                    onClick={handlePlayDemo}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">

                    <Icon
                      name={isPlaying ? "PauseIcon" : "PlayIcon"}
                      size={32}
                      className="text-primary ml-1" />

                  </button>
                </div>

                {/* Live Indicator */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/90 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">LIVE DEMO</span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {demoScenarios.find((demo) => demo.id === activeDemo)?.duration}
                </div>
              </div>

              {/* Demo Controls */}
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {demoScenarios.find((demo) => demo.id === activeDemo)?.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {demoScenarios.find((demo) => demo.id === activeDemo)?.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {demoScenarios.find((demo) => demo.id === activeDemo)?.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 mb-4">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: isPlaying ? '60%' : '0%' }}>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={onBookDemo}
                    className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">

                    Book Live Demo
                  </button>
                  <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors duration-200">
                    <Icon name="ShareIcon" size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Demo Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-primary">98.5%</div>
                <div className="text-xs text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-primary">0.3s</div>
                <div className="text-xs text-muted-foreground">Response Time</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Availability</div>
              </div>
            </div>
          </div>

          {/* Demo Scenarios List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Choose a Demo Scenario
            </h3>
            
            {demoScenarios.map((scenario) =>
            <div
              key={scenario.id}
              onClick={() => setActiveDemo(scenario.id)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              activeDemo === scenario.id ?
              'border-primary bg-primary/5 shadow-md' :
              'border-border bg-white hover:border-primary/50 hover:shadow-sm'}`
              }>

                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-foreground">{scenario.title}</h4>
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                        {scenario.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {scenario.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Icon name="ClockIcon" size={12} />
                        <span>{scenario.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="PlayIcon" size={12} />
                        <span>Interactive Demo</span>
                      </span>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                activeDemo === scenario.id ?
                'border-primary bg-primary' : 'border-muted-foreground'}`
                }>
                    {activeDemo === scenario.id &&
                  <Icon name="CheckIcon" size={14} className="text-white" />
                  }
                  </div>
                </div>
              </div>
            )}

            {/* Custom Demo Request */}
            <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Need a Custom Demo?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                We can create a personalized demonstration based on your specific use case and industry requirements.
              </p>
              <button
                onClick={onBookDemo}
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200">

                <Icon name="CalendarIcon" size={16} className="mr-2" />
                Request Custom Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default DemoSection;