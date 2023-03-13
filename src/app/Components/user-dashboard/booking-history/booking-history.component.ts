import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { booking } from 'src/app/Models/Booking';
import { ticket } from 'src/app/Models/Ticket';
import { NavbarService } from 'src/app/navbar.service';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  userID: any;
  bModel:booking = new booking();
  booking!:any;
  tModel:ticket=new ticket();
  ticketData: any;
  showConfirm:boolean;
  
  constructor(private shared:SharedService,private nav:NavbarService,private router:Router) { }
  totalLength:any;
  page:number=1;
  ngOnInit(): void {
    this.nav.hide();
    this.getBookingHistory();
    
  }
  
  getBookingHistory(){
    let user:any=localStorage.getItem("userId");
    this.userID=JSON.parse(user);
    
    this.shared.bookingHistory(this.userID).subscribe(res=>{
      this.booking=res;
      this.totalLength=res.length;
      console.log(res);
    });
  }
  ShowConfirm(){
    if(this.booking.Status=="CONFIRM"){
      this.showConfirm=true;
    }
  }
 
  GetTickect(pid:number,bid:number,tid:number){
    this.shared.getTicket(pid,bid,tid).subscribe((res)=>{
      console.log(res);
      console.log(res[0].Status);
      this.ticketData=res;
    
      if(res[0].Status==='Pending' || res[0].Status==='CANCELLED'){
        alert("No ticket available");
      }
      else{
        this.router.navigateByUrl('/login/user/dashboard/get-ticket');
        
      }
    localStorage.setItem('ticket',JSON.stringify(res));
   
  });
  
  }

payment(pid:any){
 this.shared.GetBookingPId(pid).subscribe((result)=>{
  this.shared.getBookingbyId(result).subscribe((a)=>{
    console.log(a);
 
   
    if(a.Status==='CONFIRM' || a.Status==='CANCELLED'){
      alert("Payment not allowed");
    }
    else{
      this.shared.confirmBooking(a.BookingId).subscribe((res)=>{localStorage.setItem('payment',JSON.stringify(res));});
      this.router.navigateByUrl('/login/user/dashboard/ptransaction'); 
      }
      
    })
    });
  }
  

deleteBooking(pid:number){
  this.shared.GetBookingPId(pid).subscribe((result)=>{
    this.shared.getBookingbyId(result).subscribe((a)=>{
      console.log(a);
        if(a.Status==='CANCELLED'){
          alert("Already Cancelled");
        }
        else{
          alert("Are you sure?");
          this.shared.DelbookingHistory(a.BookingId,a.BusId).subscribe(data=>{ location.reload(); });
        }
      });
    });
 
      
    
  }
}