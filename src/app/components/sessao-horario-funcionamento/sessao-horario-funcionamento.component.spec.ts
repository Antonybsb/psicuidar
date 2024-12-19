import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoHorarioFuncionamentoComponent } from './sessao-horario-funcionamento.component';

describe('SessaoHorarioFuncionamentoComponent', () => {
  let component: SessaoHorarioFuncionamentoComponent;
  let fixture: ComponentFixture<SessaoHorarioFuncionamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessaoHorarioFuncionamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessaoHorarioFuncionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
