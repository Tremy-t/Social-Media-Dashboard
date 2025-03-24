
import React from 'react';
import { cn } from '@/lib/utils';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useDelayedAnimation } from '@/hooks/useAnimation';
import { EngagementData } from '@/utils/mockData';

interface EngagementChartProps {
  data: EngagementData[];
  className?: string;
}

const EngagementChart: React.FC<EngagementChartProps> = ({ data, className }) => {
  const { ref, isVisible } = useDelayedAnimation(700, 100);
  
  return (
    <div 
      ref={ref}
      className={cn('glass-panel rounded-xl p-5 opacity-0 animate-fade-in', className)}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Engagement Metrics</h2>
        <select className="text-sm border border-slate-200 rounded-md px-2 py-1 bg-white">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }} 
              tickLine={false}
              axisLine={{ stroke: '#f0f0f0' }}
            />
            <YAxis 
              tick={{ fontSize: 12 }} 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              }}
              wrapperStyle={{ outline: 'none' }}
            />
            <Legend 
              iconType="circle" 
              iconSize={8}
              wrapperStyle={{ paddingTop: 20 }}
            />
            <Line
              type="monotone"
              dataKey="facebook"
              name="Facebook"
              stroke="#1877F2"
              strokeWidth={2.5}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, stroke: 'white', strokeWidth: 2 }}
              animationDuration={2000}
              animationEasing="ease-out"
            />
            <Line
              type="monotone"
              dataKey="twitter"
              name="Twitter"
              stroke="#1DA1F2"
              strokeWidth={2.5}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, stroke: 'white', strokeWidth: 2 }}
              animationDuration={2000}
              animationEasing="ease-out"
              animationBegin={300}
            />
            <Line
              type="monotone"
              dataKey="instagram"
              name="Instagram"
              stroke="#E4405F"
              strokeWidth={2.5}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, stroke: 'white', strokeWidth: 2 }}
              animationDuration={2000}
              animationEasing="ease-out"
              animationBegin={600}
            />
            <Line
              type="monotone"
              dataKey="linkedin"
              name="LinkedIn"
              stroke="#0A66C2"
              strokeWidth={2.5}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, stroke: 'white', strokeWidth: 2 }}
              animationDuration={2000}
              animationEasing="ease-out"
              animationBegin={900}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EngagementChart;
