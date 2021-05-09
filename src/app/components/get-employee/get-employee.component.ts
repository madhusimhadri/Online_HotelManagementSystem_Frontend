import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeeDetailsService } from 'src/app/services/common/employee-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { HttpHeaders } from '@angular/common/http';
import { LocalStoreService } from 'src/app/services/local-store/local-store.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {

  public userRole = 'not yet fetched';
	public user;
  employee: Employee =  {id:'',name:'',password:'',salary:null,role:'',details:{ email:'',country:'',state:'',city:'',street:'',zipcode:'',mobileNo:null}} ;
  employees: Employee[];
  constructor(private employeeService: EmployeeDetailsService,
    private _router: Router,
		private _route: ActivatedRoute,
    private userSession: LocalStoreService,
    private _auth: LoginService ) { }

  ngOnInit(): void {
    if (this._auth.loggedIn) {
			this.user = this.userSession.getItem('employee');
			console.log(this.user);
			this.userRole = this.user.role;
		}
    this.getEmployees();
  }

  private getEmployees()
  {
    /*  const headerDict = {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Authorization':`Bearer ${this._auth.getToken()}`
		  }

      const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(headerDict), 
        };*/

    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees = data;
    });
  }

  updateEmployee(id: string)
  {
    this._router.navigate(['updateemployee',id]);
  }

  deleteEmployee(id: string)
  {
    this.employeeService.deleteEmployee(id).subscribe(data=>
      {
        console.log(data);
        
        this.getEmployees();
      });
  }

  employeeDetails(id: string)
  {
    this._router.navigate(['employeedetails',id]);
  }


  loggedIn = false;
  logOut() {
		console.log('Logout called');

		this._auth.logOut();
		this.loggedIn = false;
		this._router.navigateByUrl('/login');
	}



}
