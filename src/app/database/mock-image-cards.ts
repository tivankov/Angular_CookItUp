import { ImageCard } from './image-card';


const CARDS: ImageCard[] = [
  { src: 'https://www.croatiaweek.com/wp-content/uploads/2018/08/25542469_2011134272496172_7497231929499814449_o.jpg?x37918', title: 'čevapi', category: 'lunch', id: "1" },
  { src: 'https://podravkaiovariations.blob.core.windows.net/f528dc30-6406-11eb-80cc-0242ac12002f/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp', title: 'Spaghetti Carbonara', category: 'diner', id: "2" },
  { src: 'https://www.allrecipes.com/thmb/xvlRRhK5ldXuGcXad8XDM5tTAfE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/223382_chicken-stir-fry_Rita-1x1-1-b6b835ccfc714bb6a8391a7c47a06a84.jpg', title: 'Chicken Stir-Fry', category: 'lunch', id: "3" }
];


export function getRecipes(categoryTag? : string) {
  if (categoryTag) {
    var matchingCategory : ImageCard[] = [];
    CARDS.forEach(recipe => {
      if (recipe.category.toUpperCase() === categoryTag.toUpperCase()) {
        matchingCategory.push(recipe);
      }
    });
    return matchingCategory;
  }
  return CARDS;
}