import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/beetroot_halloumi_salad-e828cae.jpg?quality=90&resize=500%2C454'),
    new Recipe('A Test Recipe', 'A test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/beetroot_halloumi_salad-e828cae.jpg?quality=90&resize=500%2C454')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
