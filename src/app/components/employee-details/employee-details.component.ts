import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeDetailsService } from 'src/app/services/common/employee-details.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: string;
  employee: Employee;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeeService:EmployeeDetailsService) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.employee =  {id:'',name:'',password:'',salary:null,role:'',details:{ email:'',country:'',state:'',city:'',street:'',zipcode:'',mobileNo:null}} ;
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data;
    });
    
  }

  onSubmit()
  {
   this.router.navigate(['/dashboard/getemployee'])
  }
  
}
