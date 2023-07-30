import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent {

  latestMovie: any;
  popularMovies!: Movie
  nowPlayingMovies!: Movie
  topRatedMovies!: Movie
  upComingMovies!: Movie
  trendingMovies!: Movie
  originals!: Movie
  categories: any =[
    {key: 'popular', value: 'Popular Movies'},
    {key: 'now_playing', value: 'Now Playing Movies'},
    {key: 'upcoming', value: 'Up Coming Movies'},
    {key: 'top_rated', value: 'Top Rated Movies'},
  ]
  selectedMovies!: Movie;
  header: string ='Popular Movies';
  movieTitle!: string;
  loading = false;

  constructor(private db: MovieService, private title: Title){
    this.getPopularMovie();
    this.title.setTitle('Movies')
  }
  ngOnInit(){
  }
  filter(e: any){
    let value = e.key;
    this.header = e.value
    this.loading = true
    this.db.filter(value).subscribe((res: any)=>{
      this.loading = false
      this.selectedMovies = this.modifyData(res)
      console.log(this.selectedMovies)
    },err =>{
      this.loading=false
      alert(err.message)
    })
  }


  //Get Latest Movies
  getLatestMovie(){
    this.loading =true
    this.db.getLatestMovie().subscribe(res=>{
      this.latestMovie = this.changeData(res)
      this.loading =false
    }, err =>{
      this.loading =false
      console.log('Not able to get latest movie', err)
    })
  }
  //Change Data
  changeData(res: any): any{
    if(!res.backdrop_path){
      res.backdrop_path = 'https://image.tmdb.org/t/p/original'+res.poster_path+'?api_key=03db5765922ab23b2c2984b877013580'
    }else{
      res.backdrop_path = 'https://image.tmdb.org/t/p/original'+res.backdrop_path+'?api_key=03db5765922ab23b2c2984b877013580'
    }
    return res;
  }
  //Get Popular Movies
  getPopularMovie(){
    this.loading =true
    this.db.getPopularMovies().subscribe((res:any)=>{
      this.popularMovies = this.modifyData(res)
      this.selectedMovies = this.popularMovies
      this.loading = false
    }, err =>{
      this.loading = false
      console.log('Error while fetching popular movies', err)
    })
  }

  //Get NowPlaying Movies
  getNowPlayingMovies(){
    this.db.getNowPlayingMovies().subscribe((res:any)=>{
      this.nowPlayingMovies = this.modifyData(res)
      console.log(this.nowPlayingMovies)
    }, err =>{
      console.log('Error while fetching popular movies', err)
    })
  }

  //Get UpComing Movies
  getUpComingMovies(){
    this.db.getUpComingMovies().subscribe((res:any)=>{
      this.upComingMovies = this.modifyData(res)
    }, err =>{
      console.log('Error while fetching popular movies', err)
    })
  }

  //Get TopRated Movies
  getTopRatedMovies(){
    this.db.getTopRatedMovies().subscribe((res:any)=>{
      this.topRatedMovies = this.modifyData(res)
    }, err =>{
      console.log('Error while fetching popular movies', err)
    })
  }

  //Modify Data
  modifyData(movies: Movie): Movie{
    if(movies.results){
      movies.results.forEach(element => {
        element.backdrop_path = 'https://image.tmdb.org/t/p/original'+ element.backdrop_path+'?api_key=03db5765922ab23b2c2984b877013580'
        if(!element.title){
          element.title = element?.name;
        }
      });
    }
    return movies
  }

}


