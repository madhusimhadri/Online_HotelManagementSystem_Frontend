import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { receptionistUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetMyDetailsService {

  private _url = `${receptionistUrl}/getEmployeeById/E8`
  constructor(private _http: HttpClient) { }

  getMyDetails(){
    return this._http.get(this._url);
  }
}
