import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageCard } from '../database/image-card';
import { getRecipes } from '../database/mock-image-cards';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {
  title!: string;
  human_title!: string;
  cards : ImageCard[] = getRecipes();
  imgurl!: string;
  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.title = params['title'];
        this.cards.forEach((card) => {
          if(card.id == params['title']){
            this.human_title = card.title
            this.imgurl = card.src}
            console.log(this.human_title)
        });
      }
    );
  }
}
