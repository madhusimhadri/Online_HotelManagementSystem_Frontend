import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentData } from 'src/app/models/PaymentData';
import { GuestDetailsService } from 'src/app/services/common/guest-details.service';
import { LocalStoreService } from 'src/app/services/local-store/local-store.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  
  id: string;
  payment: PaymentData;
  
  constructor(private route: ActivatedRoute,
    private router:Router,
    private guestService:GuestDetailsService) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
   this.payment= {id:'',invoice:{companyName:'',guestId:'',guestName:'',guestMobile:'',numberOfPeople:null,bookedRoomType:'',roomPricePerNight:null,
  nights:null,bookingDate:null,tax:null,totalBill:null,issuedBy:''},status:''};
  
    this.guestService.getInvoiceById(this.id).subscribe(data=>{
      this.payment = data;
    });
    
  }

  onSubmit()
  {
   this.router.navigate(['/dashboard/getinvoice'])
  }

}

