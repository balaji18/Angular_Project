import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { environment } from '../environments/environment';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,BrowserAnimationsModule,CommonModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
