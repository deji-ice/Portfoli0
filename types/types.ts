import { StaticImageData } from "next/image";

export interface SpotifyData {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: Array<{ url: string; height: number; width: number }>;
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
}

export interface SpotifyNowPlayingResponse {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
}
export interface LogoData {
  alt: string;
  src: string | StaticImageData;
}

export type JobExperience = {
  occupation: string;
  companyName: string;
  dateStart: string;
  dateEnd: string;
  responsibilities: string[];
};

export type Project = {
  id: string;
  projectName: string;
  projectImage: string | StaticImageData;
  projectDescription: string;
  demoLink: string;
  githubLink?: string;
  tools: string[];
};