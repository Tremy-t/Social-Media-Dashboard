
import React from 'react';
import { cn } from '@/lib/utils';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface EngagementData {
  date: string;
  likes: number;
  comments: number;
  shares: number;
}

interface EngagementChartProps {
  data: EngagementData[];
  className?: string;
}

const EngagementChart: React.FC<EngagementChartProps> = ({ 
  data,
  className
}) => {
  return (
    <div className={cn('bg-white p-6 rounded-xl border border-slate-200 shadow-sm', className)}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Engagement Overview</h2>
        <div className="flex gap-2 text-sm">
          <button className="px-3 py-1 rounded-md bg-primary text-white">Week</button>
          <button className="px-3 py-1 rounded-md text-muted-foreground hover:bg-slate-100">Month</button>
          <button className="px-3 py-1 rounded-md text-muted-foreground hover:bg-slate-100">Year</button>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorLikes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorComments" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorShares" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip />
            <Area type="monotone" dataKey="likes" stroke="#3b82f6" fillOpacity={1} fill="url(#colorLikes)" />
            <Area type="monotone" dataKey="comments" stroke="#10b981" fillOpacity={1} fill="url(#colorComments)" />
            <Area type="monotone" dataKey="shares" stroke="#f59e0b" fillOpacity={1} fill="url(#colorShares)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-center mt-4 gap-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-sm text-muted-foreground">Likes</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <span className="text-sm text-muted-foreground">Comments</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
          <span className="text-sm text-muted-foreground">Shares</span>
        </div>
      </div>
    </div>
  );
};

export default EngagementChart;
