import { SpotifyData, SpotifyNowPlayingResponse } from '@/types/types';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// In-memory cache for the access token
let cachedToken: string | null = null;
let cachedTokenExpiresAt: number = 0;

const getAccessToken = async () => {
  const now = Date.now();

  // Return cached token if it's still valid (buffer of 60 seconds)
  if (cachedToken && now < cachedTokenExpiresAt - 60000) {
    return cachedToken;
  }

  try {
    const response = await axios.post<{ access_token: string; expires_in: number }>(
      TOKEN_ENDPOINT,
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refresh_token!,
      }).toString(),
      {
        headers: {
          Authorization: `Basic ${basic}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    cachedToken = response.data.access_token;
    // expires_in is usually 3600 seconds
    cachedTokenExpiresAt = now + response.data.expires_in * 1000;

    return cachedToken;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
};

export const getNowPlaying = async () => {
  const access_token = await getAccessToken();

  return axios.get<SpotifyData>(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    validateStatus: (status) => status < 500, // Handle 4xx manually
  });
};

export default async function spotify(
  req: NextApiRequest,
  res: NextApiResponse<SpotifyNowPlayingResponse | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ isPlaying: false, error: 'Method not allowed' } as any);
  }

  if (!client_id || !client_secret || !refresh_token) {
    console.error('Missing Spotify environment variables');
    return res.status(500).json({ isPlaying: false, error: 'Missing configuration' } as any);
  }

  try {
    const response = await getNowPlaying();

    // Set cache headers
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=30, stale-while-revalidate=15'
    );

    if (
      response.status === 204 ||
      response.status > 400 ||
      !response.data ||
      response.data.currently_playing_type !== 'track'
    ) {
      return res.status(200).json({ isPlaying: false });
    }

    const { item } = response.data;
    if (!item || !item.album || !item.album.images) {
      return res.status(200).json({ isPlaying: false });
    }

    // Get the largest image (usually the first one)
    const albumImageUrl = item.album.images[0]?.url;

    const data: SpotifyNowPlayingResponse = {
      isPlaying: response.data.is_playing,
      title: item.name,
      album: item.album.name,
      artist: item.album.artists.map((artist) => artist.name).join(', '),
      albumImageUrl,
      songUrl: item.external_urls.spotify,
    };

    return res.status(200).json(data);
  } catch (error) {
    console.error('Spotify API error:', error);
    // Return isPlaying: false instead of 500 to avoid breaking the UI completely
    return res.status(200).json({ isPlaying: false });
  }
}
