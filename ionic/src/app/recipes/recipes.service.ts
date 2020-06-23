import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [{
    id: 'r1',
    title: 'Dabeli',
    imageUrl: 'https://i1.wp.com/cookingfromheart.com/wp-content/uploads/2017/06/Kutchi-Dabeli-8.jpg?resize=1024%2C680&ssl=1',
    ingredients: ['Bread', 'Sev' , 'Dabeli Masala']
  },
  {
    id: 'r2',
    title: 'Spaghetti',
    imageUrl: 'https://www.thechunkychef.com/wp-content/uploads/2019/09/One-Pot-Spaghetti-feat.jpg',
    ingredients: ['Spaghetti', 'Salad', 'Cheese']
  },
  {
    id: 'r3',
    title: 'Schnitzel',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
    ingredients: ['French Fries', 'Pork Meat', 'Salad']
  },
  {
    id: 'r4',
    title: 'NonVeg Spaghetti',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
  }
];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }
  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
