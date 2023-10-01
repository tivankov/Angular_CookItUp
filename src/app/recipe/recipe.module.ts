import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeComponent } from './recipe.component';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    RecipeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class RecipeModule { }
