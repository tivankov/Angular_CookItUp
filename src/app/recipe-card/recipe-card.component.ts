import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageCard } from '../database/image-card';
import { getRecipes } from '../database/mock-image-cards';

@Component({
  selector: 'recipe-card-container',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})

export class RecipeCardComponent implements OnInit {
  cards : ImageCard[] = [];
  category!: string;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.category = params['category'];
      }
    );
    if (this.category) {
      this.cards = getRecipes(this.category);
    } else {
      this.cards = getRecipes();
    }
  }

  getLink(value : string) {
    value = value.replaceAll(' ', '-');
    return '/recipe?title=' + value;
  }
}
