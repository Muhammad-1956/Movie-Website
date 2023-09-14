import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
@Input() movies: any;
clsadicked = false
times: number = 0
book: any;
watchList: any[]= [];

constructor(){
}

ngOnInit(){
  // if ('watchlist' in localStorage) {
  //   this.watchList = JSON.parse(localStorage.getItem('watchlist')!);
  //   // Loop through the watchList array and compare the popularity property of each saved movie
  //   // with the popularity property of each movie in the movies array
  //   this.movies?.forEach((movie: Movie |any, i: number) => {
  //     const savedMovie = this.watchList.find(item=> item.popularity == movie.popularity);
  //     console.log('movie', movie);
  //     console.log('savedMovie', savedMovie);
  //     if (savedMovie) {
  //       const bookmarkIcon = document.querySelector(`#movie-${i}`);
  //       bookmarkIcon?.classList.add('bi-bookmark-fill', 'fa-solid', 'saved');
  //       console.log('bookmarkIcon', bookmarkIcon);
  //     }
  //   });
  // }

}
// Handle Add and Delete To/From Watchlist
clicked(movie: Movie, i : number){
  this.book = document.querySelector(`#movie-${i}`)
    if(this.book.classList.contains('saved')){
        this.empty();
        this.DeleteFromWatchlist(movie);
    } else{
        this.marked();
        this.addToWatchlist(movie)
    }
}
empty(){
  this.book.classList.remove('bi-bookmark-fill', 'fa-solid', 'saved')
  this.book.classList.add('fa-regular','fa-bookmark')
}
marked(){
  this.book.classList.remove('fa-regular','fa-bookmark')
  this.book.classList.add('bi-bookmark-fill', 'fa-solid', 'saved')
}

  addToWatchlist(movie: Movie | any){
    if("watchlist" in localStorage){
      this.watchList = JSON.parse(localStorage.getItem("watchlist")!)
      this.watchList.find(custom_item => custom_item.original_title == movie.original_title) ? Swal.fire(`<p style="font-size: 1.6rem;"><span class="fw-bold" style="color: green">${movie.original_title}</span> is already exist in your watchlist</p>`): this.add(movie);
    }else{
      this.add(movie)
    }
  }
  add(movie: Movie){
    this.watchList.push(movie)
    localStorage.setItem("watchlist", JSON.stringify(this.watchList))
  }
  //Delete From Watchlist
  DeleteFromWatchlist(movie: Movie | any){
    if("watchlist" in localStorage){
      this.watchList = JSON.parse(localStorage.getItem("watchlist")!)
      console.log(this.watchList)
      this.watchList = this.watchList.filter(item => item.popularity !== movie.popularity)
      console.log(this.watchList)
      this.remove(this.watchList)
    }
  }
  remove(watchlist: any){
    localStorage.setItem("watchlist",JSON.stringify(watchlist))
  }
}
