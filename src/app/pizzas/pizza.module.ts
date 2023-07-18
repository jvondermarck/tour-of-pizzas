import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PizzaComponent} from "./pizza.component";
import {PizzaRoutingModule} from "./pizza-routing.module";

@NgModule({
  declarations: [
    PizzaComponent
  ],
  imports: [
    CommonModule,
    PizzaRoutingModule
  ]
})
export class PizzaModule { }
