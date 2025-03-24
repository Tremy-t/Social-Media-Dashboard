
// Mock data for the social media dashboard
export interface MetricData {
  id: number;
  name: string;
  value: number;
  change: number; // Percentage change
  icon: string;
}

export interface PlatformData {
  id: string;
  name: string;
  icon: string;
  color: string;
  followers: number;
  engagement: number;
  growth: number;
}

export interface PostData {
  id: string;
  content: string;
  image?: string;
  scheduled: Date; 
  platform: string; 
  status: 'scheduled' | 'posted' | 'draft' | 'error';
}

export interface EngagementData {
  date: string;
  facebook: number;
  twitter: number;
  instagram: number;
  linkedin: number;
}

// Key metrics for overview
export const metrics: MetricData[] = [
  {
    id: 1,
    name: 'Total Followers',
    value: 124500,
    change: 2.5,
    icon: 'users',
  },
  {
    id: 2,
    name: 'Engagement Rate',
    value: 4.2,
    change: 0.8,
    icon: 'activity',
  },
  {
    id: 3,
    name: 'Scheduled Posts',
    value: 45,
    change: -12,
    icon: 'calendar',
  },
  {
    id: 4,
    name: 'Monthly Growth',
    value: 3200,
    change: 5.7,
    icon: 'trending-up',
  },
];

// Platform data
export const platforms: PlatformData[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'facebook',
    color: 'facebook',
    followers: 45800,
    engagement: 1.2,
    growth: 0.7,
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: 'twitter',
    color: 'twitter',
    followers: 28700,
    engagement: 2.8,
    growth: 1.9,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: 'instagram',
    color: 'instagram',
    followers: 36500,
    engagement: 5.3,
    growth: 2.3,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: 'linkedin',
    color: 'linkedin',
    followers: 13500,
    engagement: 3.1,
    growth: 4.6,
  },
];

// Scheduled posts
export const scheduledPosts: PostData[] = [
  {
    id: '1',
    content: 'Excited to announce our new product line coming next month! Stay tuned for more updates. #NewProduct #Announcement',
    scheduled: new Date(Date.now() + 3600000 * 24), // Tomorrow
    platform: 'facebook',
    status: 'scheduled',
  },
  {
    id: '2',
    content: 'Check out our latest blog post on "10 Tips for Social Media Success" - Link in bio!',
    image: 'blog-post-image.jpg',
    scheduled: new Date(Date.now() + 3600000 * 12), // 12 hours from now
    platform: 'instagram',
    status: 'scheduled',
  },
  {
    id: '3',
    content: "We're hiring! Join our growing team of social media specialists. Apply now:",
    scheduled: new Date(Date.now() + 3600000 * 48), // 48 hours from now
    platform: 'linkedin',
    status: 'scheduled',
  },
  {
    id: '4',
    content: "Our CEO will be live tomorrow discussing the future of digital marketing. Don't miss it!",
    scheduled: new Date(Date.now() - 3600000 * 6), // 6 hours ago
    platform: 'twitter',
    status: 'posted',
  },
  {
    id: '5',
    content: 'Holiday campaign draft - review copy and images before scheduling.',
    image: 'holiday-campaign.jpg',
    scheduled: new Date(Date.now() + 3600000 * 72), // 72 hours from now
    platform: 'facebook',
    status: 'draft',
  },
  {
    id: '6',
    content: 'Product tutorial video #3 - How to use our new mobile app features.',
    scheduled: new Date(Date.now() - 3600000 * 2), // 2 hours ago
    platform: 'instagram',
    status: 'error',
  },
];

// Engagement data for chart
export const engagementData: EngagementData[] = [
  { date: 'Mon', facebook: 245, twitter: 120, instagram: 380, linkedin: 90 },
  { date: 'Tue', facebook: 285, twitter: 130, instagram: 390, linkedin: 105 },
  { date: 'Wed', facebook: 255, twitter: 180, instagram: 420, linkedin: 125 },
  { date: 'Thu', facebook: 290, twitter: 170, instagram: 410, linkedin: 130 },
  { date: 'Fri', facebook: 310, twitter: 210, instagram: 450, linkedin: 140 },
  { date: 'Sat', facebook: 280, twitter: 190, instagram: 430, linkedin: 120 },
  { date: 'Sun', facebook: 250, twitter: 150, instagram: 390, linkedin: 95 },
];
