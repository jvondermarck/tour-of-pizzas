import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PizzaModule} from "./pizzas/pizza.module";
import {FormsModule} from "@angular/forms";
import {PublicModule} from "./public/public.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules :
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    // Features modules :
    PizzaModule,

    // Public module :
    PublicModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
