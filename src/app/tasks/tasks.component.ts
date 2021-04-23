import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(public authService: AuthService) { }


  ngOnInit(): void {
  }

  logout(): void {
    console.log(this.authService.logIn);
    localStorage.removeItem('auth_token');
    console.log(this.authService.logIn);
  }
}
