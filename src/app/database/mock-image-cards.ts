import { ImageCard } from './image-card';


const CARDS: ImageCard[] = [
  { src: 'https://www.croatiaweek.com/wp-content/uploads/2018/08/25542469_2011134272496172_7497231929499814449_o.jpg?x37918', title: 'čevapi', category: 'lunch', id: "1" },
  { src: 'https://podravkaiovariations.blob.core.windows.net/f528dc30-6406-11eb-80cc-0242ac12002f/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp', title: 'Spaghetti Carbonara', category: 'dinner', id: "2" },
  { src: 'https://www.allrecipes.com/thmb/xvlRRhK5ldXuGcXad8XDM5tTAfE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/223382_chicken-stir-fry_Rita-1x1-1-b6b835ccfc714bb6a8391a7c47a06a84.jpg', title: 'Chicken Stir-Fry', category: 'lunch', id: "3" },
  { src: 'https://www.healthyseasonalrecipes.com/wp-content/uploads/2021/08/lentil-soup-sq-029.jpg', title: 'Vegan Lentil and Vegetable Soup', category: 'vegan', id: "4" },
  { src: 'https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-blog480.jpg', title: 'Chocolate Chip Cookies', category: 'dessert', id: "5" },
  { src: 'https://shop.chudleighs.com/cdn/shop/products/MoltenChocolateLavaCake_086.jpg?v=1616096917', title: 'Chocolate Lava Cakes', category: 'dessert', id: "5" }
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