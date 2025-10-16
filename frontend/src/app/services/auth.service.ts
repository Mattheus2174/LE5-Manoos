import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPostData } from '../components/post-detail/post-detail';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoggedIn: boolean = false;
  public redirectUrl: string = "/posts";

  constructor(
    private http: HttpClient
  )
  {}

  login(username: string, password: string) {
  console.log('AuthService - received username:', username);
  console.log('AuthService - received password:', password);
  
  return this.http.post<LoginPostData>("http://localhost:7000/api/Login/login", {
    username: username,
    password: password
  });
  }
}