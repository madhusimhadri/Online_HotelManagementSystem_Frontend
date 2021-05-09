import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { Guest } from 'src/app/models/Guest';
import { GuestDetailsService } from 'src/app/services/common/guest-details.service';

@Component({
  selector: 'app-update-guest',
  templateUrl: './update-guest.component.html',
  styleUrls: ['./update-guest.component.css']
})
export class UpdateGuestComponent implements OnInit {

  guest: Guest = {id:'',name:'',gender:'',age:null,mobileNo:'',memberDetails:[{name:'',age:null,gender:''}],address:{country:'',state:'',city:'',street:'',zipcode:''},currentStatus:'',roomDetails:{roomId:'',noOfNights:null }} ;
  
  id: string;
  
  constructor(private guestService: GuestDetailsService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.id= this.route.snapshot.params['id']
      this.guestService.getGuestById(this.id).subscribe(data=>{
        this.guest = data;
      },
      error =>console.log(error));
    }
  
    onSubmit()
    {
      this.guestService.updateGuest(this.id,this.guest).subscribe(data=>
        {
          this.goToEmployeeList();
        },
        error => console.log(error));
    }
  
    goToEmployeeList()
    {
      this.router.navigate(['/dashboard/getguest'])
    }

}
