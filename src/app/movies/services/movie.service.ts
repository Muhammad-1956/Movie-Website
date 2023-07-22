import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Movie } from '../models/movie';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url: string = 'https://api.themoviedb.org/3/movie/'
  api_key: string = '?api_key=03db5765922ab23b2c2984b877013580'
  constructor(private httpClient: HttpClient) { }

  //Latest Movie
  getLatestMovie(): Observable<any>{
    return this.httpClient.get<any>(this.url +'latest' +this.api_key)
  }

  //Popular Movies
  getPopularMovies(): Observable<Movie>{
    return this.httpClient.get<Movie>(this.url+'popular'+this.api_key)
  }

  //Now Playing Movies
  getNowPlayingMovies(): Observable<Movie>{
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/movie/now_playing${this.api_key}`)
  }

  //UpComing Movies
  getUpComingMovies(): Observable<Movie>{
    return this.httpClient.get<Movie>(this.url +'upcoming' +this.api_key)
  }

  //Trending Movies
  // getTrendingMovies(): Observable<Movie>{
  //   return this.httpClient.get<Movie>(this.url +'trending/all/week' +this.api_key)
  // }

  //Top Rated Movies
  getTopRatedMovies(): Observable<Movie>{
    return this.httpClient.get<Movie>(this.url +'top_rated' +this.api_key)
  }

  //Originals
  // getOriginals(): Observable<Movie>{
  //   return this.httpClient.get<Movie>(this.url +'discover/tv' +this.api_key)
  // }
  //Get Movie By Id
  getMovieById(id: number){
    return this.httpClient.get(this.url+id+this.api_key)
  }

  //Get Movie By Id
  getMovieByName(keyword: string){
    return this.httpClient.get(`http://www.omdbapi.com/?apikey=fc918533&t=${keyword}`)
  }

  //Filter By Category
  filter(cat: string){
    return this.httpClient.get<Movie>(this.url +cat +this.api_key)
  }

  //Get Actors
  getActors(){
    return this.httpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=03db5765922ab23b2c2984b877013580`)
  }
  //Get Tv Show
  getTv(){
    return this.httpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=03db5765922ab23b2c2984b877013580`)
  }
}
