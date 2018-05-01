import { Component, OnInit,ViewChild } from '@angular/core';
import { EmployeeService } from './shared/employee.service'
import { ModalDirective } from 'ngx-bootstrap';
import {FormGroup,FormControl} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers :[EmployeeService]

})
export class EmployeesComponent implements OnInit {
  registerForm : FormGroup;
  loginForm:FormGroup;
  private loggedIn: boolean;
  collection=[];
  value:any;
  loginValue:any;

  @ViewChild('registerForms') public registerForms:ModalDirective;
  @ViewChild('loginForms') public loginForms:ModalDirective;
  @ViewChild('paginationModals') public paginationModals:ModalDirective;

  constructor(private employeeService : EmployeeService,private tostr: ToastrService) { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      studentName : new FormControl(),
       email: new FormControl(),
      password:new FormControl(),
      phoneNo : new FormControl(),
    });
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password:new FormControl(),
    });
  }

  sampleReqister(){
    this.registerForms.show();
  }

  submitForm(registerForm: any): void {
    console.log("Data added:"+JSON.stringify(registerForm))
    this.value = registerForm
    this.tostr.success('Registartion Succcessfully', ' Register');
  }

  reset(){
    this.value ='';
  }

  keyPress(event){
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  Login(){
    this.loginForms.show();
    this.loginForm.reset();

  }

  Form(loginForm: any): void {
    console.log("Data added:"+JSON.stringify(loginForm));
    this.loginValue = loginForm;
    this.tostr.success('Login Succcessfully', ' Login');
  }

  reset1(){
    this.loginValue ='';
  }

  paginationModal(){
    this.paginationModals.show();
    for(let i=1;i<=100;i++){
      this.collection.push(`Angular ${i}.0`);
    }
  }
}

