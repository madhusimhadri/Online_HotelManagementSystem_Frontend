import { BookingDetails } from "./BookingDetails";
export interface Room{
    id:string;
    roomType:string;
    status:string;
    bookingDetails?:BookingDetails;
}