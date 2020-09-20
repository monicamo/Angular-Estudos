import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Classic Beef Stroganoff',
      'With its tender chunks of beef coated in a luscious creamy sauce',
      'https://images-gmi-pmc.edge-generalmills.com/e8b4f392-d17e-45dc-b142-1effc9a52db5.jpg'),
    new Recipe('Classic Chicken Parmesan',
        'A Melted cheese, crispy chicken and tomato sauce',
        'https://images-gmi-pmc.edge-generalmills.com/100d0ed3-cceb-469f-a9a6-8313552d0024.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
