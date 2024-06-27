import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrarService } from '../../services/registrar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  dados = {
    username: '',
    pass: ''
  }
  constructor (private service: RegistrarService, private router: Router){  }

  onSubmit(){
    this.service.registrar(this.dados.username, this.dados.pass).subscribe({
      next: (response: any) => {
        this.router.navigate(['/login']);
      }
    });
  }
}
