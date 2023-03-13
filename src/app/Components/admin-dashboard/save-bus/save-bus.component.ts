import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Bus } from 'src/app/Models/Bus';
import { NavbarService } from 'src/app/navbar.service';

import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-save-bus',
  templateUrl: './save-bus.component.html',
  styleUrls: ['./save-bus.component.css']
})
export class SaveBusComponent implements OnInit {
  formValue !: FormGroup;
  busModelObj: Bus = new Bus();
  busData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private shared:SharedService,private fb:FormBuilder,private nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
    
    this.formValue=this.fb.group({

      BusId:[''],
      Name:[''],
      ArrivalTime:[''],
      DepartureTime: [''],
      ArrivalDate:[''],
      DepartureDate:[''],
      ArrivalStation:[''],
      DepartureStation:[''],
      Distance:[''],
    })
    this.getAllBus();
  }


onEdit(row:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.formValue.controls['BusId'].setValue(row.BusId)
    // this.formValue.controls['SeatId'].setValue(row.seatId);
    this.formValue.controls['Name'].setValue(row.Name);
    this.formValue.controls['ArrivalTime'].setValue(row.ArrivalTime);
    this.formValue.controls['DepartureTime'].setValue(row.DepartureTime);
    this.formValue.controls['ArrivalDate'].setValue(row.ArrivalDate);
    this.formValue.controls['DepartureDate'].setValue(row.DepartureDate);
    this.formValue.controls['ArrivalStation'].setValue(row.ArrivalStation);
    this.formValue.controls['DepartureStation'].setValue(row.DepartureStation);
    this.formValue.controls['Distance'].setValue(row.distance);
}
updateBus(){
  this.busModelObj.busId=this.formValue.value.BusId;
  this.busModelObj.name=this.formValue.value.Name;
  this.busModelObj.arrivalDate=this.formValue.value.ArrivalDate;
  this.busModelObj.departureDate=this.formValue.value.DepartureDate;
  this.busModelObj.departureTime=this.formValue.value.DepartureTime;
  this.busModelObj.arrivalTime=this.formValue.value.ArrivalTime;
  this.busModelObj.arrivalStation=this.formValue.value.ArrivalStation;
  this.busModelObj.departureStation=this.formValue.value.DepartureStation;
  this.busModelObj.distance=this.formValue.value.Distance;
  this.shared.updateBus(this.busModelObj).subscribe(res=>{
    alert("Updated successfully");
    let ref = document.getElementById("cancel")
    ref?.click();
    this.formValue.reset();
    this.getAllBus();
  })
}

deleteBus(id:number){
  if(confirm('Are you sure?')){
    this.shared.deleteBus(id).subscribe(data=>{
      console.log(data);
      
    });
    location.reload();
  }
  
} 
clickAddBus(){
  this.formValue.reset();
  this.showAdd=true;
  this.showUpdate=false;
}
postBusDetails(){
  
  this.busModelObj.name=this.formValue.value.Name;
  this.busModelObj.arrivalDate=this.formValue.value.ArrivalDate;
  this.busModelObj.departureDate=this.formValue.value.DepartureDate;
  this.busModelObj.departureTime=this.formValue.value.DepartureTime;
  this.busModelObj.arrivalTime=this.formValue.value.ArrivalTime;
  this.busModelObj.arrivalStation=this.formValue.value.ArrivalStation;
  this.busModelObj.departureStation=this.formValue.value.DepartureStation;
  this.busModelObj.distance=this.formValue.value.Distance;
  this.shared.saveBus(this.busModelObj).subscribe(res=>{ 
    console.log(res),
    alert("Bus added successfully");
    let ref = document.getElementById("cancel")
    ref?.click();
    this.formValue.reset();
    this.getAllBus();
  },
  error=>{
    alert("Something is wrong");
  });
}
getAllBus(){
  this.shared.getAllBus().subscribe(res=>{
    this.busData = res;
  })
}


}
