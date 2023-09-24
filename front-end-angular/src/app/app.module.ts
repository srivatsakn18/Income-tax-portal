import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ItrFormComponent } from './itr-form/itr-form.component';
import { FormsModule } from '@angular/forms';
import { AllFormsComponent } from './all-forms/all-forms.component';
import { FillFormComponent } from './itr-form/fill-form/fill-form.component';
import { CalculatedReturnComponent } from './itr-form/calculated-return/calculated-return.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationBarComponent,
    ItrFormComponent,
    AllFormsComponent,
    FillFormComponent,
    CalculatedReturnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
