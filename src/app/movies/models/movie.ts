export interface Movie {
  dates: Dates;
  page: number;
  results?: (ResultsEntity)[] | null;
  total_pages: number;
  total_results: number;
}
export interface Dates {
  maximum: string;
  minimum: string;
}
export interface ResultsEntity{
  name: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids?: (number)[] | null;
  production_companies?: [
  //   {
  //   id: number
  //   logo_path: string
  //   name: string
  //   origin_country: string
  // }
  ] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
