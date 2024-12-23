import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoArtigosUltimasPostagensComponent } from './sessao-artigos-ultimas-postagens.component';

describe('SessaoArtigosUltimasPostagensComponent', () => {
  let component: SessaoArtigosUltimasPostagensComponent;
  let fixture: ComponentFixture<SessaoArtigosUltimasPostagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessaoArtigosUltimasPostagensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessaoArtigosUltimasPostagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
