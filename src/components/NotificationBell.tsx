
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface Notification {
  id: string;
  message: string;
  time: string;
  read: boolean;
}

interface NotificationBellProps {
  className?: string;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    message: 'Your scheduled post was published successfully',
    time: '2 minutes ago',
    read: false,
  },
  {
    id: '2',
    message: 'New follower milestone reached: 100,000',
    time: '1 hour ago',
    read: false,
  },
  {
    id: '3',
    message: 'Your weekly analytics report is ready',
    time: '3 hours ago',
    read: true,
  },
  {
    id: '4',
    message: 'Campaign "Summer Sale" completed with 24% engagement',
    time: 'Yesterday',
    read: true,
  },
];

const NotificationBell: React.FC<NotificationBellProps> = ({ className }) => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [open, setOpen] = useState(false);
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className={cn('relative p-2 rounded-full transition-colors hover:bg-slate-100', className)}>
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-white">
              {unreadCount}
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-medium">Notifications</h3>
          {unreadCount > 0 && (
            <button 
              onClick={markAllAsRead}
              className="text-xs text-primary hover:underline"
            >
              Mark all as read
            </button>
          )}
        </div>
        
        <div className="max-h-[300px] overflow-y-auto">
          {notifications.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  className={cn(
                    'p-4 hover:bg-slate-50 transition-colors',
                    !notification.read && 'bg-primary/5'
                  )}
                >
                  <div className="flex justify-between">
                    <p className={cn(
                      'text-sm',
                      !notification.read && 'font-medium'
                    )}>
                      {notification.message}
                    </p>
                    {!notification.read && (
                      <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{notification.time}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-sm text-slate-500">
              No notifications
            </div>
          )}
        </div>
        
        <div className="p-3 border-t border-slate-100 bg-slate-50">
          <button className="w-full text-xs text-center text-primary hover:underline">
            View all notifications
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationBell;
