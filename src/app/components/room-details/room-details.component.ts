import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/Room';
import { RoomDetailsService } from 'src/app/services/common/room-details.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id: string;
  room: Room;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private roomService:RoomDetailsService) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.room =  {id:'',roomType:'',status:'', bookingDetails:{bookingDate:null,nights:null,guestId:''}};
    this.roomService.getRoomById(this.id).subscribe(data=>{
      this.room = data;
    });
    
  }

  onSubmit()
  {
   this.router.navigate(['/dashboard/getroom'])
  }
}
