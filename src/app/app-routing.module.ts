import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OjasMainComponent } from './ojas-main/ojas-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { TrainersComponent } from './trainers/trainers.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DisplayDataComponent } from './display-data/display-data.component'; 
import { UpdateDataComponent } from './update-data/update-data.component';
import { ViewDataComponent } from './view-data/view-data.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: OjasMainComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'employee', component: EmployeesComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'addemp', component: AddEmployeeComponent },
  { path: 'disemp/:id', component: DisplayDataComponent },
  { path: 'upemp/:id', component: UpdateDataComponent },
  { path: 'viewemp', component: ViewDataComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
