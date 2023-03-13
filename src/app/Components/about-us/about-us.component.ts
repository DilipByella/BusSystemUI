import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private nav:NavbarService) { }

  ngOnInit(): void {

    this.nav.show();
    
  }

}
