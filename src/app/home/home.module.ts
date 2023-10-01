import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    RecipeCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    HomeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }
