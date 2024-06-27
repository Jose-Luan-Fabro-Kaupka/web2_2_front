import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  usuarios: any[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      }, error: (err) => {
        console.error('Erro ao buscar usuarios', err);
      }
    });
  }

  excluirUsuario(id: number) {
    this.usuariosService.deleteUsuario(id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (err) => {
        console.error('Erro ao excluir usuario', err);
      }
    });
  }
}
