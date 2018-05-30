import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ AuthenticationService ]
})
export class FooterComponent implements OnInit {
  user;
  private isLoggedIn: boolean;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(theUser => {
      this.user = theUser
      if (theUser == null) {
        this.isLoggedIn = false;
        console.log("if " + this.isLoggedIn);
      } else {
        this.isLoggedIn = true;
        console.log("else " + this.isLoggedIn);
      }
    });
  }

  signOut() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
