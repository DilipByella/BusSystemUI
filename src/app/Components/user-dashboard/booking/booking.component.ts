import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { booking } from 'src/app/Models/Booking';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingModel:booking=new booking();
  busData:any;
  pData:any;
  fare!:any;
  constructor(private shared:SharedService, private router:Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    var shareData:any=localStorage.getItem('busId');
    this.busData=JSON.parse(shareData);
    var sharePass:any=localStorage.getItem('passengers');
    this.pData=JSON.parse(sharePass);
    
    this.shared.fareCal(this.busData.BusId,this.pData.Class,this.pData.PassengerId,this.pData.UserId).subscribe((res)=>{
          this.fare=res;  
          console.log(res);
          localStorage.setItem('fare',JSON.stringify(res));   
    });
  }
payNow(){
  this.router.navigateByUrl('/login/user/dashboard/transaction');
}
}