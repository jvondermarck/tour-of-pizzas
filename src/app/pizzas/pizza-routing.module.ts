import {RouterModule, Routes} from "@angular/router";
import {PizzaComponent} from "./pizza.component";
import {NgModule} from "@angular/core";
import {PizzaEditComponent} from "./feature/pizza-edit/pizza-edit.component";

const routes: Routes = [
  {
    path: '',
    component: PizzaComponent
  },
  {
    path: 'edit/:id',
    component: PizzaEditComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
