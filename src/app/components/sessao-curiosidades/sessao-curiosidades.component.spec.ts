import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoCuriosidadesComponent } from './sessao-curiosidades.component';

describe('SessaoCuriosidadesComponent', () => {
  let component: SessaoCuriosidadesComponent;
  let fixture: ComponentFixture<SessaoCuriosidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessaoCuriosidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessaoCuriosidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
