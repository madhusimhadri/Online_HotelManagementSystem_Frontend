import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/Room';
import { RoomDetailsService } from 'src/app/services/common/room-details.service';
import { LocalStoreService } from 'src/app/services/local-store/local-store.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-get-room',
  templateUrl: './get-room.component.html',
  styleUrls: ['./get-room.component.css']
})
export class GetRoomComponent implements OnInit {

  public userRole = 'not yet fetched';
	public user;
  room: Room = {id:'',roomType:'',status:'', bookingDetails:{bookingDate:null,nights:null,guestId:''}};
  rooms: Room[];

  constructor(private roomService: RoomDetailsService,
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
    this.getRooms();
  }

  private getRooms()
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

    this.roomService.getRoomList().subscribe(data=>{
      this.rooms = data;
    });
  }

  updateRoom(id: string)
  {
    this._router.navigate(['updateroom',id]);
  }

  deleteRoom(id: string)
  {
    this.roomService.deleteRoom(id).subscribe(data=>
      {
        console.log(data);
        
        this.getRooms();
      });
  }


  roomDetails(id: string)
  {
    this._router.navigate(['roomdetails',id]);
  }

}
