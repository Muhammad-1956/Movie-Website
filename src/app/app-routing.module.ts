import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './movies/components/all-movies/all-movies.component';
import { MovieComponent } from './movies/components/movie/movie.component';
import { MovieDetailsComponent } from './movies/components/movie-details/movie-details.component';
import { WatchlistComponent } from './movies/components/watchlist/watchlist.component';
import { ActorComponent } from './movies/components/actor/actor.component';
import { TvShowComponent } from './movies/components/tv-show/tv-show.component';
import { HomeComponent } from './movies/components/home/home.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'all-movies', component:AllMoviesComponent},
  {path: 'movie', component:MovieComponent},
  {path: 'movie-details/:id', component:MovieDetailsComponent},
  {path: 'watchlist', component:WatchlistComponent},
  {path: 'tv-shows', component:TvShowComponent},
  {path: 'actors', component:ActorComponent},
  {path: '**', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
