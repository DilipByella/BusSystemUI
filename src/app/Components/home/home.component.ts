import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NavbarService } from 'src/app/navbar.service';
// import { Train } from 'src/app/Models/train.model';
import { SharedService } from 'src/app/shared.service';
// import { FooterService } from 'src/app/SharedService/footer.service';
// import { NavbarService } from 'src/app/SharedService/navbar.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private shared:SharedService,private fb:FormBuilder,private router:Router, private nav:NavbarService,config: NgbCarouselConfig) { 

    config.interval = 3000;
    config.showNavigationArrows = false;
    config.keyboard = true;
    config.pauseOnHover = true;
    
  }

  ngOnInit(): void {

      this.nav.show();
  
    }
   

  }