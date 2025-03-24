
import React from 'react';
import { cn } from '@/lib/utils';
import { Calendar, Clock, Edit, Trash2 } from 'lucide-react';

interface ScheduledPost {
  id: string;
  title: string;
  platform: string;
  platformIcon: React.ReactNode;
  date: string;
  time: string;
  image?: string;
}

interface ScheduledPostsProps {
  posts: ScheduledPost[];
  className?: string;
}

const ScheduledPosts: React.FC<ScheduledPostsProps> = ({ 
  posts,
  className
}) => {
  return (
    <div className={cn('bg-white p-6 rounded-xl border border-slate-200 shadow-sm', className)}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Scheduled Posts</h2>
        <button className="text-sm text-primary font-medium">View All</button>
      </div>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <div 
            key={post.id}
            className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            {post.image ? (
              <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-md bg-slate-100 flex items-center justify-center flex-shrink-0">
                {post.platformIcon}
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm truncate">{post.title}</h3>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="w-3 h-3 mr-1" />
                  {post.time}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-md text-muted-foreground hover:text-red-500 hover:bg-slate-100 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduledPosts;
