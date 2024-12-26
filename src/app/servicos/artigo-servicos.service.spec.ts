import { TestBed } from '@angular/core/testing';

import { ArtigoServicosService } from './artigo-servicos.service';

describe('ArtigoServicosService', () => {
  let service: ArtigoServicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtigoServicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
