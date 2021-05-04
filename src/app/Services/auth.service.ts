import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface Login {
  loggedin: boolean;
  error: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public loggedin: Login = {
    loggedin: false,
    error: false,
  };



  constructor(private http: HttpClient, private router: Router) { }

  url = 'https://krasnov.backendmesto.nomoredomains.club';
  token;
  logout(): void{
    localStorage.removeItem('auth_token');
    console.log(localStorage.getItem('auth_token'));
  }
  login(email: string, password: string): void {
    this.http.post(this.url + '/signin', {password, email},
      { headers: new HttpHeaders({Accept: 'application/json '})
    })
      .subscribe((resp: any) => {
        this.router.navigate(['tasks/task-one']);
        localStorage.setItem('auth_token', resp.token);
        console.log(this.logIn);
      },
        (error: any) => {
        this.loggedin.error = true;
        setTimeout(() =>
            this.loggedin.error = false, 2000);
        }
  );

}
  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }
}
