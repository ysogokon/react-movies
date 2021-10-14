// This is type definiton files
//
export interface movieDTO {
  id: number;
  title: string;
  poster: string;
}

export interface landingPageDTO {
  inTheaters?: movieDTO[];
  upcomingReleases?: movieDTO[];
}
