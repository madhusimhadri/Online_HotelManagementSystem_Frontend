
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { Guest } from 'src/app/models/Guest';
import { Room } from 'src/app/models/Room';
import { EmployeeDetailsService } from 'src/app/services/common/employee-details.service';
import { GuestDetailsService } from 'src/app/services/common/guest-details.service';
import { RoomDetailsService } from 'src/app/services/common/room-details.service';



@Component({
  selector: 'app-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.css']
})
export class OutlineComponent implements OnInit {

  public availableRooms: Room[] = [];
	public bookedRooms: Room[] = [];
	public guestData: Guest[] = [];
	public checkedInGuests: Guest[];
  public employeeData: Employee[];
  public owners: number = 0;
  public managers: number = 0;
  public receptionists: number = 0;
	public cardOneLoadComplete: Promise<boolean>;
	public cardTwoLoadComplete: Promise<boolean>;
	public cardThreeLoadComplete: Promise<boolean>;
	public cardFourLoadComplete: Promise<boolean>;
	constructor(
    private roomService: RoomDetailsService, 
    private guestService: GuestDetailsService,
    private employeeService: EmployeeDetailsService 
    ) {}

	ngOnInit() {
		//card 1
		this.roomService.getRoomByStatus('AVAILABLE').subscribe((res) => {
			console.log('Inside overview');
			console.log(res);
			this.availableRooms = res;
			console.log(this.availableRooms);
		});
		this.roomService.getRoomByStatus('BOOKED').subscribe((res) => {
			this.bookedRooms = res;
			this.cardOneLoadComplete = Promise.resolve(true);
		});

		/*//card 2
		this.guestService.getGuestList().subscribe((res) => {
			this.guestData = res;
		});
		this.guestService.getGuestsByStatus('checkIn').subscribe((res) => {
			this.checkedInGuests = res;
			this.cardTwoLoadComplete = Promise.resolve(true);
		});
    */

		//card 3
    this.employeeService.getEmployeeList().subscribe(res=>{
      this.employeeData = res;
      for(let i of this.employeeData){
        if(i.role.match("OWNER")){
          this.owners += 1;
        }
        else if(i.role.match("MANAGER")){
          this.managers += 1;
        }
        else if(i.role.match("RECEPTIONIST")){
          this.receptionists += 1;
        }
      }
      this.cardThreeLoadComplete = Promise.resolve(true);
    })
	} 


}
