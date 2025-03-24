
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  FileEdit,
  MoreHorizontal
} from 'lucide-react';
import { PostData } from '@/utils/mockData';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useDelayedAnimation } from '@/hooks/useAnimation';

interface ScheduledPostsProps {
  posts: PostData[];
  className?: string;
}

// Platform icons map
const platformIcons = {
  facebook: <Facebook className="text-facebook w-4 h-4" />,
  twitter: <Twitter className="text-twitter w-4 h-4" />,
  instagram: <Instagram className="text-instagram w-4 h-4" />,
  linkedin: <Linkedin className="text-linkedin w-4 h-4" />,
};

// Status badge styles and icons
const statusConfig = {
  scheduled: {
    icon: <Clock className="w-4 h-4" />,
    label: 'Scheduled',
    className: 'bg-slate-100 text-slate-700',
  },
  posted: {
    icon: <CheckCircle className="w-4 h-4" />,
    label: 'Posted',
    className: 'bg-green-100 text-green-700',
  },
  draft: {
    icon: <FileEdit className="w-4 h-4" />,
    label: 'Draft',
    className: 'bg-amber-100 text-amber-700',
  },
  error: {
    icon: <AlertCircle className="w-4 h-4" />,
    label: 'Failed',
    className: 'bg-red-100 text-red-700',
  },
};

const PostItem: React.FC<{ post: PostData; delay: number }> = ({ post, delay }) => {
  const platformIcon = platformIcons[post.platform as keyof typeof platformIcons];
  const status = statusConfig[post.status];
  
  const formattedDate = new Date(post.scheduled).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
  
  return (
    <div 
      className="glass-panel rounded-lg overflow-hidden opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start p-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center mb-2 gap-2">
            {platformIcon}
            <span className="text-xs text-muted-foreground">{formattedDate}</span>
            <div className={cn(
              'px-2 py-0.5 rounded-full text-xs flex items-center gap-1',
              status.className
            )}>
              {status.icon}
              <span>{status.label}</span>
            </div>
          </div>
          
          <p className="text-sm line-clamp-2 text-balance mb-2">
            {post.content}
          </p>
          
          {post.image && (
            <div className="mt-2 rounded-md overflow-hidden bg-slate-100 h-20 w-full">
              <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                Image: {post.image}
              </div>
            </div>
          )}
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 rounded-md hover:bg-slate-100">
              <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit post</DropdownMenuItem>
            <DropdownMenuItem>Reschedule</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

const ScheduledPosts: React.FC<ScheduledPostsProps> = ({ posts, className }) => {
  const { ref, isVisible, getAnimationDelay } = useDelayedAnimation(500, 100);
  
  return (
    <div className={cn('', className)}>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold">Scheduled Posts</h2>
        <button className="text-sm text-primary hover:underline">View all</button>
      </div>
      
      <div 
        ref={ref}
        className="space-y-3 overflow-y-auto max-h-[32rem] pr-1"
      >
        {posts.map((post, index) => (
          <PostItem 
            key={post.id} 
            post={post} 
            delay={isVisible ? getAnimationDelay(index) : 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ScheduledPosts;
