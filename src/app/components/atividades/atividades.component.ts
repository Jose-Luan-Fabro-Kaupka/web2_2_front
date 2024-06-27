import { Component, OnInit } from '@angular/core';
import { AtividadesService } from '../../services/atividades.service';
import { UsuariosService } from '../../services/usuarios.service';
import { ArtefatosService } from '../../services/artefatos.service';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

  atividades: any[] = [];
  usuarios: any[] = [];
  artefatos: any[] = [];
  criandoAtividade: boolean = false;
  novaAtividade: any = {
    titulo: '',
    descricao: '',
    usuario_id: null,
    artefato_id: null
  };

  constructor(
    private atividadesService: AtividadesService,
    private usuariosService: UsuariosService,
    private artefatosService: ArtefatosService
  ) {}

  ngOnInit() {
    this.carregarAtividades();
    this.carregarUsuarios();
    this.carregarArtefatos();
  }

  carregarAtividades() {
    this.atividadesService.getAtividades().subscribe({
      next: (data) => {
        this.atividades = data;
      }, error: (err) => {
        console.error('Erro ao buscar atividades', err);
      }
    });
  }

  toggleCriarAtividade() {
    this.criandoAtividade = !this.criandoAtividade;
  }

  onSubmitCriarAtividade() {
    if (this.novaAtividade.usuario_id && this.novaAtividade.artefato_id) {
      this.atividadesService.createAtividade(this.novaAtividade).subscribe({
        next: (data) => {
          this.carregarAtividades();
          this.toggleCriarAtividade();
          this.novaAtividade = {
            titulo: '',
            descricao: '',
            usuario_id: null,
            artefato_id: null
          };
        },
        error: (err) => {
          console.error('Erro ao criar atividade', err);
        }
      });
    } else {
      alert('Usuário e Artefato são obrigatórios');
    }
  }

  excluirAtividade(id: number) {
    this.atividadesService.deleteAtividade(id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (err) => {
        console.error('Erro ao excluir atividade', err);
      }
    });
  }

  carregarUsuarios() {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      }, error: (err) => {
        console.error('Erro ao buscar usuários', err);
      }
    });
  }

  carregarArtefatos() {
    this.artefatosService.getArtefatos().subscribe({
      next: (data) => {
        this.artefatos = data;
      }, error: (err) => {
        console.error('Erro ao buscar artefatos', err);
      }
    });
  }
}
