import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MdlSelectModule } from '@angular2-mdl-ext/select';
import { MdlExpansionPanelModule } from '@angular2-mdl-ext/expansion-panel';
import { MaterialModule } from '@angular/material';
// import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CoffeeFormComponent } from './coffee-form.component';
import { CoffeeTableComponent } from './coffee-table.component';
import { CoffeeDashComponent } from './coffee-dash.component';
import { CoffeeService } from './coffee.service';


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
    HttpClientModule,
    // HttpModule,
    FormsModule,
    ReactiveFormsModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    MdlSelectModule,
    MdlExpansionPanelModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [ CoffeeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
