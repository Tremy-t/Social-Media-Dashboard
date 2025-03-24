
import React from 'react';
import { cn } from '@/lib/utils';
import { Activity, Calendar, TrendingUp, TrendingDown, Users } from 'lucide-react';
import { MetricData } from '@/utils/mockData';
import { useDelayedAnimation } from '@/hooks/useAnimation';

interface MetricCardProps {
  data: MetricData;
  className?: string;
  delay: number;
}

const icons = {
  activity: Activity,
  calendar: Calendar,
  'trending-up': TrendingUp,
  users: Users,
};

const MetricCard: React.FC<MetricCardProps> = ({ data, className, delay }) => {
  const IconComponent = icons[data.icon as keyof typeof icons] || Activity;
  
  const formatValue = (value: number): string => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return value.toString();
  };
  
  return (
    <div
      className={cn(
        'glass-panel rounded-xl p-5 opacity-0 animate-fade-in card-hover',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{data.name}</p>
          <h3 className="text-2xl font-semibold mt-1">
            {data.name === 'Engagement Rate' ? `${data.value}%` : formatValue(data.value)}
          </h3>
        </div>
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>
      
      <div className="mt-3 flex items-center">
        {data.change > 0 ? (
          <>
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-xs font-medium text-green-600">+{data.change}%</span>
          </>
        ) : (
          <>
            <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
            <span className="text-xs font-medium text-red-600">{data.change}%</span>
          </>
        )}
        <span className="text-xs text-muted-foreground ml-1">vs last month</span>
      </div>
    </div>
  );
};

interface MetricsOverviewProps {
  metrics: MetricData[];
  className?: string;
}

const MetricsOverview: React.FC<MetricsOverviewProps> = ({ metrics, className }) => {
  const { ref, isVisible, getAnimationDelay } = useDelayedAnimation(100, 100);
  
  return (
    <div 
      ref={ref}
      className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5', className)}
    >
      {metrics.map((metric, index) => (
        <MetricCard 
          key={metric.id} 
          data={metric} 
          delay={isVisible ? getAnimationDelay(index) : 0}
        />
      ))}
    </div>
  );
};

export default MetricsOverview;
