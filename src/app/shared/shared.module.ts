import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { SelectionComponent } from './components/selection/selection.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    SelectionComponent,
    SearchComponent,
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    NavbarComponent,
    SliderComponent,
    SelectionComponent,
    SearchComponent,
    SpinnerComponent,
    FooterComponent
  ]
})
export class SharedModule { }
