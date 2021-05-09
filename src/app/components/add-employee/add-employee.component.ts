import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { Employee } from 'src/app/models/Employee';
import { EmployeeDetailsService } from 'src/app/services/common/employee-details.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee =  {id:'',name:'',password:'',salary:null,role:'',details:{ email:'',country:'',state:'',city:'',street:'',zipcode:'',mobileNo:null}} ;
  
  constructor(private employeeService: EmployeeDetailsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee()
  {
    this.employeeService.addEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList()
  {
    this.router.navigate(['/dashboard'])
  }

  onSubmit()
  {
    console.log(this.employee);
    this.saveEmployee();
  }
}
