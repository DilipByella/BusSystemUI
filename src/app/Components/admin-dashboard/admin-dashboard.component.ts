import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private nav:NavbarService) { }

  ngOnInit(): void {

    this.nav.hide();
  }

}
