import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentData } from 'src/app/models/PaymentData';
import { GuestDetailsService } from 'src/app/services/common/guest-details.service';
import { LocalStoreService } from 'src/app/services/local-store/local-store.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-getinvoice',
  templateUrl: './getinvoice.component.html',
  styleUrls: ['./getinvoice.component.css']
})
export class GetinvoiceComponent implements OnInit {

  public userRole = 'not yet fetched';
	public user;

  payment:PaymentData= {id:'',invoice:{companyName:'',guestId:'',guestName:'',guestMobile:'',numberOfPeople:null,bookedRoomType:'',roomPricePerNight:null,
  nights:null,bookingDate:null,tax:null,totalBill:null,issuedBy:''},status:''};
  
  payments: PaymentData[];

  
  constructor(private guestService: GuestDetailsService,
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
    this.getInvoice();
  }

  private getInvoice()
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

    this.guestService.getAllInvoices().subscribe(data=>{
      this.payments = data;
    });
  }

  updateInvoice(id: string)
  {
    this._router.navigate(['updateinvoice',id]);
  }

  deleteInvoice(id: string)
  {
    this.guestService.deleteInvoice(id).subscribe(data=>
      {
        console.log(data);
        
        this.getInvoice();
      });
  }

  viewInvoice(id: string)
  {
    this._router.navigate(['invoicedetails',id]);
  }

  Payment()
  {
    this._router.navigate(['payment']);
  }
}
