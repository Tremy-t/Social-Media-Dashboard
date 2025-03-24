
import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  initials, 
  size = 'md', 
  className 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  return (
    <div 
      className={cn(
        'rounded-full overflow-hidden flex items-center justify-center bg-primary/10 text-primary-foreground font-medium',
        sizeClasses[size],
        className
      )}
    >
      {src ? (
        <img 
          src={src} 
          alt="User avatar" 
          className="w-full h-full object-cover"
        />
      ) : (
        <span>{initials || 'U'}</span>
      )}
    </div>
  );
};

export default Avatar;
