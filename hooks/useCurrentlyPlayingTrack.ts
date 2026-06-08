import { useQuery } from '@tanstack/react-query';
import { SpotifyNowPlayingResponse } from '@/types/types';

const fetchCurrentlyPlaying = async (): Promise<SpotifyNowPlayingResponse> => {
  const res = await fetch('/api/spotify');
  if (!res.ok) throw new Error(`Spotify fetch failed: ${res.status}`);
  return res.json();
};

export const useCurrentlyPlayingTrack = (
  pollingInterval: number = 60000,
  retryCount: number = 2,
  enabled: boolean = true
) => {
  const activeInterval = Math.max(pollingInterval, 60000);
  const idleInterval = 5 * 60 * 1000;

  return useQuery({
    queryKey: ['currently-playing'],
    queryFn: fetchCurrentlyPlaying,
    refetchInterval: (query) => {
      if (!enabled) return false;
      return query.state.data?.isPlaying ? activeInterval : idleInterval;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    staleTime: activeInterval,
    enabled,
    retry: retryCount,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};
