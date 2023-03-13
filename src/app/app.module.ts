import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { UserNavbarComponent } from './Components/user-dashboard/user-navbar/user-navbar.component';
import { AdminNavbarComponent } from './Components/admin-dashboard/admin-navbar/admin-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './Auth/auth.guard';
import { SaveSeatsComponent } from './Components/admin-dashboard/save-seats/save-seats.component';
import { SaveBusComponent } from './Components/admin-dashboard/save-bus/save-bus.component';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import{MatSelectModule}from'@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BookingComponent } from './Components/user-dashboard/booking/booking.component';
import { TransactionComponent } from './Components/user-dashboard/transaction/transaction.component';
import { BusComponent } from './Components/user-dashboard/bus/bus.component';
import { TicketComponent } from './Components/user-dashboard/ticket/ticket.component';
import { BookingHistoryComponent } from './Components/user-dashboard/booking-history/booking-history.component';
import { ReportComponent } from './Components/admin-dashboard/report/report.component';
import { AddPassengerComponent } from './Components/user-dashboard/add-passenger/add-passenger.component';
import { GetTicketComponent } from './Components/user-dashboard/get-ticket/get-ticket.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PtransactionComponent } from './Components/user-dashboard/ptransaction/ptransaction.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    FooterComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactUsComponent,
    UserNavbarComponent,
    AdminNavbarComponent,
    SaveSeatsComponent,
    SaveBusComponent,
    AddPassengerComponent,
    BookingComponent,
    TransactionComponent,
    BusComponent,
    TicketComponent,
    BookingHistoryComponent,
    ReportComponent,
    GetTicketComponent,
    PtransactionComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    BrowserModule,
    NgxPaginationModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot ([
      {path:'about-us', component:AboutUsComponent},
      {path:'home', component:HomeComponent},
      {path:'signup', component:SignupComponent},
      {path:'login', component:LoginComponent},
      {path:'login/user/dashboard/bus', component:BusComponent,canActivate:[AuthGuard]},
      {path:'login/user/dashboard/add-passenger', component:AddPassengerComponent,canActivate:[AuthGuard]},
      {path:'login/user/dashboard/booking',component:BookingComponent,canActivate:[AuthGuard]},
      {path:'login/user/dashboard/transaction',component:TransactionComponent,canActivate:[AuthGuard]},
      {path:'login/user/dashboard/ptransaction',component:PtransactionComponent,canActivate:[AuthGuard]},
      {path:'login/user/dashboard/booking-history',component:BookingHistoryComponent,canActivate:[AuthGuard]},
      {path:'login/admin/dashboard', component:AdminDashboardComponent, canActivate:[AuthGuard]},
      {path:'login/user/dashboard', component:UserDashboardComponent, canActivate:[AuthGuard]},
      {path:'login/user/dashboard/ticket', component:TicketComponent, canActivate:[AuthGuard]},
      {path:'login/user/dashboard/get-ticket', component:GetTicketComponent, canActivate:[AuthGuard]},
      {path:'login/admin/dashboard/report',component:ReportComponent,canActivate:[AuthGuard]},
      {path:'login/admin/dashboard/save-bus', component:SaveBusComponent,canActivate:[AuthGuard]},
      {path:'login/admin/dashboard/save-seats', component:SaveSeatsComponent,canActivate:[AuthGuard]},
      {path:'login/admin/dashboard/ticket', component:TicketComponent,canActivate:[AuthGuard]},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
     ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
