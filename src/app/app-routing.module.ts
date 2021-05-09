import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddGuestComponent } from './components/add-guest/add-guest.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { GetEmployeeComponent } from './components/get-employee/get-employee.component';
import { GetRoomComponent } from './components/get-room/get-room.component';
import { GetinvoiceComponent } from './components/getinvoice/getinvoice.component';
import { GuestDetailsComponent } from './components/guest-details/guest-details.component';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { HomeComponent } from './components/home/home.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LoginComponent } from './components/login/login.component';
import { OutlineComponent } from './components/outline/outline.component';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';
import { ReserveRoomComponent } from './components/reserve-room/reserve-room.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { UpdateGuestComponent } from './components/update-guest/update-guest.component';
import { UpdateInvoiceComponent } from './components/update-invoice/update-invoice.component';
import { UpdateRoomComponent } from './components/update-room/update-room.component';
import { DashboardGuard } from './dashboard.guard';

import { NavBarComponent } from './nav-bar/nav-bar.component';


const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path :'navbar', component: NavBarComponent},
  {
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [ DashboardGuard ],
   children :[
      {path:'getemployee', component: GetEmployeeComponent},
      {path:'addemployee', component: AddEmployeeComponent},
      {path: '', redirectTo:'getemployee',pathMatch:'full'},
      {path:'addroom', component: RoomListComponent},
      {path:'home',component:HomeComponent},
      {path:'getguest', component:GuestListComponent},
      {path:'addguest', component:AddGuestComponent},
      {path:'reserve-room',component:ReserveRoomComponent},
      {path:'outline',component:OutlineComponent},
      {path:'getroom',component:GetRoomComponent},
      {path:'getinvoice',component:GetinvoiceComponent}
   ]
  } ,
  {path : 'updateemployee/:id', component: UpdateEmployeeComponent},
  {path : 'employeedetails/:id', component: EmployeeDetailsComponent},
  {path: 'updateguest/:id', component: UpdateGuestComponent},
  {path: 'guestdetails/:id', component: GuestDetailsComponent},
  {path:'updateroom/:id', component: UpdateRoomComponent},
  {path:'roomdetails/:id', component: RoomDetailsComponent},
  {path: 'updateinvoice/:id' ,component: UpdateInvoiceComponent},
  {path:'invoicedetails/:id', component: InvoiceDetailsComponent},
  {path:'payment', component: PaymentGatewayComponent}
 
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
export const routingComponents = [
  LoginComponent,
  DashboardComponent,
  GetEmployeeComponent,
  AddEmployeeComponent]
  */