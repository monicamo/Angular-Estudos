import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/04/1453913826-delish-creamy-spaghetti-3.jpg?crop=1.0xw:1xh;center,top&resize=480:*')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
