
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface Platform {
  id: string;
  name: string;
  icon: React.ReactNode;
  followers: string;
  engagement: string;
  color: string;
}

interface PlatformCardsProps {
  platforms: Platform[];
  className?: string;
}

const PlatformCards: React.FC<PlatformCardsProps> = ({ 
  platforms,
  className
}) => {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6', className)}>
      {platforms.map((platform) => (
        <div 
          key={platform.id}
          className="relative overflow-hidden bg-white rounded-xl border border-slate-200 shadow-sm card-hover"
        >
          <div 
            className="h-2"
            style={{ backgroundColor: platform.color }}
          />
          
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-600">
                {platform.icon}
              </span>
              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
            
            <h3 className="text-base font-medium mb-3">{platform.name}</h3>
            
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Followers</p>
                <p className="text-lg font-semibold">{platform.followers}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-1">Engagement</p>
                <p className="text-lg font-semibold">{platform.engagement}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlatformCards;
