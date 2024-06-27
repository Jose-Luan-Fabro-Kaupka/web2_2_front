import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loginUrl = 'http://localhost:8081/login';

  constructor(private http: HttpClient) { }

  login(username: string, pass: string): Observable<any> {
    return this.http.post(this.loginUrl, {username, pass}, {responseType: 'text'});
  }

  logout() {
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }
}