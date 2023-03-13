import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { jsPDF } from 'jspdf';
import { NavbarService } from 'src/app/navbar.service';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @ViewChild("ticket",{static:false}) el!: ElementRef;
  busData:any;
  pData: any;
  bData:any;
  bookingData:any;
  bId:any;
  constructor(private nav:NavbarService,private shared:SharedService) { }

  ngOnInit(): void {
    this.nav.hide();
    // this.loadData();
    this.getBookingById();
    if (!localStorage.getItem('BookingId')) { 
      location.reload() 
    } else {
      this.loadData();
    }
  }
loadData(){
  var shareData:any=localStorage.getItem('busId');
    this.busData=JSON.parse(shareData);
    var sharePass:any=localStorage.getItem('passengers');
    this.pData=JSON.parse(sharePass);
   
    
}
getBookingById(){
  var shareVal:any=localStorage.getItem('BookingId');
  this.bData=JSON.parse(shareVal);
  
  this.shared.getBookingbyId(this.bData).subscribe((res)=>{
    this.bookingData=res;
    console.log(res);});
}
Download(){
  this.shared.addTicket(this.pData.PassengerId,this.bData,this.busData.busId).subscribe((res)=>{});
 let pdf = new jsPDF('l','pt','a4');
 pdf.text("Ticket",19,19)
 pdf.html(this.el.nativeElement,{
  callback:(pdf)=>{
    pdf.save("ticket.pdf");
  }
 });
 
}

}