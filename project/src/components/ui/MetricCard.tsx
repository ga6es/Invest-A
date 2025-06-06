import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MetricData } from '../../types';

interface MetricCardProps {
  data: MetricData;
}

export const MetricCard: React.FC<MetricCardProps> = ({ data }) => {
  const isPositive = data.change >= 0;
  
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-slate-400 text-sm font-medium">{data.label}</h3>
        {isPositive ? (
          <TrendingUp className="w-4 h-4 text-green-500" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-500" />
        )}
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold text-white">{data.value}</span>
        <div className={`flex items-center text-sm font-medium ${
          isPositive ? 'text-green-400' : 'text-red-400'
        }`}>
          <span>{isPositive ? '+' : ''}{data.changePercent.toFixed(2)}%</span>
        </div>
      </div>
      <div className={`text-xs mt-1 ${
        isPositive ? 'text-green-400' : 'text-red-400'
      }`}>
        {isPositive ? '+' : ''}${data.change.toFixed(2)} from last period
      </div>
    </div>
  );
};