import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent {
  watchList: Movie | any;
  loading= false;
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
}
