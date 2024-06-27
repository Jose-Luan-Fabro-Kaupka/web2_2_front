import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  private url = 'http://localhost:8081/usuarios/registrar';

  constructor(private http: HttpClient) { }

  registrar(username: string, pass: string): Observable<any> {
    return this.http.post(this.url, {username, pass});
  }
}
