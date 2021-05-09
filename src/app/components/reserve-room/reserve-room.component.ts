import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingData } from 'src/app/models/BookingData';
import { Guest } from 'src/app/models/Guest';
import { Room } from 'src/app/models/Room';
import { Show } from 'src/app/models/Show';
import { GuestDetailsService } from 'src/app/services/common/guest-details.service';
import { RoomDetailsService } from 'src/app/services/common/room-details.service';

@Component({
  selector: 'app-reserve-room',
  templateUrl: './reserve-room.component.html',
  styleUrls: ['./reserve-room.component.css']
})
export class ReserveRoomComponent implements OnInit {
  /*
  bookingData: BookingData ={{ guest: Guest = {id:'',name:'',gender:'',age:null,mobileNo:'',
  memberDetails:[{name:'',age:null,gender:''}],address:{country:'',state:'',city:'',street:'',zipcode:''},
  currentStatus:'',roomDetails:{roomId:'',noOfNights:null }}},
  {room: Room = {id:'',roomType:'',status:'', bookingDetails:{bookingDate:null,nights:null,guestId:''}}}};



guest: Guest = {id:'',name:'',gender:'',age:null,mobileNo:'',
  memberDetails:[{name:'',age:null,gender:''}],address:{country:'',state:'',city:'',street:'',zipcode:''},
  currentStatus:'',roomDetails:{roomId:'',noOfNights:null }};

  room: Room = {id:'',roomType:'',status:'', bookingDetails:{bookingDate:null,nights:null,guestId:''}};
  */

  public preFormData = {
		guestId: null,
		roomId: null
	};
	public rGuest: Guest;
	public rRoom: Room;


  public bookingData:BookingData ={
    guest:null,
    room:null
  }

  public guest: Guest={id:'',name:'',gender:'',age:null,mobileNo:'',
  memberDetails:[{name:'',age:null,gender:''}],address:{country:'',state:'',city:'',street:'',zipcode:''},
  currentStatus:'',roomDetails:{roomId:'',noOfNights:null }};

  public room: Room ={id:'',roomType:'',status:'', bookingDetails:{bookingDate:null,nights:null,guestId:''}};

  public reservationConfirmation: Show = {
		refId: '',
		message: ''
	};
  
  public additionalInfo = {
		bookingDate: null,
		nights: null,
		status: ''
	};

  public referencePromise: Promise<boolean>;
	public referencePromise2: Promise<boolean>;

	public showReservationForm = false;
	//public countPromise: Promise<boolean>;
	//public familyDetails:FamilyDetails[];

	public allRoomTypesFetched: Promise<boolean>;
	public allTypes = new Map();

	public guestFormPromise: Promise<boolean>;
	public roomLinkingPromise: Promise<boolean>;

  constructor( private roomService:RoomDetailsService,
    private guestService:GuestDetailsService,
    private router: Router) { }

  ngOnInit(): void {
   

  }
/*
  openGuestForm() {
		this.openAddGuestForm = true;
	}
	submitGuestForm(form) {
		if (form.valid) {
			this.guestSubmitDisabled = true;
			console.log(form.value);
			this.guestService.addGuest(this.guest).subscribe((res) => {
				if (res.refId.match('FallBack')) {
					res.refId = 'Something went wrong please try again';
					this.reference.refId = res.refId;
					this.guestSubmitDisabled = false;
				} else {
					this.reference.refId = res.refId;
					this.referencePromise = Promise.resolve(true);
					this.guestSubmitDisabled = false;
					this.openAddGuestForm = false;
				}
			});
		}
	}

  openReservationForm() {
		this.showReservationForm = true;
	}

*/
  saveGuest()
  {
    this.roomService.makeReservation(this.bookingData).subscribe(data=>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList()
  {
    this.router.navigate(['/dashboard/getroom'])
  }

  onSubmit()
  {
    console.log(this.bookingData);
    this.saveGuest();
  }

}
