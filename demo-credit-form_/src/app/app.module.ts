import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdlModule } from '@angular-mdl/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditFormComponent } from './credit-form/credit-form.component';

import { CreditFormService } from './credit-form.service';

@NgModule({
  declarations: [
    AppComponent,
    CreditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdlModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CreditFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
