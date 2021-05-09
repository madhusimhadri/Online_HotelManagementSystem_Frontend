import {AdditionalMembers} from './AdditionalMembers';
import {Address} from './Address';
import {RoomStay} from './RoomStay';

export interface Guest{
    id:string;
    name:string;
    gender:string;
    age:number;
    mobileNo:string;
    memberDetails?: AdditionalMembers[]; 
    address?:Address;
    currentStatus:string;
    roomDetails?:RoomStay;
    
}