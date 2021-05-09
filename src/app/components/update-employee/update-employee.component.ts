import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { Employee } from 'src/app/models/Employee';
import { EmployeeDetailsService } from 'src/app/services/common/employee-details.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee =  {id:'',name:'',password:'',salary:null,role:'',details:{ email:'',country:'',state:'',city:'',street:'',zipcode:'',mobileNo:null}} ;
  id: string;

  //employee : Employee = new Employee();

  constructor(private employeeService: EmployeeDetailsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data;
    },
    error =>console.log(error));
  }

  onSubmit()
  {
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>
      {
        this.goToEmployeeList();
      },
      error => console.log(error));
  }

  goToEmployeeList()
  {
    this.router.navigate(['/dashboard'])
  }

}
