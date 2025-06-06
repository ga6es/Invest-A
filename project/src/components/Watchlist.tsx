import React from 'react';
import { TrendingUp, TrendingDown, Star } from 'lucide-react';

interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  trend: number[];
}

export const Watchlist: React.FC = () => {
  const watchlistItems: WatchlistItem[] = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 175.43,
      change: 2.18,
      changePercent: 1.26,
      trend: [170, 172, 171, 174, 175, 173, 175]
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corp.',
      price: 338.11,
      change: -4.22,
      changePercent: -1.23,
      trend: [342, 340, 339, 341, 338, 336, 338]
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 125.37,
      change: 1.89,
      changePercent: 1.53,
      trend: [123, 124, 122, 125, 126, 124, 125]
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 234.56,
      change: 8.92,
      changePercent: 3.95,
      trend: [225, 228, 230, 232, 235, 233, 235]
    },
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corp.',
      price: 421.38,
      change: -12.45,
      changePercent: -2.87,
      trend: [435, 430, 425, 428, 421, 419, 421]
    }
  ];

  const MiniChart: React.FC<{ trend: number[] }> = ({ trend }) => {
    const max = Math.max(...trend);
    const min = Math.min(...trend);
    const range = max - min || 1;

    return (
      <div className="flex items-end space-x-0.5 h-8 w-16">
        {trend.map((value, index) => {
          const height = ((value - min) / range) * 24 + 4;
          return (
            <div
              key={index}
              className="bg-blue-500 rounded-sm flex-1"
              style={{ height: `${height}px` }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Watchlist</h3>
          <button className="text-slate-400 hover:text-white transition-colors">
            <Star className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="divide-y divide-slate-700">
        {watchlistItems.map((item) => {
          const isPositive = item.change >= 0;
          
          return (
            <div key={item.symbol} className="p-4 hover:bg-slate-700/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-white text-sm">{item.symbol}</span>
                    <span className="text-white font-medium">${item.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 truncate pr-2">{item.name}</span>
                    <div className={`flex items-center text-xs font-medium ${
                      isPositive ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {isPositive ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      <span>{isPositive ? '+' : ''}{item.changePercent.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-3">
                <MiniChart trend={item.trend} />
                <div className={`text-xs ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {isPositive ? '+' : ''}${item.change.toFixed(2)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 border-t border-slate-700">
        <button className="w-full text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
          View All Watchlist
        </button>
      </div>
    </div>
  );
};