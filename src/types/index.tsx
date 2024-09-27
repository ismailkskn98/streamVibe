export interface FetchResult<T> {
  page: number;
  results: Array<T>;
}

export interface Movies {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface FetchResultGenres {
  genres: Array<Genres>;
}
export interface Genres {
  id: number;
  name: string;
}

export interface MoviesByGenres {
  id: number;
  genre: string;
  movies: {
    poster_path: string;
    original_title: string;
  }[];
}
