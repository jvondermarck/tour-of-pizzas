import {RouterModule, Routes} from "@angular/router";
import {PizzaComponent} from "./pizza.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: PizzaComponent
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
