import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { ActorComponent } from './components/actor/actor.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AllMoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    WatchlistComponent,
    ActorComponent,
    TvShowComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    SharedModule,
  ],
  exports:[
    AllMoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    WatchlistComponent]
})
export class MoviesModule { }
