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
    alert('You clicked a button! Great work, big guy.');
  }

  ngOnInit() {
  }

}
