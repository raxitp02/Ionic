import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
loaderRecipe: Recipe;
  constructor( private activatedRoute: ActivatedRoute,
               private recipeService: RecipesService,
               private router: Router,
               private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loaderRecipe = this.recipeService.getRecipe(recipeId);
    });
  }

  async onDeleteRecipe(){
    const alert = this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons:[
        {
        text: 'Cancel',
        role:'cancel'
      }, {
        text: 'Delete',
        handler: () => {
          this.recipeService.deleteRecipe(this.loaderRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }
    ]
    });
    (await alert).present();
  }

}
