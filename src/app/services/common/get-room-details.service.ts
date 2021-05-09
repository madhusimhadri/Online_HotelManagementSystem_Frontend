import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/Room';
import { LoginService } from '../login.service';
import { receptionistUrl } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GetRoomDetailsService {

  constructor(private _auth: LoginService, private _http: HttpClient) {}

	headerDict = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'Access-Control-Allow-Headers': 'Content-Type',
		Authorization: `Bearer ${this._auth.getToken()}`
	};
	//`Bearer ${this.auth.getToken()}`
	requestOptions = {
		headers: new HttpHeaders(this.headerDict)
	};
	/**
   * /////////////////// THUMB RULE
	getUserDetails(){
		const headerDict = {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Authorization':`Bearer ${this._auth.getToken()}`
		  }
		  //`Bearer ${this.auth.getToken()}`
		  const requestOptions = {                                                                                                                                                                                 
			headers: new HttpHeaders(headerDict), 
		  };
		  
		this._http.get(this._url,requestOptions).subscribe(res=>{
			console.log(res);
			this.testingUser = res;
		});
		
	}
   */
	/////Api Overview
	/**
   * get room by id
   * get all rooms
   * get rooms by status
   * 
   */
	//get all rooms

	

	getRoomByStatus(status: string): Observable<Room[]> {
		let _url = `${receptionistUrl}/getAllRoomsByStatus/${status}`;
		return this._http.get<Room[]>(_url, this.requestOptions);
	}
}
