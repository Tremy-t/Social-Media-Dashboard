
import React, { useState } from 'react';
import Header from '@/components/Header';
import SideNav from '@/components/SideNav';
import MetricsOverview from '@/components/MetricsOverview';
import PlatformCards from '@/components/PlatformCards';
import ScheduledPosts from '@/components/ScheduledPosts';
import EngagementChart from '@/components/EngagementChart';
import { metrics, platforms, scheduledPosts, engagementData } from '@/utils/mockData';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen flex w-full overflow-hidden bg-slate-50">
      <SideNav isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            <div>
              <h1 className="text-2xl font-semibold mb-1">Social Media Dashboard</h1>
              <p className="text-muted-foreground">Track your performance and manage scheduled content</p>
            </div>
            
            <MetricsOverview metrics={metrics} />
            
            <PlatformCards platforms={platforms} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <EngagementChart data={engagementData} />
              <ScheduledPosts posts={scheduledPosts} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
