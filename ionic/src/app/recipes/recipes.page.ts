import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
recipes: Recipe[];
  constructor( private recipeService: RecipesService) { }

  ngOnInit() {}
  ionViewWillEnter() {
    console.log('IonViewWillEnter');
    this.recipes = this.recipeService.getAllRecipes();
  }
  ionViewDidEnter() {
    console.log('IonViewDidEnter');
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('ionViewdidLeave');
  }
  ngOnDestroy() {
    console.log('Destroy');
  }

}
