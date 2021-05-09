import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentData } from 'src/app/models/PaymentData';
import { error } from 'protractor';
import { GuestDetailsService } from 'src/app/services/common/guest-details.service';

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.css']
})
export class UpdateInvoiceComponent implements OnInit {

  payment:PaymentData= {id:'',invoice:{companyName:'',guestId:'',guestName:'',guestMobile:'',numberOfPeople:null,bookedRoomType:'',roomPricePerNight:null,
  nights:null,bookingDate:null,tax:null,totalBill:null,issuedBy:''},status:''};
  

  id: string;
  
  constructor(private guestService: GuestDetailsService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.id= this.route.snapshot.params['id']
      this.guestService.getInvoiceById(this.id).subscribe(data=>{
        this.payment = data;
      },
      error =>console.log(error));
    }
  
    onSubmit()
    {
      this.guestService.updateStatus(this.id,this.payment).subscribe(data=>
        {
          this.goToEmployeeList();
        },
        error => console.log(error));
    }
  
    goToEmployeeList()
    {
      this.router.navigate(['/dashboard/getinvoice'])
    }

}
