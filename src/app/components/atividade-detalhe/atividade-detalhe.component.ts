import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtividadesService } from '../../services/atividades.service';
import { UsuariosService } from '../../services/usuarios.service';
import { ArtefatosService } from '../../services/artefatos.service';

@Component({
  selector: 'app-atividade-detalhe',
  templateUrl: './atividade-detalhe.component.html',
  styleUrls: ['./atividade-detalhe.component.css']
})
export class AtividadeDetalheComponent implements OnInit {

  atividade: any;
  usuarios: any[] = [];
  artefatos: any[] = [];
  alterandoUsuario: boolean = false;
  alterandoArtefato: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private atividadesService: AtividadesService,
    private usuariosService: UsuariosService,
    private artefatosService: ArtefatosService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.atividadesService.getAtividadeById(id).subscribe({
        next: (data) => {
          this.atividade = data;
          console.log('Atividade carregada', this.atividade);
        },
        error: (err) => {
          console.error('Erro ao buscar detalhes da atividade', err);
        }
      });
    }

    this.carregarUsuarios();
    this.carregarArtefatos();
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.atividadesService.updateAtividade(id, this.atividade).subscribe({
        next: (data) => {
          console.log('Atividade atualizada com sucesso', data);
        },
        error: (err) => {
          console.error('Erro ao atualizar atividade', err);
        }
      });
    }
  }

  alterarUsuario() {
    this.alterandoUsuario = !this.alterandoUsuario;
  }

  alterarArtefato() {
    this.alterandoArtefato = !this.alterandoArtefato;
  }

  carregarUsuarios() {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        console.log('Usuários carregados', this.usuarios);
      }, error: (err) => {
        console.error(err);
      }
    });
  }

  carregarArtefatos() {
    this.artefatosService.getArtefatos().subscribe({
      next: (data) => {
        this.artefatos = data;
        console.log('Artefatos carregados', this.artefatos);
      }, error: (err) => {
        console.error(err);
      }
    });
  }

  selecionarUsuario(event: any) {
    const usuarioId = event.target.value;
    if (usuarioId) {
      const usuarioSelecionado = this.usuarios.find(usuario => usuario.id === usuarioId);
      if (usuarioSelecionado) {
        this.atividade.usuarioModel = usuarioSelecionado;
        this.alterandoUsuario = false;
        console.log('Usuário selecionado', this.atividade.usuarioModel);
      }
    }
  }

  selecionarArtefato(event: any) {
    const artefatoId = event.target.value;
    if (artefatoId) {
      const artefatoSelecionado = this.artefatos.find(artefato => artefato.id === artefatoId);
      if (artefatoSelecionado) {
        this.atividade.artefatoModel = artefatoSelecionado;
        this.alterandoArtefato = false;
        console.log('Artefato selecionado', this.atividade.artefatoModel);
      }
    }
  }
}
