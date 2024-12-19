import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoPrincipalComponent } from './sessao-principal.component';

describe('SessaoPrincipalComponent', () => {
  let component: SessaoPrincipalComponent;
  let fixture: ComponentFixture<SessaoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessaoPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessaoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
