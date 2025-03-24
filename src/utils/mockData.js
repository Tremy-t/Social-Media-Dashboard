
// Mock data for the dashboard
const mockData = {
  // Metrics for the dashboard overview
  metrics: [
    {
      id: 'followers',
      title: 'Total Followers',
      value: '112,893',
      change: 12.5,
      trend: 'up',
      icon: 'users'
    },
    {
      id: 'engagement',
      title: 'Engagement Rate',
      value: '4.3%',
      change: 2.1,
      trend: 'up',
      icon: 'bar-chart-2'
    },
    {
      id: 'posts',
      title: 'Total Posts',
      value: '478',
      change: 0,
      trend: 'neutral',
      icon: 'message-square'
    },
    {
      id: 'shares',
      title: 'Total Shares',
      value: '24,755',
      change: 8.3,
      trend: 'down',
      icon: 'share-2'
    }
  ],

  // Social media platforms
  platforms: [
    {
      id: 'facebook',
      name: 'Facebook',
      icon: 'facebook',
      followers: '45,231',
      engagement: '2.1%',
      color: '#1877F2'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: 'twitter',
      followers: '27,644',
      engagement: '1.8%',
      color: '#1DA1F2'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: 'instagram',
      followers: '32,456',
      engagement: '5.4%',
      color: '#E4405F'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: 'linkedin',
      followers: '7,562',
      engagement: '3.5%',
      color: '#0A66C2'
    }
  ],

  // Scheduled posts data
  scheduledPosts: [
    {
      id: '1',
      title: 'New product announcement',
      platform: 'Facebook',
      platformIcon: 'facebook',
      date: 'Tomorrow',
      time: '09:00 AM',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
    },
    {
      id: '2',
      title: 'Weekly product tips & tricks',
      platform: 'Twitter',
      platformIcon: 'twitter',
      date: 'Jun 15, 2023',
      time: '12:30 PM'
    },
    {
      id: '3',
      title: 'Behind the scenes: company culture',
      platform: 'Instagram',
      platformIcon: 'instagram',
      date: 'Jun 16, 2023',
      time: '15:45 PM',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad'
    },
    {
      id: '4',
      title: 'Industry news roundup for the week',
      platform: 'LinkedIn',
      platformIcon: 'linkedin',
      date: 'Jun 17, 2023',
      time: '10:15 AM'
    }
  ],

  // Engagement chart data
  engagementData: [
    { date: 'Mon', likes: 4000, comments: 2400, shares: 1000 },
    { date: 'Tue', likes: 3000, comments: 1398, shares: 800 },
    { date: 'Wed', likes: 2000, comments: 9800, shares: 1200 },
    { date: 'Thu', likes: 2780, comments: 3908, shares: 1400 },
    { date: 'Fri', likes: 1890, comments: 4800, shares: 1600 },
    { date: 'Sat', likes: 2390, comments: 3800, shares: 1000 },
    { date: 'Sun', likes: 3490, comments: 4300, shares: 1700 }
  ]
};

// Export the mock data
export const metrics = mockData.metrics;
export const platforms = mockData.platforms;
export const scheduledPosts = mockData.scheduledPosts;
export const engagementData = mockData.engagementData;
