import { TopicVideo } from '@/types/video';
import rawVideos from './videos_data.json';

export const TOPIC_VIDEOS: TopicVideo[] = rawVideos as TopicVideo[];

export function getVideoForTopic(topicId: string): TopicVideo | undefined {
  return TOPIC_VIDEOS.find((v) => v.topicId === topicId);
}

export function getVerifiedVideos(): TopicVideo[] {
  return TOPIC_VIDEOS.filter((v) => v.status === 'verified');
}

export function getFallbackVideos(): TopicVideo[] {
  return TOPIC_VIDEOS.filter((v) => v.status === 'search-fallback');
}
