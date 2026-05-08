import { useQuery } from '@tanstack/react-query';
import { SpotifyNowPlayingResponse } from '@/types/types';

const fetchCurrentlyPlaying = async (): Promise<SpotifyNowPlayingResponse> => {
  const res = await fetch('/api/spotify');

  if (!res.ok) {
    if (res.status === 429) {
      const retryAfter = res.headers.get('Retry-After');
      if (retryAfter) {
        await new Promise((resolve) => setTimeout(resolve, parseInt(retryAfter) * 1000));
        return fetchCurrentlyPlaying();
      }
    }
    throw new Error('Failed to fetch currently playing track');
  }

  return res.json();
};

export const useCurrentlyPlayingTrack = (
  pollingInterval: number = 60000,
  retryCount: number = 2,
  enabled: boolean = true
) => {
  const activeInterval = Math.max(pollingInterval, 30000);
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
    staleTime: activeInterval,
    enabled,
    retry: retryCount,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};
