import { Invoice } from "./Invoice";

export interface PaymentData
{
    id:string,
    invoice ?:Invoice,
    status:string
}