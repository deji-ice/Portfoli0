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
  pollingInterval: number = 5000,
  retryCount: number = 3
) => {
  // Enforce minimum polling interval of 3 seconds
  const interval = Math.max(pollingInterval, 3000);

  return useQuery({
    queryKey: ['currently-playing'],
    queryFn: fetchCurrentlyPlaying,
    refetchInterval: interval,
    staleTime: 1000 * 30, // 30 seconds cache
    retry: retryCount,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};
