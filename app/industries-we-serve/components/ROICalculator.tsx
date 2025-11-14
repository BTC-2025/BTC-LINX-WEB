'use client';

import React, { useState, useEffect } from 'react';
// import Icon from '@/components/ui/AppIcon';
import Icon from '../../../components/ui/AppIcon';

interface CalculatorInputs {
  industry: string;
  employees: number;
  avgSalary: number;
  currentEfficiency: number;
  implementationSize: string;
}

interface ROIResults {
  monthlySavings: number;
  annualSavings: number;
  roi: number;
  paybackPeriod: number;
  efficiencyGain: number;
}

interface ROICalculatorProps {
  className?: string;
}

const ROICalculator = ({ className = '' }: ROICalculatorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [inputs, setInputs] = useState<CalculatorInputs>({
    industry: 'bpo',
    employees: 100,
    avgSalary: 35000,
    currentEfficiency: 70,
    implementationSize: 'medium'
  });
  const [results, setResults] = useState<ROIResults | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const industries = [
    { id: 'bpo', name: 'BPO & Call Centers', multiplier: 1.2 },
    { id: 'finance', name: 'Financial Services', multiplier: 1.4 },
    { id: 'telecom', name: 'Telecommunications', multiplier: 1.3 },
    { id: 'healthcare', name: 'Healthcare', multiplier: 1.1 },
    { id: 'education', name: 'Education', multiplier: 1.0 },
    { id: 'ecommerce', name: 'E-commerce', multiplier: 1.3 }
  ];

  const implementationSizes = [
    { id: 'small', name: 'Small (1-50 employees)', cost: 25000, efficiency: 15 },
    { id: 'medium', name: 'Medium (51-200 employees)', cost: 75000, efficiency: 25 },
    { id: 'large', name: 'Large (201-500 employees)', cost: 150000, efficiency: 35 },
    { id: 'enterprise', name: 'Enterprise (500+ employees)', cost: 300000, efficiency: 45 }
  ];

  const calculateROI = () => {
    const industry = industries.find(i => i.id === inputs.industry);
    const implementation = implementationSizes.find(i => i.id === inputs.implementationSize);
    
    if (!industry || !implementation) return;

    // Calculate efficiency improvements
    const efficiencyGain = implementation.efficiency * industry.multiplier;
    const newEfficiency = Math.min(inputs.currentEfficiency + efficiencyGain, 95);
    
    // Calculate cost savings
    const totalAnnualCost = inputs.employees * inputs.avgSalary;
    const efficiencyImprovement = (newEfficiency - inputs.currentEfficiency) / 100;
    const annualSavings = totalAnnualCost * efficiencyImprovement * 0.6; // 60% of efficiency gain translates to cost savings
    
    // Calculate ROI
    const implementationCost = implementation.cost;
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / (annualSavings / 12);

    setResults({
      monthlySavings: annualSavings / 12,
      annualSavings,
      roi,
      paybackPeriod,
      efficiencyGain: newEfficiency - inputs.currentEfficiency
    });
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    if (isHydrated) {
      calculateROI();
    }
  }, [inputs, isHydrated]);

  if (!isHydrated) {
    return (
      <section className={`py-20 bg-background ${className}`}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 animate-pulse">
            <div className="h-8 bg-muted rounded mb-4"></div>
            <div className="h-4 bg-muted rounded mb-8"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-16 bg-muted rounded"></div>
                ))}
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-20 bg-muted rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the potential impact of AI automation on your organization with our industry-specific ROI calculator
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-soft">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Input Form */}
            <div className="p-8 lg:p-10 bg-muted/20">
              <h3 className="text-xl font-semibold text-foreground mb-6">Your Organization</h3>
              
              <div className="space-y-6">
                {/* Industry Selection */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Industry
                  </label>
                  <select
                    value={inputs.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    {industries.map(industry => (
                      <option key={industry.id} value={industry.id}>
                        {industry.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Number of Employees */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    value={inputs.employees}
                    onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    min="1"
                    max="10000"
                  />
                </div>

                {/* Average Salary */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Average Annual Salary ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.avgSalary}
                    onChange={(e) => handleInputChange('avgSalary', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    min="20000"
                    max="200000"
                    step="1000"
                  />
                </div>

                {/* Current Efficiency */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Current Operational Efficiency (%)
                  </label>
                  <input
                    type="range"
                    value={inputs.currentEfficiency}
                    onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                    min="30"
                    max="90"
                    step="5"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>30%</span>
                    <span className="font-medium text-primary">{inputs.currentEfficiency}%</span>
                    <span>90%</span>
                  </div>
                </div>

                {/* Implementation Size */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Implementation Size
                  </label>
                  <select
                    value={inputs.implementationSize}
                    onChange={(e) => handleInputChange('implementationSize', e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    {implementationSizes.map(size => (
                      <option key={size.id} value={size.id}>
                        {size.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="p-8 lg:p-10">
              <h3 className="text-xl font-semibold text-foreground mb-6">Projected Results</h3>
              
              {results && (
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                      <div className="text-2xl font-bold text-success">
                        ${results.monthlySavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-sm text-muted-foreground">Monthly Savings</div>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary">
                        {results.roi.toFixed(0)}%
                      </div>
                      <div className="text-sm text-muted-foreground">Annual ROI</div>
                    </div>
                  </div>

                  {/* Detailed Breakdown */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="CurrencyDollarIcon" size={20} className="text-success" />
                        <span className="font-medium text-foreground">Annual Savings</span>
                      </div>
                      <span className="text-lg font-bold text-success">
                        ${results.annualSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="ClockIcon" size={20} className="text-accent" />
                        <span className="font-medium text-foreground">Payback Period</span>
                      </div>
                      <span className="text-lg font-bold text-accent">
                        {results.paybackPeriod.toFixed(1)} months
                      </span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="ArrowTrendingUpIcon" size={20} className="text-primary" />
                        <span className="font-medium text-foreground">Efficiency Gain</span>
                      </div>
                      <span className="text-lg font-bold text-primary">
                        +{results.efficiencyGain.toFixed(1)}%
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      Ready to achieve these results? Get a personalized assessment from our experts.
                    </p>
                    <button className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                      <Icon name="CalendarIcon" size={20} />
                      <span>Schedule Consultation</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * Results are estimates based on industry averages and may vary depending on specific implementation and organizational factors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;