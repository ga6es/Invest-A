import React from 'react';
import { MetricCard } from './ui/MetricCard';
import { PerformanceChart } from './PerformanceChart';
import { MetricData } from '../types';

export const Hero: React.FC = () => {
  const metrics: MetricData[] = [
    {
      label: 'Annual Dividends',
      value: '$12,450',
      change: 850.32,
      changePercent: 7.3
    },
    {
      label: 'Monthly Yield',
      value: '$1,037',
      change: 125.40,
      changePercent: 13.7
    },
    {
      label: 'Daily Yield',
      value: '$34.56',
      change: -2.18,
      changePercent: -5.9
    }
  ];

  return (
    <div className="space-y-6">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} data={metric} />
        ))}
      </div>

      {/* Performance Chart */}
      <PerformanceChart />
    </div>
  );
};