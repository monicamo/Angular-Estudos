import { ThrowStmt } from '@angular/compiler';
import { timeStamp } from 'console';

export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}
