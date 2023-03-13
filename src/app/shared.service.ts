import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './Components/signup/signupmodel';
import { passenger } from './Models/Passenger';
import { Seats } from './Models/Seat';
import { Bus } from './Models/Bus';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public userServices:User;
  public BusService:Bus;
  readonly APIUrl ="https://localhost:44345/api"
  constructor(private http:HttpClient ) { }

  SaveUser(val:any){
    console.log(val);
    return this.http.post<any>(this.APIUrl+'/User/SaveUser',val)
  }
  Login(formData: any){
    console.log(formData);
    return this.http.post<User>(this.APIUrl+'/User/login',formData)
  }
  GetUserbyEmail(email:any){
    return this.http.get<User>(this.APIUrl+'/User/GetUserbyEmail?Email=')
  }
  getAllUserDetails():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/User/GetAllUser()')
    }
  EmailService(name:any,reciever:any){
   return this.http.get<any[]>(this.APIUrl+'/User/EmailService?name='+name+'&reciever='+reciever)
  }
  getAllBus():Observable<Bus>{
    return this.http.get<Bus>(this.APIUrl+'/Bus/GetAllBus');
  }
   saveBus(val:any){
    return this.http.post<Bus>(this.APIUrl+'/Bus/SaveBus',val);
  }
  deleteBus(id:number){
    return this.http.delete<Bus>(this.APIUrl+'/Bus/DeleteBus?BusId='+id);
  }
  updateBus(data:any){
    return this.http.put<any>(this.APIUrl+'/Bus/UpdateBus',data);
  }
  SearchBus(arr:any,dept:any,date:any){
    return this.http.get<Bus>(this.APIUrl+'/Bus/SearchBusSeat2?ArrivalStation='+arr+'&DepartureStation='+dept+'&date='+date);
  }
  getBusbyId(id:number){
    return this.http.get<Bus>(this.APIUrl+'/Bus/GetBus?BusId='+id)
  }
  GetSeatById(id:number){
    return this.http.get<Seats>(this.APIUrl+'/Seat/GetSeat?SeatId='+id);
  }

  getAllSeats():Observable<Seats>{
    return this.http.get<Seats>(this.APIUrl+'/Seat/GetAllSeats()');
  }
  updateSeats(id:number,data:any){
    return this.http.put<any>(this.APIUrl+'/Seat/UpdateSeat?SeatId='+id,data);
  }

  addPassenger(val:any){
    return this.http.post<passenger>(this.APIUrl+'/Passenger/AddPassenger',val);
  }
  fareCal(tid:number,val:any,pid:number,uid:number){
    return this.http.get<any>(this.APIUrl+'/Booking/CalculateFare?BusId='+tid+'&Class='+val+'&PassengerId='+pid+'&UserId='+uid);
  }
  getUserProfile(){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    console.log(tokenHeader);
    return this.http.get(this.APIUrl+'/User/GetUserProfile', {headers : tokenHeader});
  }
  bookingHistory(uid:number){
    return this.http.get<any>(this.APIUrl+'/Booking/GetBookingHistory?UserId='+uid);
  }
  saveSeat(val:any){
    return this.http.post<Seats>(this.APIUrl+'/Seat/SaveSeat',val);
  }
  report(tid:number){
    return this.http.get<any>(this.APIUrl+'/Passenger/GetReport?BusId='+tid);
  }
  GetBookingPId(pid:number){
    return this.http.get<any>(this.APIUrl+'/Booking/GetBookingId?PassengerId='+pid);
  }
  confirmBooking(bid:any){
    return this.http.get<any>(this.APIUrl+'/Booking/ConfirmBooking?BookingId='+bid);
  }
  getBookingbyId(bid:number){
    return this.http.get<any>(this.APIUrl+'/Booking/GetBooking?BookingId='+bid);
  }
  addTicket(pid:number,bid:number,tid:number){
    return this.http.get<any>(this.APIUrl+'/Ticket/SaveTicket?PassengerId='+pid+'&BookingId='+bid+'&BusId='+tid);
  }
  getTicket(pid:number,bid:number,tid:number){
    return this.http.get<any>(this.APIUrl+'/Ticket/GetTicketModel?PassengerId='+pid+'&BookingId='+bid+'&BusId='+tid);
  }
  reportStat(tid:number,val:any){
    return this.http.get<any>(this.APIUrl+'/Passenger/GetReportStat?BusId='+tid+'&Status='+val);
  }
  DelbookingHistory(bid:number,tid:number){
    return this.http.delete<any>(this.APIUrl+'/Booking/DeleteBooking?BookingId='+bid+'&BusId='+tid);
  }
}
