import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialComponents } from './materials/material.module';
import { LoginService } from './services/login.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LocalStoreService } from './services/local-store/local-store.service';
import { DashboardGuard } from './dashboard.guard';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { GetEmployeeComponent } from './components/get-employee/get-employee.component';
import { OwnerComponent } from './components/owner/owner.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ReceptionistComponent } from './components/receptionist/receptionist.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { AddGuestComponent } from './components/add-guest/add-guest.component';
import { UpdateGuestComponent } from './components/update-guest/update-guest.component';
import { GuestDetailsComponent } from './components/guest-details/guest-details.component';
import { ReserveRoomComponent } from './components/reserve-room/reserve-room.component';
import { OutlineComponent } from './components/outline/outline.component';
import { GetRoomComponent } from './components/get-room/get-room.component';
import { UpdateRoomComponent } from './components/update-room/update-room.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { GetinvoiceComponent } from './components/getinvoice/getinvoice.component';
import { UpdateInvoiceComponent } from './components/update-invoice/update-invoice.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddEmployeeComponent,
    GetEmployeeComponent,
    OwnerComponent,
    ManagerComponent,
    ReceptionistComponent,
    HomeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    NavBarComponent,
    GuestListComponent,
    RoomListComponent,
    AddGuestComponent,
    UpdateGuestComponent,
    GuestDetailsComponent,
    ReserveRoomComponent,
    OutlineComponent,
    GetRoomComponent,
    UpdateRoomComponent,
    RoomDetailsComponent,
    InvoiceComponent,
    GetinvoiceComponent,
    UpdateInvoiceComponent,
    InvoiceDetailsComponent,
    PaymentGatewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    materialComponents,
    FlexLayoutModule

  ],
  providers: [LoginService,LocalStoreService,DashboardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
