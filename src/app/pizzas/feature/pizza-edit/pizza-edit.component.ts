import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from "../../shared/model/pizza";
import {MOCK_PIZZAS} from "../../shared/mock/pizza.mock";

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.scss']
})
export class PizzaEditComponent implements OnInit {

  @Input () public pizzaId: number = 0;

  private pizzasArray: Pizza[] = MOCK_PIZZAS;
  public pizza: Pizza | undefined = {} as Pizza;

  ngOnInit(): void {
    this.pizza = this.getPizzaFromId(this.pizzaId) ? this.getPizzaFromId(1) : {} as Pizza;
  }

  private getPizzaIdFromUrl(): number {
    const url = window.location.pathname;
    const urlArray = url.split('/');
    const pizzaId = urlArray[urlArray.length - 1];
    return Number(pizzaId);
  }

  public getPizzaFromId(id: number): Pizza | undefined {
    return this.pizzasArray.find(pizza => pizza.id === id);
  }

}
