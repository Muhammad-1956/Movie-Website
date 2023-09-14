import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent {
  watchList: Movie | any;
  loading= false;
  book: any;
  constructor(private title: Title){
    this.title.setTitle('Watchlist')
    this.loading= true
  }
  ngOnInit(){
    if("watchlist" in localStorage){
      this.watchList = JSON.parse(localStorage.getItem("watchlist")!)
      this.watchList = this.modifyData(this.watchList)
      this.loading = false
    }else{
      this.loading= false
    }
  }
  //Modify Data
  modifyData(movies: Movie): Movie{
    if(movies.results){
      movies.results.forEach(element => {
        element.backdrop_path = 'https://image.tmdb.org/t/p/original'+ element.backdrop_path+'?api_key=03db5765922ab23b2c2984b877013580'
      });
    }
    return movies
  }

//Delete From Watchlist
approval(){
}
deleteFromLocalStorage(movie: Movie | any){
  if("watchlist" in localStorage){
    this.watchList = JSON.parse(localStorage.getItem("watchlist")!)
    console.log(this.watchList)
    this.watchList.find((custom_item:any) => custom_item.original_title == movie.original_title) ? true : this.deleteFromLocalStorage(movie);
    this.watchList = this.watchList.filter((item: any) => item.popularity !== movie.popularity)
    console.log(this.watchList)
    this.updateLocalStorage(this.watchList)
  }
}
updateLocalStorage(watchlist: any){
  localStorage.setItem("watchlist",JSON.stringify(watchlist))
}
}
