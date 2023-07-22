import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { AllMoviesComponent } from '../all-movies/all-movies.component';
import { Movie } from '../../models/movie';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  movieId: any;
  movie: any = {};
  loading = false
  constructor(private ActivatedRoute: ActivatedRoute, private db: MovieService, private title: Title){
    this.movieId = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.getMovieById();
  }
  ngOninit(){
    this.title.setTitle(`${this.movie.title} | Details`)
  }
  getMovieById(){
    this.loading= true
    this.db.getMovieById(this.movieId).subscribe((res: any)=>{
      this.movie = this.changeData(res)
      console.log(this.movie)
      this.loading= false
    }, err =>{
      this.loading= false
      alert(err.message)
    })
  }
  //Modify Data
  changeData(res: any) {
    res.poster_path = 'https://image.tmdb.org/t/p/original'+ res.poster_path+'?api_key=03db5765922ab23b2c2984b877013580'
    res.production_companies.forEach((company: any) => {
        company.logo_path = 'https://image.tmdb.org/t/p/original'+ company.logo_path+'?api_key=03db5765922ab23b2c2984b877013580'
      });
    return res
    }
  //Modify Data
  modifyData(movie: any): any{
      movie.production_companies.forEach((company: any) => {
        company.logo_path = 'https://image.tmdb.org/t/p/original'+ company.logo_path+'?api_key=03db5765922ab23b2c2984b877013580'
      });
    return movie
  }

}
