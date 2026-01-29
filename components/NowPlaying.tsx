'use client';

import { useCurrentlyPlayingTrack } from '@/hooks/useCurrentlyPlayingTrack';
import { SiSpotify } from 'react-icons/si';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

const NowPlayingContent = () => {
  const { data, isLoading, isError } = useCurrentlyPlayingTrack(5000);
  const [isExpanded, setIsExpanded] = useState(false);

  // If loading initially, show a skeleton or nothing (user requested skeleton)
  if (isLoading) {
    return (
      <div className="fixed bottom-4 right-4 z-50 hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/10 shadow-lg w-64 animate-pulse">
        <div className="w-12 h-12 bg-gray-600/50 rounded-md" />
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-gray-600/50 rounded w-3/4" />
          <div className="h-2 bg-gray-600/50 rounded w-1/2" />
        </div>
      </div>
    );
  }

  if (isError || !data?.isPlaying) {
    return null; // Don't show anything if not playing or error
  }

  return (
    <AnimatePresence>
      {data?.isPlaying && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2"
        >
          <div 
            className="flex items-center gap-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-2xl hover:shadow-green-500/20 transition-shadow duration-300 max-w-[90vw] md:max-w-sm cursor-pointer group"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {/* Album Art */}
            {data.albumImageUrl && (
              <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-md overflow-hidden border border-white/5">
                <Image
                  src={data.albumImageUrl}
                  alt={data.album || 'Album Art'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 48px, 64px"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
            )}

            {/* Track Info */}
            <div className="flex flex-col justify-center min-w-0 mr-2">
              <a
                href={data.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold text-sm md:text-base truncate hover:text-green-400 transition-colors flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                {SiSpotify({ className: "text-[#1DB954] flex-shrink-0" })}
                <span className="truncate">{data.title}</span>
              </a>
              <p className="text-gray-400 text-xs md:text-sm truncate">
                {data.artist}
              </p>
              {isExpanded && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-gray-500 text-xs truncate"
                >
                  {data.album}
                </motion.p>
              )}
            </div>
            
            {/* Visualizer / Playing Indicator */}
            <div className="flex gap-[2px] h-3 items-end ml-2">
              <motion.div 
                animate={{ height: [4, 12, 4] }} 
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-1 bg-green-500 rounded-t-sm" 
              />
              <motion.div 
                animate={{ height: [10, 4, 10] }} 
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="w-1 bg-green-500 rounded-t-sm" 
              />
              <motion.div 
                animate={{ height: [6, 10, 6] }} 
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="w-1 bg-green-500 rounded-t-sm" 
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NowPlaying = () => {
  return (
    <ErrorBoundary>
      <NowPlayingContent />
    </ErrorBoundary>
  );
};

export default NowPlaying;
