import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  formValue!:FormGroup;
  fare: any;
  pId:any;
  TransactionForm = new FormGroup({
    number : new FormControl('', [Validators.required, Validators.maxLength(16),Validators.minLength(13)]),
    cvv : new FormControl('',[Validators.required , Validators.maxLength(3),Validators.minLength(3)]),
    });
    
  passengerId: any;
    get number() {
      return this.TransactionForm.get('number');
    }
    get cvv() {
      return this.TransactionForm.get('cvv');
    }
 

  constructor(private fb:FormBuilder,private nav:NavbarService,private shared:SharedService,private router:Router) { }

  ngOnInit(): void {
  this.nav.hide();
  this.loadData();

}
loadData(){
  var shareData:any=localStorage.getItem('fare');
    this.fare=JSON.parse(shareData);
    
}
PayNow(){

  var shareData:any=localStorage.getItem('fare');
  var pData:any=localStorage.getItem('passengers');
  this.pId=JSON.parse(pData);
  this.passengerId=this.pId.PassengerId;
  console.log(this.passengerId);
 // this.fare=JSON.parse(shareData);
  this.shared.GetBookingPId(this.passengerId).subscribe((res)=>{
    this.shared.confirmBooking(res).subscribe((result)=>{
      console.log(result);
      alert("Booking Confirmed");
    });
    console.log(res);
    localStorage.setItem('BookingId',JSON.stringify(res));
    alert("Payment Successful");
   
});
  this.router.navigateByUrl('login/user/dashboard/ticket');
}

}