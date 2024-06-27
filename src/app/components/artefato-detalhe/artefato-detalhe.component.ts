import { Component, OnInit } from '@angular/core';
import { ArtefatosService } from '../../services/artefatos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artefato-detalhe',
  templateUrl: './artefato-detalhe.component.html',
  styleUrl: './artefato-detalhe.component.css'
})
export class ArtefatoDetalheComponent implements OnInit {

  artefato: any;

  constructor(
    private route: ActivatedRoute,
    private artefatoService: ArtefatosService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.artefatoService.getArtefatoById(id).subscribe({
        next: (data) => {
          this.artefato = data;
        },
        error: (err) => {
          console.error('Erro ao buscar detalhes da artefato', err);
        }
      });
    }
  }
}