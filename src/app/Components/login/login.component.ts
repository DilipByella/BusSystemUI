import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    Email: '',
    Password: ''
  }
  LoginForm = new FormGroup({
    email : new FormControl('',[Validators.required , Validators.email]),
    password : new FormControl('',Validators.required)
  });
  submitted=false;
  u: void;
  get email() {
    return this.LoginForm.get('email');
  }
  get password() {
    return this.LoginForm.get('password');
  }

  constructor(private shared:SharedService, private router:Router, private nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.show();

    if(localStorage.getItem('token')!=null && this.LoginForm.value.email=="admin@admin.com")
    this.router.navigate(['login/admin/dashboard']);
    else
    this.router.navigate(['login/user/dashboard']);
    }

  onSubmit() {
    
    this.shared.Login(this.LoginForm.value).subscribe(
      (res:any) =>{
        localStorage.setItem('token',res.token);
        console.log(res.token);
        if(this.LoginForm.value.email=='admin@admin.com')
        this.router.navigate(['login/admin/dashboard']);
        else
        this.router.navigate(['login/user/dashboard']);
        
      },
      err =>{
        if(err.status==400)
        alert("Authentication Failed!! Invalid Credentails");
        else
        console.log(err);
      }
    );
  }
}
