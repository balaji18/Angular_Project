import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService,private tostr: ToastrService) { }

  ngOnInit() {
    this.employeeService.getData();
    this.resetForm();

  }


  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key == null)
      this.employeeService.insertEmployee(employeeForm.value);
    else
    this.employeeService.updateEmployee(employeeForm.value);
    this.resetForm(employeeForm);
    //this.toastMessage();
    this.tostr.success('Submitted Succcessfully', ' Register');

  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null)
      employeeForm.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0,
    }
  }

  // toastMessage(){
  //   var x = document.getElementById("snackbar")
  //   x.className = "show";
  //   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  // }

}
