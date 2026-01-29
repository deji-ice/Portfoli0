import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCurrentlyPlayingTrack } from '@/hooks/useCurrentlyPlayingTrack';
import { ReactNode } from 'react';

// Mock fetch
global.fetch = jest.fn();

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useCurrentlyPlayingTrack', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return data when fetch is successful', async () => {
    const mockData = {
      isPlaying: true,
      title: 'Test Song',
      artist: 'Test Artist',
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { result } = renderHook(() => useCurrentlyPlayingTrack(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockData);
  });

  it('should handle errors', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
    });

    // Pass retryCount = 0 to avoid waiting for retries
    const { result } = renderHook(() => useCurrentlyPlayingTrack(5000, 0), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));
  });

  it('should handle rate limiting (429)', async () => {
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: false,
        status: 429,
        headers: {
          get: () => '1', // Retry after 1 second
        },
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ isPlaying: true }),
      });

    const { result } = renderHook(() => useCurrentlyPlayingTrack(), {
      wrapper: createWrapper(),
    });

    // Verify fetch is called
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  });
});
