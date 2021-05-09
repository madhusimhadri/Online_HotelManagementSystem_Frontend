

export interface Invoice{
    companyName:string,
    guestId:string,
    guestName:string,
    guestMobile:string,
    numberOfPeople:number,
    bookedRoomType:string,
    roomPricePerNight:number,
    nights:number,
    bookingDate:Date,
    tax:number,
    totalBill:number,
    issuedBy: string
}
