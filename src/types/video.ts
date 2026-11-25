export type VideoStatus = 'verified' | 'search-fallback';
export type VideoCoverage = 'complete' | 'partial';

export interface TopicVideo {
  id: string;
  topicId: string;
  subjectId: string;
  unitNumber: number;
  topicTitle: string;
  youtubeUrl?: string;
  youtubeVideoId?: string;
  title?: string;
  channelName?: string;
  status: VideoStatus;
  coverage: VideoCoverage;
  source: 'curated-research';
  searchQuery?: string;
  searchUrl?: string;
  reviewNotes?: string;
}

export interface VideoWatchState {
  watched: boolean;
  lastWatchedAt?: string;
}
