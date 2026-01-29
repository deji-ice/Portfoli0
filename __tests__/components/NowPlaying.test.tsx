import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NowPlaying from '@/components/NowPlaying';
import { useCurrentlyPlayingTrack } from '@/hooks/useCurrentlyPlayingTrack';

// Mock the hook
jest.mock('@/hooks/useCurrentlyPlayingTrack');
// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

const mockUseCurrentlyPlayingTrack = useCurrentlyPlayingTrack as jest.Mock;

describe('NowPlaying', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading skeleton when loading', () => {
    mockUseCurrentlyPlayingTrack.mockReturnValue({
      isLoading: true,
      data: null,
      isError: false,
    });

    const { container } = render(<NowPlaying />);
    // Check for skeleton elements (animate-pulse)
    expect(container.querySelector('.animate-pulse')).not.toBeNull();
  });

  it('should render nothing when not playing', () => {
    mockUseCurrentlyPlayingTrack.mockReturnValue({
      isLoading: false,
      data: { isPlaying: false },
      isError: false,
    });

    const { container } = render(<NowPlaying />);
    expect(container.firstChild).toBeNull();
  });

  it('should render track info when playing', () => {
    mockUseCurrentlyPlayingTrack.mockReturnValue({
      isLoading: false,
      data: {
        isPlaying: true,
        title: 'Test Title',
        artist: 'Test Artist',
        album: 'Test Album',
        songUrl: 'https://spotify.com/track/123',
        albumImageUrl: 'https://example.com/image.jpg',
      },
      isError: false,
    });

    render(<NowPlaying />);

expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Test Artist')).toBeTruthy();
    // Album is hidden by default
    expect(screen.queryByText('Test Album')).toBeNull();
  });

  it('should show album on click (expand)', async () => {
    mockUseCurrentlyPlayingTrack.mockReturnValue({
      isLoading: false,
      data: {
        isPlaying: true,
        title: 'Test Title',
        artist: 'Test Artist',
        album: 'Test Album',
        songUrl: 'https://spotify.com/track/123',
        albumImageUrl: 'https://example.com/image.jpg',
      },
      isError: false,
    });

    render(<NowPlaying />);

    const title = screen.getByText('Test Title');
    // title (span) -> a -> div (flex col) -> div (card with onClick)
    const card = title.closest('div')?.parentElement;
    
    if (card) {
        fireEvent.click(card);
        await waitFor(() => {
            expect(screen.getByText('Test Album')).toBeTruthy();
        });
    }
  });
});
