import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-ptransaction',
  templateUrl: './ptransaction.component.html',
  styleUrls: ['./ptransaction.component.css']
})
export class PtransactionComponent implements OnInit {

  formValue!:FormGroup;
  fare: any;
  farebtn:any;
  pId:any;
  TransactionForm = new FormGroup({
    number : new FormControl('', [Validators.required, Validators.maxLength(16),Validators.minLength(16)]),
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
  
  if (!localStorage.getItem('payment')) { 
    location.reload() 
  } else {
    this.loadData();
  }

}
loadData(){
  var shareData:any=localStorage.getItem('payment');
    this.fare=JSON.parse(shareData);
    this.farebtn=this.fare.fare;
}
PayNow(){
  this.router.navigateByUrl('login/user/dashboard/booking-history');
  localStorage.removeItem('payment')
}
}