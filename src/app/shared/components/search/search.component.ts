import { Component, EventEmitter, Output } from '@angular/core';

import { MovieService } from 'src/app/movies/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  movieTitle!: string;
  searchedMovie: any;
  oops!: string;
  show = true;
  errorMessage: any;
  loading = false

  constructor(private db: MovieService){

  }

  getMovieByName(){
    this.searchedMovie = ''
    this.loading = true
    this.db.getMovieByName(this.movieTitle).subscribe((res:any)=>{
      // Check for any errors
      if (res.Response === 'False') {
        this.loading = false
        // Handle the error
        this.errorMessage = `Sorry: ${res.Error}`;
      } else {
        this.loading = false
        // Process the data
        this.searchedMovie = res;
        console.log(this.searchedMovie)
        // this.movieTitle =''
        this.errorMessage = ''
      }
    },
    (error) => {
      this.loading = false
      // Handle the HTTP error
      this.errorMessage = `HTTP error ${error.status}: ${error.statusText}`;
    })
  }

//   onSubmit(){
//     this.searchedMovie = ''
//     this.db.getMovieByName(this.movieTitle).subscribe((res:any)=>{
//       // Check for any errors
//       if (res.Response === 'False') {
//         // Handle the error
//         this.errorMessage = `Sorry: ${res.Error}`;
//       } else {
//         // Process the data
//         this.searchedMovie = res;
//         console.log(this.searchedMovie)
//         // this.movieTitle =''
//         this.errorMessage = ''
//       }
//     },
//     (error) => {
//       // Handle the HTTP error
//       this.errorMessage = `HTTP error ${error.status}: ${error.statusText}`;
//     })
// }
//Names
// names(movie: any): any{
//   movie.Writer = movie.Writer.replace(/,/g, '|');
// return movie
// }


}
