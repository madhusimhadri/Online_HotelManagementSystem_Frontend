import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'src/app/models/Guest';
import { GuestDetailsService } from 'src/app/services/common/guest-details.service';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {

  guest: Guest = {id:'',name:'',gender:'',age:null,mobileNo:'',memberDetails:[{name:'',age:null,gender:''}],address:{country:'',state:'',city:'',street:'',zipcode:''},currentStatus:'',roomDetails:{roomId:'',noOfNights:null }} ;
  
  constructor(private guestService: GuestDetailsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveGuest()
  {
    this.guestService.addGuest(this.guest).subscribe(data=>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList()
  {
    this.router.navigate(['/dashboard/getguest'])
  }

  onSubmit()
  {
    console.log(this.guest);
    this.saveGuest();
  }

}
