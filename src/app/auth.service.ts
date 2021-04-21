import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

//Логин изменён на email из-за бэкэнда, который сделан для другого проекта, там для логина используется email

export class AuthService {
  url = 'https://krasnov.backendmesto.nomoredomains.club';
  token;
  static loggedin: boolean;
  logout(): void{
    localStorage.removeItem('auth_token');
    console.log(localStorage.getItem('auth_token'));
  }
  public get loggedin(): boolean {
    console.log('1' + localStorage.getItem('auth_token'));
    return (localStorage.getItem('auth_token') !== null);
  }
  constructor(private http: HttpClient, private router: Router) { }
  login(email: string, password: string): void {
    this.http.post(this.url + '/signin', {password, email}, { headers: new HttpHeaders({Accept: 'application/json '})
    })
      .subscribe((resp: any) => {

        this.router.navigate(['tasks/task-one']);
        localStorage.setItem('auth_token', resp.token);

      }
  );

}

}
