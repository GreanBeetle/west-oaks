import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthenticationService]
})
export class NavbarComponent implements OnInit {
  private isLoggedIn: boolean;
  private mobileMenuHidden: boolean;
  private burgerHidden = false;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(theUser => {
      if (theUser == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  toggleNavMenu() {
    if (this.mobileMenuHidden === true) {
      this.mobileMenuHidden = false;
    } else {
      this.mobileMenuHidden = true;
    }
  }

  toggleBurger() {
    if (this.burgerHidden === true) {
      this.burgerHidden = false;
    } else {
      this.burgerHidden = true;
    }
  }

  ngOnInit() {
  }

}
