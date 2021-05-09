import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { Room } from 'src/app/models/Room';
import { RoomDetailsService } from 'src/app/services/common/room-details.service';
import { LocalStoreService } from 'src/app/services/local-store/local-store.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  public userRole = 'not yet fetched';
	public user;
  room: Room = {id:'',roomType:'',status:'', bookingDetails:{bookingDate:null,nights:null,guestId:''}};
  id:string

  constructor(private roomService: RoomDetailsService,
    private _router: Router,
		private _route: ActivatedRoute,
    private userSession: LocalStoreService,
    private _auth: LoginService ) { }

    ngOnInit(): void {
      this.id= this._route.snapshot.params['id']
      this.roomService.getRoomById(this.id).subscribe(data=>{
        this.room = data;
      },
      error =>console.log(error));
    }
  
    onSubmit()
    {
      this.roomService.updateRoom(this.id,this.room).subscribe(data=>
        {
          this.goToRoomList();
        },
        error => console.log(error));
    }
  
    goToRoomList()
    {
      this._router.navigate(['/dashboard/getroom'])
    }

  updateRoom(id: string)
  {
    this._router.navigate(['updateroom',id]);
  }
}
