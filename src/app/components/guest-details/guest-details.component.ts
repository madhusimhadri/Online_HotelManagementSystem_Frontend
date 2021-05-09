import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from 'src/app/models/Guest';
import { GuestDetailsService } from 'src/app/services/common/guest-details.service';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {

  id: string;
  guest: Guest;
  
  constructor(private route: ActivatedRoute,
    private router:Router,
    private guestService:GuestDetailsService) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.guest =  {id:'',name:'',gender:'',age:null,mobileNo:'',memberDetails:[{name:'',age:null,gender:''}],address:{country:'',state:'',city:'',street:'',zipcode:''},currentStatus:'',roomDetails:{roomId:'',noOfNights:null }} ;
  
    this.guestService.getGuestById(this.id).subscribe(data=>{
      this.guest = data;
    });
    
  }

  onSubmit()
  {
   this.router.navigate(['/dashboard/getguest'])
  }
  
}
