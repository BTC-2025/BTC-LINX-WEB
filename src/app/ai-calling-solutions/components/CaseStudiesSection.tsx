import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CaseStudy {
  id: number;
  company: string;
  industry: string;
  logo: string;
  alt: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
}

const CaseStudiesSection = () => {
  const caseStudies: CaseStudy[] = [
  {
    id: 1,
    company: "TechFlow BPO",
    industry: "Business Process Outsourcing",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11d6d2e33-1763046732560.png",
    alt: "TechFlow BPO company logo with modern business process automation and technology integration symbols",
    challenge: "Managing 50,000+ monthly customer service calls with inconsistent quality and high agent turnover rates affecting customer satisfaction scores.",
    solution: "Implemented AI calling solution with intelligent routing, automated responses for common queries, and seamless human handoff for complex issues.",
    results: [
    { metric: "Cost Reduction", value: "68%", improvement: "Monthly operational costs" },
    { metric: "Response Time", value: "0.2s", improvement: "Average initial response" },
    { metric: "Customer Satisfaction", value: "94%", improvement: "Up from 76%" },
    { metric: "Call Resolution", value: "89%", improvement: "First-call resolution rate" }],

    testimonial: {
      quote: "The AI calling solution transformed our operations completely. We're now handling 3x more calls with better quality and significantly lower costs. Our customers are happier, and our team can focus on complex problem-solving.",
      author: "Sarah Chen",
      position: "VP of Operations, TechFlow BPO"
    }
  },
  {
    id: 2,
    company: "FinanceFirst Solutions",
    industry: "Financial Services",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_188f402d2-1763046733829.png",
    alt: "FinanceFirst Solutions logo with financial services symbols including banking icons and secure transaction graphics",
    challenge: "High-volume loan application processing with lengthy verification calls and compliance requirements causing delays and customer frustration.",
    solution: "Deployed AI agents for initial application screening, document verification, and compliance checks with secure data handling and regulatory compliance.",
    results: [
    { metric: "Processing Time", value: "75%", improvement: "Faster application processing" },
    { metric: "Compliance Score", value: "99.8%", improvement: "Regulatory compliance rate" },
    { metric: "Customer Wait Time", value: "85%", improvement: "Reduction in wait times" },
    { metric: "Application Volume", value: "250%", improvement: "Increased processing capacity" }],

    testimonial: {
      quote: "BTC Linx's AI solution helped us maintain strict compliance while dramatically improving our processing speed. We've gone from days to hours for loan approvals, and our customers love the instant responses.",
      author: "Michael Rodriguez",
      position: "Chief Technology Officer, FinanceFirst Solutions"
    }
  },
  {
    id: 3,
    company: "HealthCare Connect",
    industry: "Healthcare",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13739df30-1763046735840.png",
    alt: "HealthCare Connect logo with medical cross symbols and healthcare technology integration graphics",
    challenge: "Appointment scheduling bottlenecks and patient inquiry management across multiple locations with varying availability and complex scheduling requirements.",
    solution: "Integrated AI calling system with EHR systems for real-time appointment scheduling, prescription refill requests, and basic health inquiries with HIPAA compliance.",
    results: [
    { metric: "Appointment Efficiency", value: "92%", improvement: "Scheduling accuracy rate" },
    { metric: "Patient Satisfaction", value: "96%", improvement: "Overall satisfaction score" },
    { metric: "Staff Productivity", value: "60%", improvement: "Administrative time savings" },
    { metric: "No-Show Rate", value: "45%", improvement: "Reduction through automated reminders" }],

    testimonial: {
      quote: "The AI system handles routine appointments and inquiries flawlessly, allowing our staff to focus on patient care. The HIPAA-compliant solution gives us peace of mind while improving patient experience significantly.",
      author: "Dr. Emily Watson",
      position: "Medical Director, HealthCare Connect"
    }
  }];


  const [activeCase, setActiveCase] = React.useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Real Success Stories from Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground">
            See how organizations across different industries have transformed their operations 
            and achieved measurable results with our AI calling solutions.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) =>
          <button
            key={study.id}
            onClick={() => setActiveCase(index)}
            className={`flex items-center space-x-3 px-6 py-3 rounded-lg border-2 transition-all duration-200 ${
            activeCase === index ?
            'border-primary bg-primary/5 text-primary' : 'border-border bg-white text-muted-foreground hover:border-primary/50'}`
            }>

              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                <AppImage
                src={study.logo}
                alt={study.alt}
                className="w-6 h-6 object-contain" />

              </div>
              <div className="text-left">
                <div className="font-medium text-sm">{study.company}</div>
                <div className="text-xs opacity-70">{study.industry}</div>
              </div>
            </button>
          )}
        </div>

        {/* Active Case Study */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Case Study Content */}
            <div className="space-y-8">
              {/* Company Header */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center overflow-hidden">
                  <AppImage
                    src={caseStudies[activeCase].logo}
                    alt={caseStudies[activeCase].alt}
                    className="w-12 h-12 object-contain" />

                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {caseStudies[activeCase].company}
                  </h3>
                  <p className="text-muted-foreground">{caseStudies[activeCase].industry}</p>
                </div>
              </div>

              {/* Challenge */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="ExclamationTriangleIcon" size={20} className="mr-2 text-warning" />
                  Challenge
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudies[activeCase].challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="LightBulbIcon" size={20} className="mr-2 text-primary" />
                  Solution
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudies[activeCase].solution}
                </p>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-xl p-6 border-l-4 border-primary">
                <blockquote className="text-foreground italic mb-4 leading-relaxed">
                  "{caseStudies[activeCase].testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="UserIcon" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {caseStudies[activeCase].testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {caseStudies[activeCase].testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Metrics */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Icon name="ChartBarIcon" size={24} className="mr-3 text-success" />
                Measurable Results
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {caseStudies[activeCase].results.map((result, index) =>
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-shadow duration-200">

                    <div className="text-3xl font-bold text-primary mb-2">
                      {result.value}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">
                      {result.metric}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {result.improvement}
                    </div>
                  </div>
                )}
              </div>

              {/* Implementation Timeline */}
              <div className="bg-white rounded-xl p-6 border border-border">
                <h5 className="font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="ClockIcon" size={16} className="mr-2 text-primary" />
                  Implementation Timeline
                </h5>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Week 1-2: System setup and integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Week 3-4: AI training and testing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Week 5-6: Gradual rollout and optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Week 7+: Full deployment and monitoring</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-6 text-center text-white">
                <h5 className="font-semibold mb-2">Want Similar Results?</h5>
                <p className="text-sm opacity-90 mb-4">
                  Schedule a consultation to discuss your specific use case and potential ROI.
                </p>
                <button className="inline-flex items-center px-4 py-2 bg-white text-primary rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
                  <Icon name="CalendarIcon" size={16} className="mr-2" />
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Successful Implementations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
            <div className="text-sm text-muted-foreground">Total Client Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support & Monitoring</div>
          </div>
        </div>
      </div>
    </section>);

};

export default CaseStudiesSection;