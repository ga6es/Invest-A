import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TabNavigation } from './components/TabNavigation';
import { Watchlist } from './components/Watchlist';
import { DataTable } from './components/DataTable';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hero Section */}
            <Hero />
            
            {/* Tab Navigation */}
            <TabNavigation />
            
            {/* Data Table */}
            <DataTable />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Watchlist />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;