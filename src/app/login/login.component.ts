import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  passwordStatus = false;
  loginStatus = true;
  constructor(public authService: AuthService) {

  }

  Login(): void {
    this.authService.login(this.email, this.password);
    setTimeout(() => this.loginStatus = this.authService.logIn, 500);
    setTimeout(() => this.loginStatus = true, 1000);
  }
  ngOnInit(): void {
  }
  public onClick($event): void {
    $event.preventDefault();
    this.passwordStatus = !this.passwordStatus;
  }
}
