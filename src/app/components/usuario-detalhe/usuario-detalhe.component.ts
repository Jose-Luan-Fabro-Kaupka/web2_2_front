import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrl: './usuario-detalhe.component.css'
})
export class UsuarioDetalheComponent implements OnInit {

  usuario: any;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.usuarioService.getUsuarioById(id).subscribe({
        next: (data) => {
          this.usuario = data;
        },
        error: (err) => {
          console.error('Erro ao buscar detalhes da usuario', err);
        }
      });
    }
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.usuarioService.updateUsuario(id, this.usuario).subscribe({
        next: (data) => {
          console.log('Usuario atualizado com sucesso', data);
        },
        error: (err) => {
          console.error('Erro ao atualizar usuario', err);
        }
      });
    }
  }
}