import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from 'src/app/models/Guest';
import { GuestDetailsService } from 'src/app/services/common/guest-details.service';
import { LocalStoreService } from 'src/app/services/local-store/local-store.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  public userRole = 'not yet fetched';
	public user;

  guest: Guest = {id:'',name:'',gender:'',age:null,mobileNo:'',memberDetails:[{name:'',age:null,gender:''}],address:{country:'',state:'',city:'',street:'',zipcode:''},currentStatus:'',roomDetails:{roomId:'',noOfNights:null }} ;
  guests: Guest[];
  constructor(private guestService: GuestDetailsService,
    private _router: Router,
		private _route: ActivatedRoute,
    private userSession: LocalStoreService,
    private _auth: LoginService) { }

    ngOnInit(): void {
      if (this._auth.loggedIn) {
        this.user = this.userSession.getItem('employee');
        console.log(this.user);
        this.userRole = this.user.role;
      }
      this.getGuests();
    }
  
    private getGuests()
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
  
      this.guestService.getGuestList().subscribe(data=>{
        this.guests = data;
      });
    }

  updateGuest(id: string)
  {
    this._router.navigate(['updateguest',id]);
  }

  deleteGuest(id: string)
  {
    this.guestService.deleteGuest(id).subscribe(data=>
      {
        console.log(data);
        
        this.getGuests();
      });
  }

  guestDetails(id: string)
  {
    this._router.navigate(['guestdetails',id]);
  }

}
