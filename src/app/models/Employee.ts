import { ContactDetails } from './ContactDetails'

export interface Employee{
    id:string;
    name:string;
    password:string;
    role:string;
    salary:number;
    details:ContactDetails;
}