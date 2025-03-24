
import React from 'react';
import { Search, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Avatar from './Avatar';
import NotificationBell from './NotificationBell';

interface HeaderProps {
  className?: string;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ className, toggleSidebar }) => {
  return (
    <header className={cn('w-full h-16 px-6 flex items-center justify-between border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-10', 
      className
    )}>
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input 
            type="text"
            placeholder="Search..." 
            className="h-10 w-64 pl-9 pr-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50/50"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="hidden sm:block rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50 transition-colors">
          Create Post
        </button>
        
        <NotificationBell />
        
        <div className="flex items-center gap-3">
          <Avatar initials="JS" />
          <div className="hidden md:block">
            <p className="text-sm font-medium">John Smith</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
