import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [new Recipe('A Test Recipe',
    'Simple Test', 'https://upload.wikimedia.org/wikipedia/commons/' +
    'thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg') ,
    new Recipe('Another Test Recipe', 'Simple Test',
      'https://upload.wikimedia.org/wikipedia/commons/' +
      'thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
