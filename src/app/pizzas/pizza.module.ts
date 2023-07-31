import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PizzaComponent} from "./pizza.component";
import {PizzaRoutingModule} from "./pizza-routing.module";
import { PizzaListComponent } from './feature/pizza-list/pizza-list.component';
import { PizzaEditComponent } from './feature/pizza-edit/pizza-edit.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PizzaComponent,
    PizzaListComponent,
    PizzaEditComponent
  ],
  imports: [
    CommonModule,
    PizzaRoutingModule,
    FormsModule
  ]
})
export class PizzaModule { }
