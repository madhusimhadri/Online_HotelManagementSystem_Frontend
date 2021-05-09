import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { LocalStoreService } from './local-store/local-store.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private localStore: LocalStoreService) {}

 
	login(data): Observable<any> {
		return this.http.post(`${baseUrl}authenticate`, data);
	}

	loggedIn() {
		return this.localStore.logedIn();
	}
  getToken(){
    return this.localStore.getItem('token');
  }

  logOut(){
    this.localStore.logoutAndEraseData();
  }
}
