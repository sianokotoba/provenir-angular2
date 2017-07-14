import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MdlSelectModule } from '@angular2-mdl-ext/select';

import { AppComponent } from './app.component';
import { CoffeeFormComponent } from './coffee-form.component';
import { CoffeeTableComponent } from './coffee-table.component';
import { CoffeeDashComponent } from './coffee-dash.component';


@NgModule({
  declarations: [
    AppComponent,
    CoffeeFormComponent,
    CoffeeTableComponent,
    CoffeeDashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdlSelectModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
