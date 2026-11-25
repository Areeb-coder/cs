'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Play,
  Search,
  ShieldCheck,
  Video,
} from 'lucide-react';
import { TopicVideo } from '@/types/video';
import { useApp } from '@/context/AppContext';

interface TopicVideoSectionProps {
  video?: TopicVideo;
  onOpenNotes?: () => void;
  onOpenPractice?: () => void;
  onOpenTutor?: () => void;
}

export function TopicVideoSection({
  video,
  onOpenNotes,
  onOpenPractice,
  onOpenTutor,
}: TopicVideoSectionProps) {
  const { state, toggleVideoWatched } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);

  if (!video) return null;

  const isWatched = video.topicId ? (state.watchedVideos?.[video.topicId] ?? false) : false;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4.5 dark:border-slate-800 dark:bg-slate-900 shadow-sm transition-all">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400">
            <Video className="h-4 w-4" />
          </span>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Recommended Lecture
            </h4>
          </div>
        </div>

        {video.status === 'verified' ? (
          <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800">
            <ShieldCheck className="h-3.5 w-3.5" />
            Verified Lecture
          </span>
        ) : (
          <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-100 dark:border-amber-800">
            <AlertCircle className="h-3.5 w-3.5" />
            Needs Verification
          </span>
        )}
      </div>

      <div className="mt-3.5">
        {video.status === 'verified' && video.youtubeVideoId ? (
          <div className="space-y-3">
            {/* Lazy Click-to-load 16:9 Video Container */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-900 shadow-inner group">
              {isPlaying ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.youtubeVideoId}?autoplay=1`}
                  title={video.title || 'YouTube video player'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="relative h-full w-full block text-left focus:outline-none"
                  aria-label="Play video lecture"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${video.youtubeVideoId}/hqdefault.jpg`}
                    alt={video.title || 'Video preview'}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-85 transition-opacity group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 transition-colors group-hover:bg-slate-900/20" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-110">
                      <Play className="h-5 w-5 fill-current ml-0.5" />
                    </span>
                  </div>

                  <span className="absolute bottom-2 left-2 rounded bg-black/75 px-1.5 py-0.5 text-[10px] font-medium text-white">
                    {video.channelName}
                  </span>
                </button>
              )}
            </div>

            {/* Video Metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
              <div className="min-w-0">
                <h5 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 line-clamp-2">
                  {video.title}
                </h5>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {video.channelName} • {video.coverage === 'complete' ? 'Complete syllabus coverage' : 'Partial concept coverage'}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => toggleVideoWatched(video.topicId)}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                    isWatched
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400'
                      : 'border border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {isWatched ? 'Watched' : 'Mark watched'}
                </button>

                {video.youtubeUrl && (
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    <span>YouTube</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Search Fallback Banner */
          <div className="rounded-xl border border-amber-200/70 bg-amber-50/50 p-3.5 dark:border-amber-900/30 dark:bg-amber-950/20">
            <div className="flex items-start gap-2.5">
              <Search className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-amber-900 dark:text-amber-200">
                  Curated video awaiting faculty verification.
                </p>
                <p className="text-[11px] text-amber-700 dark:text-amber-400 mt-0.5">
                  To protect academic integrity, unverified videos are not auto-recommended. You may explore university lectures on YouTube directly:
                </p>
                {video.searchUrl && (
                  <a
                    href={video.searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 rounded-lg bg-amber-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-amber-700 transition"
                  >
                    <span>Search Lectures on YouTube</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Connected Learning Flow */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 dark:border-slate-800 text-xs">
          <span className="font-semibold text-slate-500 dark:text-slate-400">
            Next in Learning Flow:
          </span>
          <div className="flex items-center gap-1.5">
            {onOpenNotes && (
              <button
                type="button"
                onClick={onOpenNotes}
                className="rounded-lg bg-slate-100 px-2.5 py-1 font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
              >
                Notes →
              </button>
            )}
            {onOpenTutor && (
              <button
                type="button"
                onClick={onOpenTutor}
                className="rounded-lg bg-purple-50 px-2.5 py-1 font-medium text-purple-700 hover:bg-purple-100 dark:bg-purple-950 dark:text-purple-300"
              >
                Ask AI →
              </button>
            )}
            {onOpenPractice && (
              <button
                type="button"
                onClick={onOpenPractice}
                className="rounded-lg bg-sky-50 px-2.5 py-1 font-semibold text-sky-700 hover:bg-sky-100 dark:bg-sky-950 dark:text-sky-300"
              >
                Practice Questions →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
