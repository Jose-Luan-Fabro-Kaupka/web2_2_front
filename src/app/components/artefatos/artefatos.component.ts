import { Component, OnInit } from '@angular/core';
import { ArtefatosService } from '../../services/artefatos.service';

@Component({
  selector: 'app-artefatos',
  templateUrl: './artefatos.component.html',
  styleUrls: ['./artefatos.component.css']
})
export class ArtefatosComponent implements OnInit {
  
  artefatos: any[] = [];
  criandoArtefato: boolean = false;
  novoArtefato: any = {
    titulo: '',
    descricao: ''
  };

  constructor(private artefatosService: ArtefatosService) {}

  ngOnInit() {
    this.carregarArtefatos();
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

  toggleCriarArtefato() {
    this.criandoArtefato = !this.criandoArtefato;
  }

  onSubmitCriarArtefato() {
    this.artefatosService.createArtefato(this.novoArtefato).subscribe({
      next: (data) => {
        this.carregarArtefatos();
        this.toggleCriarArtefato();
        this.novoArtefato = {
          titulo: '',
          descricao: ''
        };
      },
      error: (err) => {
        console.error('Erro ao criar artefato', err);
      }
    });
  }

  excluirArtefato(id: number) {
    this.artefatosService.deleteArtefato(id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (err) => {
        console.error('Erro ao excluir artefato', err);
      }
    });
  }
}
