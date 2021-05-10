import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingData } from 'src/app/models/BookingData';
import { Guest } from 'src/app/models/Guest';
import { Room } from 'src/app/models/Room';
import { Show } from 'src/app/models/Show';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class RoomDetailsService {

  constructor(private httpclient: HttpClient, private loginService:LoginService) { }
  private url= `http://localhost:8084/manager/addRoom`;

  
  addRoom(room: Room): Observable<any>
  {
    return this.httpclient.post(`${this.url}`,room);
  }

  

	headerDict = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'Access-Control-Allow-Headers': 'Content-Type',
		Authorization: `Bearer ${this.loginService.getToken()}`
	};
	//`Bearer ${this.auth.getToken()}`
	requestOptions = {
		headers: new HttpHeaders(this.headerDict)
	};




	private url2 = `http://localhost:8084/receptionist/getAllRoomsByStatus/${status}`;  
	getRoomByStatus(status: string): Observable<Room[]> {
		
		return this.httpclient.get<Room[]>(`${this.url2}`, this.requestOptions);
	}

	private url3 = `http://localhost:8084/receptionist/getAllRooms`;
	getRoomList(): Observable<Room[]>{
		return this.httpclient.get<Room[]>(`${this.url3}`);
	  }

	  private url4= `http://localhost:8084/receptionist/getRoom`;
	  getRoomById(id: string): Observable<Room>
	  {
		return this.httpclient.get<Room>(`${this.url4}/${id}`);
	  }
	
	  private url5= `http://localhost:8084/manager/updateRoom`;
	  updateRoom(id:string,room:Room): Observable<Object>
	  {
		return this.httpclient.put(`${this.url5}`,room);
	  }

	  private url6=`http://localhost:8084/manager/deleteRoom`;
	  deleteRoom(id:string):Observable<Object>
	  {
		return this.httpclient.delete(`${this.url6}/${id}`);
	  }

	  private url7 = `http://localhost:8084/receptionist/makeReservation`;
	  makeReservation(bookingData: BookingData): Observable<Show>
	  {
		  return this.httpclient.put<Show>(`${this.url7}`,bookingData,this.requestOptions);
	  }

	  //new
	  getRoomByType(type: string): Observable<Room[]> {
		let _url = `http://localhost:8084/receptionist/getAllRoomsByType/${type}`;
		return this.httpclient.get<Room[]>(_url, this.requestOptions);
	}
  
}
