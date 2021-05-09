import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from 'src/app/models/Guest';
import { PaymentData } from 'src/app/models/PaymentData';

@Injectable({
  providedIn: 'root'
})
export class GuestDetailsService {

  private url= `http://localhost:8084/receptionist/getAllGuests`;
 
  constructor(private httpclient: HttpClient) { }

  getGuestList(): Observable<Guest[]>{
    return this.httpclient.get<Guest[]>(`${this.url}`);
  }

  private url2=`http://localhost:8084/receptionist/addGuest`;

  addGuest(guest: Guest): Observable<any>
  {
    return this.httpclient.post(`${this.url2}`,guest);
  }

  private url3= `http://localhost:8084/receptionist/updateGuest`;
  updateGuest(id:string,guest:Guest): Observable<Object>
  {
    return this.httpclient.put(`${this.url3}`,guest);
  }

  private url4= `http://localhost:8084/receptionist/getGuestById`;
  getGuestById(id: string): Observable<Guest>
  {
    return this.httpclient.get<Guest>(`${this.url4}/${id}`);
  }

  private url5=`http://localhost:8084/receptionist/deleteGuest`
  deleteGuest(id:string):Observable<Object>
  {
    return this.httpclient.delete(`${this.url5}/${id}`);
  }
  
  private url6=`http://localhost:8084/receptionist/getAllInvoices`;
  getAllInvoices(): Observable<PaymentData[]>
  {
    return this.httpclient.get<PaymentData[]>(`${this.url6}`);
  }

  private url7 = `http://localhost:8084/receptionist/getInvoiceById`;
  getInvoiceById(id:string): Observable<PaymentData>
  {
    return this.httpclient.get<PaymentData>(`${this.url7}/${id}`);
  }

  private url8 = `http://localhost:8084/receptionist/updateInvoiceStatus`;
  updateStatus(id:string,payment:PaymentData):Observable<Object>
  {
    return this.httpclient.put(`${this.url8}`,payment);
  }

  private url9=`http://localhost:8084/receptionist/deleteInvoiceById`;
  deleteInvoice(id:string):Observable<Object>
  {
    return this.httpclient.delete(`${this.url9}/${id}`);
  }

}
