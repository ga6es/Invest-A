import React from 'react';

export const PerformanceChart: React.FC = () => {
  // Mock data for the chart
  const chartData = [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 52 },
    { month: 'Mar', value: 48 },
    { month: 'Apr', value: 61 },
    { month: 'May', value: 55 },
    { month: 'Jun', value: 67 },
    { month: 'Jul', value: 73 },
    { month: 'Aug', value: 69 },
    { month: 'Sep', value: 78 },
    { month: 'Oct', value: 82 },
    { month: 'Nov', value: 74 },
    { month: 'Dec', value: 89 }
  ];

  const maxValue = 100;

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Portfolio Performance</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-slate-400">12M</span>
          <div className="flex space-x-1">
            {['1D', '1W', '1M', '1Y'].map((period) => (
              <button
                key={period}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  period === '1Y' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="h-64 flex items-end justify-between space-x-2">
        {chartData.map((item, index) => (
          <div key={item.month} className="flex flex-col items-center flex-1">
            <div className="w-full bg-slate-700 rounded-t relative overflow-hidden">
              <div
                className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all duration-700 ease-out"
                style={{
                  height: `${(item.value / maxValue) * 200}px`,
                  animationDelay: `${index * 100}ms`
                }}
              />
            </div>
            <span className="text-xs text-slate-400 mt-2">{item.month}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-700">
        <div className="text-sm text-slate-400">
          <span className="text-green-400 font-medium">+18.4%</span> from last year
        </div>
        <div className="text-sm text-slate-400">
          Total Return: <span className="text-white font-medium">$124,567</span>
        </div>
      </div>
    </div>
  );
};