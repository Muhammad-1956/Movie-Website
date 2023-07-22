import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Actor } from '../../models/actor';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent {
  actors: any;
  loading = false
  constructor(private db: MovieService, private title: Title){
    this.title.setTitle('Actors')
    this.getActors();
  }
  //Get Actors
  getActors(){
    this.loading = true
    this.db.getActors().subscribe((res:any)=>{
      this.actors = this.ModifyData(res)
      console.log(this.actors.results)
      this.loading= false
    },err =>{
      this.loading= false
      alert(err.message)
    })
  }

  ModifyData(actors: Actor) {
    if (actors.results) {
      actors.results.forEach((actor: any) => {
        if (actor.profile_path == null) {
          actor.profile_path = 'https://image.tmdb.org/t/p/w500//dm6V24NjjvjMiCtbMkc8Y2WPm2e.jpg?api_key=03db5765922ab23b2c2984b877013580';
        } else {
          actor.profile_path = `https://image.tmdb.org/t/p/w500/${actor.profile_path}?api_key=03db5765922ab23b2c2984b877013580`;
        }
      });
    }
    return actors;
  }
}
