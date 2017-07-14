import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { MdlSelectModule } from '@angular2-mdl-ext/select';
import { MdlExpansionPanelModule } from '@angular2-mdl-ext/expansion-panel';
import { MaterialModule } from '@angular/material';

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
    BrowserAnimationsModule,
    FormsModule,
    MdlSelectModule,
    MdlExpansionPanelModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
