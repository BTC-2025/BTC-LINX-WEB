'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ROICalculatorProps {
  onCalculate: (results: any) => void;
}

interface CalculatorInputs {
  employees: number;
  avgSalary: number;
  currentEfficiency: number;
  targetEfficiency: number;
  implementationCost: number;
}

interface ROIResults {
  monthlySavings: number;
  annualSavings: number;
  roi: number;
  paybackPeriod: number;
  productivityGain: number;
}

const ROICalculator = ({ onCalculate }: ROICalculatorProps) => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    employees: 100,
    avgSalary: 60000,
    currentEfficiency: 70,
    targetEfficiency: 90,
    implementationCost: 50000
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateROI = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const monthlyLabourCost = (inputs.employees * inputs.avgSalary) / 12;
      const efficiencyImprovement = (inputs.targetEfficiency - inputs.currentEfficiency) / 100;
      const monthlySavings = monthlyLabourCost * efficiencyImprovement;
      const annualSavings = monthlySavings * 12;
      const roi = ((annualSavings - inputs.implementationCost) / inputs.implementationCost) * 100;
      const paybackPeriod = inputs.implementationCost / monthlySavings;
      const productivityGain = efficiencyImprovement * 100;

      const calculatedResults = {
        monthlySavings,
        annualSavings,
        roi,
        paybackPeriod,
        productivityGain
      };

      setResults(calculatedResults);
      onCalculate(calculatedResults);
      setIsCalculating(false);
    }, 1500);
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

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const formatMonths = (months: number) => {
    return `${months.toFixed(1)} months`;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ROI Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Calculate the potential return on investment for implementing our AI-powered solutions in your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-soft p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <Icon name="CalculatorIcon" size={24} className="text-primary mr-3" />
              Input Parameters
            </h3>

            <div className="space-y-6">
              {/* Number of Employees */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Number of Employees
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={inputs.employees}
                    onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="100"
                  />
                  <Icon name="UsersIcon" size={20} className="absolute right-3 top-3 text-muted-foreground" />
                </div>
              </div>

              {/* Average Salary */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Average Annual Salary (USD)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={inputs.avgSalary}
                    onChange={(e) => handleInputChange('avgSalary', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="60000"
                  />
                  <Icon name="CurrencyDollarIcon" size={20} className="absolute right-3 top-3 text-muted-foreground" />
                </div>
              </div>

              {/* Current Efficiency */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Current Efficiency (%)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="30"
                    max="95"
                    value={inputs.currentEfficiency}
                    onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>30%</span>
                    <span className="font-medium text-primary">{inputs.currentEfficiency}%</span>
                    <span>95%</span>
                  </div>
                </div>
              </div>

              {/* Target Efficiency */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Target Efficiency (%)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min={inputs.currentEfficiency + 5}
                    max="98"
                    value={inputs.targetEfficiency}
                    onChange={(e) => handleInputChange('targetEfficiency', parseInt(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>{inputs.currentEfficiency + 5}%</span>
                    <span className="font-medium text-success">{inputs.targetEfficiency}%</span>
                    <span>98%</span>
                  </div>
                </div>
              </div>

              {/* Implementation Cost */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Implementation Cost (USD)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={inputs.implementationCost}
                    onChange={(e) => handleInputChange('implementationCost', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="50000"
                  />
                  <Icon name="BanknotesIcon" size={20} className="absolute right-3 top-3 text-muted-foreground" />
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateROI}
                disabled={isCalculating}
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isCalculating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                    Calculating...
                  </>
                ) : (
                  <>
                    <Icon name="CalculatorIcon" size={20} className="mr-2" />
                    Calculate ROI
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-white rounded-xl shadow-soft p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <Icon name="ChartBarIcon" size={24} className="text-success mr-3" />
              ROI Analysis Results
            </h3>

            {results ? (
              <div className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-success/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-success mb-1">
                      {formatPercentage(results.roi)}
                    </div>
                    <div className="text-sm text-muted-foreground">Annual ROI</div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {formatMonths(results.paybackPeriod)}
                    </div>
                    <div className="text-sm text-muted-foreground">Payback Period</div>
                  </div>
                </div>

                {/* Savings Breakdown */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-medium text-foreground">Monthly Savings</span>
                    <span className="text-lg font-semibold text-success">
                      {formatCurrency(results.monthlySavings)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-medium text-foreground">Annual Savings</span>
                    <span className="text-lg font-semibold text-success">
                      {formatCurrency(results.annualSavings)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-medium text-foreground">Productivity Gain</span>
                    <span className="text-lg font-semibold text-primary">
                      {formatPercentage(results.productivityGain)}
                    </span>
                  </div>
                </div>

                {/* Visual Progress Bar */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ROI Progress</span>
                    <span className="font-medium text-foreground">{formatPercentage(Math.min(results.roi, 500))}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-success to-primary h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min((results.roi / 500) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
                    Download Report
                  </button>
                  <button className="flex-1 bg-muted text-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="CalculatorIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Enter your parameters and click "Calculate ROI" to see your potential return on investment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;