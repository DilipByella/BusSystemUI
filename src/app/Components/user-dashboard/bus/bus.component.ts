import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Seats } from 'src/app/Models/Seat';
import { Bus } from 'src/app/Models/Bus';
import { NavbarService } from 'src/app/navbar.service';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
formValue!:FormGroup;
busModelObj:Bus=new Bus()
busData!:any;
seats !: Seats[];
seatData!:any;
busdata:any;
  constructor(private fb:FormBuilder,private shared:SharedService,private nav:NavbarService,private router:Router) { }

  ngOnInit(): void {
   
    this.nav.hide();
    this.nav.doSomethingElseUseful();
    this.formValue=this.fb.group({
      ArrivalStation:[''],
      DepartureStation:[''],
      Date: ['']
    });
    this.getAllBus();
  }
SearchBus(){
// // this.busModelObj.arrivalStation=this.formValue.value.ArrivalStation;
// // this.busModelObj.departureStation=this.formValue.value.DepartureStation;
// // this.busModelObj.arrivalDate=this.formValue.value.Date;
this.shared.SearchBus(this.formValue.value.ArrivalStation,this.formValue.value.DepartureStation,this.formValue.value.Date).subscribe(res=>{
 
 
  console.log(res);
    this.busData = res;
    this.seatData=res;
    if(res==null || Object.keys(res).length===0){
      alert("No Bus Found");
    }
    this.formValue.reset();
   
 
},error=>{
  alert("No Bus Found");
});
}

GetBusById(id:number){
this.busModelObj.busId=id;
this.shared.getBusbyId(id).subscribe((res)=>{
  console.log(res);
  localStorage.setItem('busId',JSON.stringify(res));
  this.router.navigateByUrl('/login/user/dashboard/add-passenger');
})
}
getAllBus(){
  this.shared.getAllBus().subscribe(res=>{
    this.busdata = res;
  })
}

}