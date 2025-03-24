
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Home, 
  BarChart2, 
  Calendar, 
  MessageSquare, 
  Users, 
  Settings,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  PlusCircle,
  X
} from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ 
  icon, 
  label, 
  active = false,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 px-4 py-3 rounded-lg w-full transition-colors',
        active 
          ? 'bg-primary text-white' 
          : 'text-muted-foreground hover:bg-slate-100 hover:text-foreground'
      )}
    >
      <span className="w-5 h-5">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

interface SideNavProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ 
  className,
  isOpen,
  onClose
}) => {
  const [activeNav, setActiveNav] = React.useState('dashboard');
  
  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };
  
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={cn(
        'fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 transition-transform duration-300 ease-out-expo',
        'lg:translate-x-0 lg:relative lg:z-0',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        className
      )}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-200">
          <h1 className="font-semibold text-lg">Social Dashboard</h1>
          <button 
            onClick={onClose}
            className="p-1 text-muted-foreground hover:text-foreground lg:hidden"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="p-4">
          <nav className="space-y-1.5">
            <NavItem 
              icon={<Home />} 
              label="Dashboard" 
              active={activeNav === 'dashboard'} 
              onClick={() => handleNavClick('dashboard')}
            />
            <NavItem 
              icon={<BarChart2 />} 
              label="Analytics" 
              active={activeNav === 'analytics'} 
              onClick={() => handleNavClick('analytics')}
            />
            <NavItem 
              icon={<Calendar />} 
              label="Content Calendar" 
              active={activeNav === 'calendar'} 
              onClick={() => handleNavClick('calendar')}
            />
            <NavItem 
              icon={<MessageSquare />} 
              label="Inbox" 
              active={activeNav === 'inbox'} 
              onClick={() => handleNavClick('inbox')}
            />
            <NavItem 
              icon={<Users />} 
              label="Audience" 
              active={activeNav === 'audience'} 
              onClick={() => handleNavClick('audience')}
            />
          </nav>
          
          <div className="mt-8">
            <h2 className="text-xs font-medium text-muted-foreground px-4 mb-3">
              CONNECTED ACCOUNTS
            </h2>
            <nav className="space-y-1.5">
              <NavItem 
                icon={<Facebook className="text-facebook" />} 
                label="Facebook" 
                active={activeNav === 'facebook'} 
                onClick={() => handleNavClick('facebook')}
              />
              <NavItem 
                icon={<Twitter className="text-twitter" />} 
                label="Twitter" 
                active={activeNav === 'twitter'} 
                onClick={() => handleNavClick('twitter')}
              />
              <NavItem 
                icon={<Instagram className="text-instagram" />} 
                label="Instagram" 
                active={activeNav === 'instagram'} 
                onClick={() => handleNavClick('instagram')}
              />
              <NavItem 
                icon={<Linkedin className="text-linkedin" />} 
                label="LinkedIn" 
                active={activeNav === 'linkedin'} 
                onClick={() => handleNavClick('linkedin')}
              />
              <button className="flex items-center gap-3 px-4 py-3 text-sm text-primary hover:underline w-full">
                <PlusCircle className="w-4 h-4" />
                <span>Connect new account</span>
              </button>
            </nav>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200">
          <NavItem 
            icon={<Settings />} 
            label="Settings" 
            active={activeNav === 'settings'} 
            onClick={() => handleNavClick('settings')}
          />
        </div>
      </aside>
    </>
  );
};

export default SideNav;
