import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentData } from 'src/app/models/PaymentData';
import { GuestDetailsService } from 'src/app/services/common/guest-details.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {

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


  //pdf download
 

  download()
  {
    var element = document.getElementById('pdf')
    html2canvas(element).then((canvas)=>
    {
      console.log(canvas);
      var imgData = canvas.toDataURL('image/png')
      var doc = new jspdf()

      var imgHeight= canvas.height * 1000/ canvas.width;

      doc.addImage(imgData,0,0,1000,imgHeight)
      doc.save("image.pdf")
      
    })
  }



}
