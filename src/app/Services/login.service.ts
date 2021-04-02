import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from '../Interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private Url = 'http://localhost:5000/auth/login';

  private Login: ILogin = {
    username: '',
    password: ''
  };

  constructor(private http:HttpClient, private router:Router) {}

  SignIn(loginData: ILogin){
    console.log(loginData);  
    this.http.post(this.Url, loginData)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(["form"]);
      });
  }
}
