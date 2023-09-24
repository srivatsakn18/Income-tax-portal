import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItrFormComponent } from './itr-form/itr-form.component';
import { AllFormsComponent } from './all-forms/all-forms.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'itr-form', component: ItrFormComponent},
  {path: 'all-itr-forms', component: AllFormsComponent},
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
