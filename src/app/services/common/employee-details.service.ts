import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  private url= `http://localhost:8084/manager/getAllEmployee`;
 
  constructor(private httpclient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(`${this.url}`);
  }

  private url2=`http://localhost:8084/manager/addEmployee`;

  addEmployee(employee: Employee): Observable<any>
  {
    return this.httpclient.post(`${this.url2}`,employee);
  }

  private url3= `http://localhost:8084/manager/getEmployeeById`;
  getEmployeeById(id: string): Observable<Employee>
  {
    return this.httpclient.get<Employee>(`${this.url3}/${id}`);
  }

  private url4= `http://localhost:8084/manager/updateEmployee`;
  updateEmployee(id:string,employee:Employee): Observable<Object>
  {
    return this.httpclient.put(`${this.url4}`,employee);
  }

  private url5=`http://localhost:8084/manager/deleteEmployee`
  deleteEmployee(id:string):Observable<Object>
  {
    return this.httpclient.delete(`${this.url5}/${id}`);
  }


}
