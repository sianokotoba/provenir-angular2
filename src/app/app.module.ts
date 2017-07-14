import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MdlSelectModule } from '@angular2-mdl-ext/select';

import { AppComponent } from './app.component';
import { CoffeeFormComponent } from './coffee-form.component';




@NgModule({
  declarations: [
    AppComponent,
    CoffeeFormComponent
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
