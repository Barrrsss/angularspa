import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

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
    localStorage.removeItem('auth_token');
  }
}
