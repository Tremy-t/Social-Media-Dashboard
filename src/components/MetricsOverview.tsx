
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface Metric {
  id: string;
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

interface MetricsOverviewProps {
  metrics: Metric[];
  className?: string;
}

const MetricsOverview: React.FC<MetricsOverviewProps> = ({ 
  metrics,
  className
}) => {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6', className)}>
      {metrics.map((metric) => (
        <div 
          key={metric.id}
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm card-hover"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="p-2 rounded-lg bg-slate-100">
              {metric.icon}
            </span>
            <span 
              className={cn(
                'flex items-center text-sm rounded-full px-2 py-0.5',
                metric.trend === 'up' ? 'text-green-600 bg-green-50' : 
                metric.trend === 'down' ? 'text-red-600 bg-red-50' : 
                'text-slate-600 bg-slate-50'
              )}
            >
              {metric.change !== 0 && (
                metric.trend === 'up' ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />
              )}
              {Math.abs(metric.change)}%
            </span>
          </div>
          <h3 className="text-sm text-muted-foreground font-medium">{metric.title}</h3>
          <p className="text-2xl font-semibold mt-1">{metric.value}</p>
        </div>
      ))}
    </div>
  );
};

export default MetricsOverview;
