import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OjasMainComponent } from './ojas-main/ojas-main.component';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import { DatabaseService } from './database.service';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OjasMainComponent,
    DashboardComponent,
    EmployeesComponent,
    TrainersComponent,
    ViewDataComponent,
    AddEmployeeComponent,
    DisplayDataComponent,
    UpdateDataComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MessagesModule,
    BrowserAnimationsModule,
    RippleModule,
    InputTextModule,
    MessageModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
