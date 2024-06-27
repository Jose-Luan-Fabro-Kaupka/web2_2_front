import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginData = {
    username: '',
    pass: ''
  };

  constructor(private authService: AuthService, private router: Router) {}
  onSubmit() {
      this.authService.login(this.loginData.username, this.loginData.pass)
        .subscribe({
          next: (response: string) => {
            console.log(response);
            const token = response;
            localStorage.setItem('authToken', token);
            this.router.navigate(['/home']);
          },
          error: (error) => {
            console.error('Erro de login', error);
          }
        });
    }
}