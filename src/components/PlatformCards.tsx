
import React from 'react';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Instagram, Linkedin, TrendingUp, ExternalLink } from 'lucide-react';
import { PlatformData } from '@/utils/mockData';
import { useDelayedAnimation } from '@/hooks/useAnimation';

interface PlatformCardProps {
  data: PlatformData;
  className?: string;
  delay: number;
}

const icons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
};

const PlatformCard: React.FC<PlatformCardProps> = ({ data, className, delay }) => {
  const IconComponent = icons[data.icon as keyof typeof icons];
  
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };
  
  return (
    <div 
      className={cn(
        'glass-panel rounded-xl p-5 relative overflow-hidden opacity-0 animate-fade-in card-hover',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Platform icon and name */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`text-${data.color}`}>
          <IconComponent className="w-5 h-5" />
        </div>
        <h3 className="font-medium">{data.name}</h3>
      </div>
      
      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Followers</p>
          <p className="text-lg font-semibold">{formatNumber(data.followers)}</p>
        </div>
        
        <div>
          <p className="text-xs text-muted-foreground mb-1">Engagement</p>
          <p className="text-lg font-semibold">{data.engagement}%</p>
        </div>
        
        <div>
          <p className="text-xs text-muted-foreground mb-1">Growth</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold">{data.growth}%</p>
            <TrendingUp className="w-3 h-3 text-green-500 ml-1" />
          </div>
        </div>
      </div>
      
      {/* View button */}
      <button className="mt-4 text-xs flex items-center text-primary hover:underline">
        <span>View analytics</span>
        <ExternalLink className="w-3 h-3 ml-1" />
      </button>
      
      {/* Decorative stripe */}
      <div 
        className={`absolute top-0 left-0 right-0 h-1 bg-${data.color}`}
        style={{ backgroundColor: `var(--${data.color})` }}
      />
    </div>
  );
};

interface PlatformCardsProps {
  platforms: PlatformData[];
  className?: string;
}

const PlatformCards: React.FC<PlatformCardsProps> = ({ 
  platforms, 
  className 
}) => {
  const { ref, isVisible, getAnimationDelay } = useDelayedAnimation(300, 100);
  
  return (
    <div 
      ref={ref}
      className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5', className)}
    >
      {platforms.map((platform, index) => (
        <PlatformCard 
          key={platform.id} 
          data={platform} 
          delay={isVisible ? getAnimationDelay(index) : 0}
        />
      ))}
    </div>
  );
};

export default PlatformCards;
