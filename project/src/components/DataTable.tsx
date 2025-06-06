import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Stock } from '../types';

export const DataTable: React.FC = () => {
  const stocks: Stock[] = [
    {
      id: '1',
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 175.43,
      change: 2.18,
      changePercent: 1.26,
      yield: 0.52,
      shares: 150,
      dividends: 117.0,
      quarterlyDividends: ['Q1', 'Q2', 'Q3', 'Q4'],
      trend: [170, 172, 171, 174, 175, 173, 175]
    },
    {
      id: '2',
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 338.11,
      change: -4.22,
      changePercent: -1.23,
      yield: 0.68,
      shares: 85,
      dividends: 194.76,
      quarterlyDividends: ['Q1', 'Q2', 'Q3', 'Q4'],
      trend: [342, 340, 339, 341, 338, 336, 338]
    },
    {
      id: '3',
      symbol: 'JNJ',
      name: 'Johnson & Johnson',
      price: 165.89,
      change: 1.45,
      changePercent: 0.88,
      yield: 2.91,
      shares: 200,
      dividends: 965.58,
      quarterlyDividends: ['Q1', 'Q2', 'Q3', 'Q4'],
      trend: [164, 165, 163, 166, 167, 165, 166]
    },
    {
      id: '4',
      symbol: 'KO',
      name: 'The Coca-Cola Company',
      price: 58.92,
      change: 0.67,
      changePercent: 1.15,
      yield: 3.12,
      shares: 300,
      dividends: 551.22,
      quarterlyDividends: ['Q1', 'Q2', 'Q3', 'Q4'],
      trend: [58, 57, 59, 58, 59, 58, 59]
    },
    {
      id: '5',
      symbol: 'PG',
      name: 'Procter & Gamble Co.',
      price: 147.25,
      change: -0.89,
      changePercent: -0.60,
      yield: 2.47,
      shares: 120,
      dividends: 436.17,
      quarterlyDividends: ['Q1', 'Q2', 'Q3', 'Q4'],
      trend: [148, 147, 149, 147, 146, 148, 147]
    }
  ];

  const QuarterlyBadges: React.FC<{ quarters: string[] }> = ({ quarters }) => (
    <div className="flex space-x-1">
      {quarters.map((quarter) => (
        <span
          key={quarter}
          className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded-full border border-green-600/30"
        >
          {quarter}
        </span>
      ))}
    </div>
  );

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
      <div className="p-4 border-b border-slate-700">
        <h3 className="text-lg font-semibold text-white">Holdings</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-700/50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-slate-300">Name</th>
              <th className="text-left p-4 text-sm font-medium text-slate-300">Yield</th>
              <th className="text-left p-4 text-sm font-medium text-slate-300">Price</th>
              <th className="text-left p-4 text-sm font-medium text-slate-300">Change</th>
              <th className="text-left p-4 text-sm font-medium text-slate-300">Shares</th>
              <th className="text-left p-4 text-sm font-medium text-slate-300">Dividends</th>
              <th className="text-left p-4 text-sm font-medium text-slate-300">Quarters</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {stocks.map((stock) => {
              const isPositive = stock.change >= 0;
              
              return (
                <tr key={stock.id} className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-4">
                    <div>
                      <div className="font-medium text-white">{stock.symbol}</div>
                      <div className="text-sm text-slate-400">{stock.name}</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-white font-medium">{stock.yield.toFixed(2)}%</span>
                  </td>
                  <td className="p-4">
                    <span className="text-white font-medium">${stock.price.toFixed(2)}</span>
                  </td>
                  <td className="p-4">
                    <div className={`flex items-center ${
                      isPositive ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {isPositive ? (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 mr-1" />
                      )}
                      <div>
                        <div className="font-medium">
                          {isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%
                        </div>
                        <div className="text-xs">
                          {isPositive ? '+' : ''}${stock.change.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-white">{stock.shares}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-green-400 font-medium">${stock.dividends.toFixed(2)}</span>
                  </td>
                  <td className="p-4">
                    <QuarterlyBadges quarters={stock.quarterlyDividends} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};