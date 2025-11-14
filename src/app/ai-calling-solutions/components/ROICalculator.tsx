'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorInputs {
  monthlyCallVolume: number;
  averageCallDuration: number;
  currentCostPerCall: number;
  agentHourlyRate: number;
  currentAgentCount: number;
}

interface ROIResults {
  currentMonthlyCost: number;
  aiMonthlyCost: number;
  monthlySavings: number;
  annualSavings: number;
  paybackPeriod: number;
  efficiencyGain: number;
}

const ROICalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyCallVolume: 10000,
    averageCallDuration: 5,
    currentCostPerCall: 2.5,
    agentHourlyRate: 15,
    currentAgentCount: 20
  });

  const [results, setResults] = useState<ROIResults>({
    currentMonthlyCost: 0,
    aiMonthlyCost: 0,
    monthlySavings: 0,
    annualSavings: 0,
    paybackPeriod: 0,
    efficiencyGain: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const { monthlyCallVolume, averageCallDuration, currentCostPerCall, agentHourlyRate, currentAgentCount } = inputs;
      
      // Current costs calculation
      const currentMonthlyCost = monthlyCallVolume * currentCostPerCall;
      const monthlyAgentCost = currentAgentCount * agentHourlyRate * 160; // 160 hours per month
      const totalCurrentCost = currentMonthlyCost + monthlyAgentCost;
      
      // AI solution costs (typically 60-70% reduction)
      const aiCostReduction = 0.65;
      const aiMonthlyCost = totalCurrentCost * (1 - aiCostReduction);
      
      // Savings calculation
      const monthlySavings = totalCurrentCost - aiMonthlyCost;
      const annualSavings = monthlySavings * 12;
      
      // Implementation cost (estimated)
      const implementationCost = 50000;
      const paybackPeriod = implementationCost / monthlySavings;
      
      // Efficiency gain (AI handles more calls with consistent quality)
      const efficiencyGain = 300; // 300% increase in call handling capacity
      
      setResults({
        currentMonthlyCost: totalCurrentCost,
        aiMonthlyCost,
        monthlySavings,
        annualSavings,
        paybackPeriod,
        efficiencyGain
      });
      
      setIsCalculating(false);
    }, 500);
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Calculate Your ROI with AI Calling
          </h2>
          <p className="text-xl text-muted-foreground">
            See how much you can save by implementing our AI calling solution. 
            Get instant calculations based on your current operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <Icon name="CalculatorIcon" size={24} className="mr-3 text-primary" />
              Your Current Operations
            </h3>

            <div className="space-y-6">
              {/* Monthly Call Volume */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Monthly Call Volume
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={inputs.monthlyCallVolume}
                    onChange={(e) => handleInputChange('monthlyCallVolume', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="10,000"
                  />
                  <span className="absolute right-3 top-3 text-muted-foreground text-sm">calls</span>
                </div>
              </div>

              {/* Average Call Duration */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Average Call Duration
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={inputs.averageCallDuration}
                    onChange={(e) => handleInputChange('averageCallDuration', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="5"
                    step="0.5"
                  />
                  <span className="absolute right-3 top-3 text-muted-foreground text-sm">minutes</span>
                </div>
              </div>

              {/* Current Cost Per Call */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Current Cost Per Call
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-muted-foreground text-sm">$</span>
                  <input
                    type="number"
                    value={inputs.currentCostPerCall}
                    onChange={(e) => handleInputChange('currentCostPerCall', parseFloat(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="2.50"
                    step="0.25"
                  />
                </div>
              </div>

              {/* Agent Hourly Rate */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Agent Hourly Rate
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-muted-foreground text-sm">$</span>
                  <input
                    type="number"
                    value={inputs.agentHourlyRate}
                    onChange={(e) => handleInputChange('agentHourlyRate', parseFloat(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="15"
                  />
                  <span className="absolute right-3 top-3 text-muted-foreground text-sm">/hour</span>
                </div>
              </div>

              {/* Current Agent Count */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Current Agent Count
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={inputs.currentAgentCount}
                    onChange={(e) => handleInputChange('currentAgentCount', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="20"
                  />
                  <span className="absolute right-3 top-3 text-muted-foreground text-sm">agents</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* ROI Summary Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <Icon name="ChartBarIcon" size={24} className="mr-3 text-primary" />
                Your ROI Results
                {isCalculating && (
                  <div className="ml-3 w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                )}
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {/* Current Monthly Cost */}
                <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-sm text-red-600 mb-1">Current Monthly Cost</div>
                  <div className="text-2xl font-bold text-red-700">
                    {formatCurrency(results.currentMonthlyCost)}
                  </div>
                </div>

                {/* AI Monthly Cost */}
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-sm text-green-600 mb-1">AI Monthly Cost</div>
                  <div className="text-2xl font-bold text-green-700">
                    {formatCurrency(results.aiMonthlyCost)}
                  </div>
                </div>

                {/* Monthly Savings */}
                <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="text-sm text-primary mb-1">Monthly Savings</div>
                  <div className="text-2xl font-bold text-primary">
                    {formatCurrency(results.monthlySavings)}
                  </div>
                </div>

                {/* Annual Savings */}
                <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="text-sm text-accent mb-1">Annual Savings</div>
                  <div className="text-2xl font-bold text-accent">
                    {formatCurrency(results.annualSavings)}
                  </div>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Payback Period</div>
                    <div className="text-xl font-semibold text-foreground">
                      {results.paybackPeriod.toFixed(1)} months
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Efficiency Gain</div>
                    <div className="text-xl font-semibold text-foreground">
                      {results.efficiencyGain}%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Additional Benefits Beyond Cost Savings
              </h4>
              <div className="space-y-4">
                {[
                  "24/7 availability with no breaks or sick days",
                  "Consistent quality and performance across all calls",
                  "Instant scalability during peak periods",
                  "Reduced training and onboarding costs",
                  "Comprehensive analytics and insights",
                  "Multilingual support without additional hiring"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-white">
              <h4 className="text-xl font-semibold mb-4">
                Ready to Start Saving?
              </h4>
              <p className="mb-6 opacity-90">
                Schedule a personalized demo to see these savings in action with your specific use case.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                <Icon name="CalendarIcon" size={20} className="mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;