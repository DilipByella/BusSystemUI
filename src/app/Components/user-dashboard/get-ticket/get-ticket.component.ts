import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { ticket } from 'src/app/Models/Ticket';
import { NavbarService } from 'src/app/navbar.service';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-get-ticket',
  templateUrl: './get-ticket.component.html',
  styleUrls: ['./get-ticket.component.css']
})
export class GetTicketComponent implements OnInit {
  @ViewChild("ticket",{static:false}) el!: ElementRef;
  tModel:ticket=new ticket();
  ticketData!:any;
  constructor(private shared:SharedService,private nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.loadData();
  }

  
  loadData(){
    var shareData:any=localStorage.getItem('ticket');
    this.ticketData=JSON.parse(shareData);
    console.log(this.ticketData);
   
  }

  Download(){
    let pdf = new jsPDF('l','pt','a4');
    pdf.text("Ticket",19,19)
    pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
       pdf.save("ticket.pdf");
     }
    })

  }
}