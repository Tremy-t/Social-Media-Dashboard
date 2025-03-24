
import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src?: string;
  initials?: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, initials, className }) => {
  return (
    <div 
      className={cn(
        'relative w-10 h-10 rounded-full overflow-hidden bg-primary flex items-center justify-center text-primary-foreground font-medium', 
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
        <span className="text-sm">{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
