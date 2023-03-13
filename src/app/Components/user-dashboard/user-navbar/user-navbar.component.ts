import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { User } from '../../signup/signupmodel';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  userDetails: any;

  constructor(private router:Router, private shared:SharedService) { }

  ngOnInit(): void {

 this.shared.getUserProfile().subscribe(
  res=>{
   this.userDetails=res;
   console.log(this.userDetails);
  },
  err =>{
   console.log(err);
  },
);

  }
onLogout() {
  localStorage.clear();
  this.router.navigate(['login']);
}
}
