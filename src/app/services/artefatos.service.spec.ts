import { TestBed } from '@angular/core/testing';

import { ArtefatosService } from './artefatos.service';

describe('ArtefatosService', () => {
  let service: ArtefatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtefatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
