import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/Room';
import { RoomDetailsService } from 'src/app/services/common/room-details.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  room: Room = {id:'',roomType:'',status:'',bookingDetails:null}

  constructor(private router: Router, private roomService:RoomDetailsService) { }

  addRoom()
  {
    this.roomService.addRoom(this.room).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/dashboard/getroom'])
    },
    error => console.log(error));
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.room);
    this.addRoom();
  }
}
