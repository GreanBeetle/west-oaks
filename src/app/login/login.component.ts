import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  user = { email: '', password: '' };

  constructor(private authService: AuthenticationService, private router: Router) { }

  signIn() {
    this.authService.signIn(this.user.email, this.user.password)
    .then((res) => {
      console.log(res);
      this.router.navigate(['admin']);
    })
    .catch((err) => console.log('error: ' + err));
  }

}
