import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordStatus = false;
  constructor() { }

  ngOnInit(): void {
  }
  public onClick($event): void {
    $event.preventDefault();
    this.passwordStatus = !this.passwordStatus;
  }


}
