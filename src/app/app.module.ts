import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { MoviesModule } from './movies/movies.module';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from "@angular/cdk/overlay";
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    OverlayModule,
    SharedModule,
    NgxPaginationModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
