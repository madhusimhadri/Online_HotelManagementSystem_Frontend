import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/Employee';
import { receptionistUrl } from 'src/environments/environment';
import { LoginService } from '../login.service';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class GetMyDetailsService {

  headerDict = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'Access-Control-Allow-Headers': 'Content-Type',
		Authorization: `Bearer ${this.authService.getToken()}`
	};
	//`Bearer ${this.auth.getToken()}`
	requestOptions = {
		headers: new HttpHeaders(this.headerDict)
	};
  
  constructor(private _http: HttpClient, private authService: LoginService) { }

  getMyDetails(): Observable<Employee>{
    let decoded:any = jwt_decode(this.authService.getToken());
    let _url = `${receptionistUrl}/getEmployeeById/${decoded.sub}`
    console.log(_url);
    return this._http.get<Employee>(_url,this.requestOptions);
  }
}
