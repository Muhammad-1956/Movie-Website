import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent {

  loading= false;
  tv_shows: any;
  modal_up: any;

  constructor(private db: MovieService, private title: Title){
    this.title.setTitle('Tv Shows')
  }

  ngOnInit(){
    this.getTvShows()
  }
  //Get TV Shows
  getTvShows(){
    this.loading = true;
    this.db.getTv().subscribe((res:any)=>{
      this.loading = false
      this.tv_shows = this.modifyData(res)
    }, err =>{
      this.loading= false;
      alert(err.message)
    })
  }
    //Modify Data
    modifyData(tv: any){
      if(tv.results){
        tv.results.forEach((element: any) => {
          element.poster_path = 'https://image.tmdb.org/t/p/original'+element.poster_path+'?api_key=03db5765922ab23b2c2984b877013580'
        });
      }
      return tv
    }
    clicked(i: number){
      this.modal_up =this.tv_shows.results[i];
    }
}
