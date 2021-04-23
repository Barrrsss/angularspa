import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Login} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  passwordStatus = false;
  constructor(public authService: AuthService) {

  }
  Login(): void {
    this.authService.login(this.email, this.password);
  }
  ngOnInit(): void {
    console.log(this.authService.loggedin.error)
  }
  public onClick($event): void {
    $event.preventDefault();
    this.passwordStatus = !this.passwordStatus;
    console.log(this.authService.loggedin.error);

  }

}
