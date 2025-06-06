import React, { useState } from 'react';
import { TrendingUp, Briefcase, DollarSign } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export const TabNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('for-you');

  const tabs: Tab[] = [
    { id: 'for-you', label: 'For You', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'holdings', label: 'Holdings', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'dividends', label: 'Dividends', icon: <DollarSign className="w-4 h-4" /> }
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-1 border border-slate-700">
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};