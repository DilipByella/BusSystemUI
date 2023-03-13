import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { Report } from 'src/app/Models/Report';
import { NavbarService } from 'src/app/navbar.service';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @ViewChild("report",{static:false}) el!: ElementRef;
formValue!:FormGroup;
report:Report = new Report();
reportData:any;
showPass !: boolean;
showStat !: boolean;
busdata:any;
split:any;
  constructor(private fb:FormBuilder,private shared:SharedService,private nav:NavbarService, private router:Router) { }
 
  totalLength:any;
  page:number=1;

  ngOnInit(): void {
    this.nav.hide();
    this.nav.doSomethingElseUseful();
    
    this.formValue=this.fb.group({
      BusId:[''],
      Status:[''],
    });
    this.getAllBus();
    
  }
   
  SearchPassenger(){
    this.split= this.formValue.value.BusId.split(" ");
    var busId=this.split[0];
    console.log(busId);
    console.log(this.formValue.value.BusId);
    this.shared.reportStat(busId,this.formValue.value.Status).subscribe((res)=>{
      console.log(res);
      this.totalLength=res.length;
      this.reportData=res;
      if(res==null || Object.keys(res).length===0){
        alert("No Report Found");
      }
      
    });
    
    
  }

  Download(){
    let pdf = new jsPDF('l','pt','a3');

    pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
    pdf.save("Report.pdf");
      }
    });
  }
  getAllBus(){
    this.shared.getAllBus().subscribe(res=>{
      this.busdata = res;
    })
  }
}