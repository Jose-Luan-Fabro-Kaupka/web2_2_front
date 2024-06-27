import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefatoDetalheComponent } from './artefato-detalhe.component';

describe('ArtefatoDetalheComponent', () => {
  let component: ArtefatoDetalheComponent;
  let fixture: ComponentFixture<ArtefatoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtefatoDetalheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtefatoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
