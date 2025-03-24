
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NotificationBellProps {
  count?: number;
  className?: string;
}

const NotificationBell: React.FC<NotificationBellProps> = ({ 
  count = 0,
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button 
        className={cn(
          'relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors',
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="w-5 h-5" />
        {count > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
            {count > 9 ? '9+' : count}
          </span>
        )}
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-slate-200 rounded-lg shadow-lg z-20">
          <div className="p-4 border-b border-slate-200">
            <h3 className="font-medium">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto p-2">
            {count > 0 ? (
              <div>
                {/* Notification items would go here */}
                <div className="p-3 hover:bg-slate-50 rounded-md transition-colors">
                  <p className="text-sm">Your post received 10 new likes</p>
                  <span className="text-xs text-muted-foreground">2 minutes ago</span>
                </div>
              </div>
            ) : (
              <div className="p-4 text-center text-muted-foreground">
                <p>No new notifications</p>
              </div>
            )}
          </div>
          <div className="p-2 border-t border-slate-200">
            <button 
              className="w-full text-sm text-center p-2 text-primary hover:bg-slate-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Mark all as read
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
