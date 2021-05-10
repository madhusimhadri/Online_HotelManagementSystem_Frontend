import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomType } from 'src/app/models/RoomType';
import { Show } from 'src/app/models/Show';
import { LocalStoreService } from '../local-store/local-store.service';
import { LoginService } from '../login.service';
import { GetMyDetailsService } from './get-my-details.service';
import jwt_decode from 'jwt-decode';
import { receptionistUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomGuestOperationsService {

  constructor(
		private _auth:LoginService,
		private _http: HttpClient,
		private localStore: LocalStoreService,
		private myDetails: GetMyDetailsService
	) {}

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

	//fetch all roomtypes
	getAllTypes(): Observable<RoomType> {
		let _url = `${receptionistUrl}/getAllRoomTypes`;
		return this._http.get<RoomType>(_url, this.requestOptions);
	}

	//issue bill
	issueBill(data): Observable<Show> {
		
		let _url = `${receptionistUrl}/issueBill`;
		console.log(_url);
		return this._http.post<Show>(_url,data, this.requestOptions);
	}
}
