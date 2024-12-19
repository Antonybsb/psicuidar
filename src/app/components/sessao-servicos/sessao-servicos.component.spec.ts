import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoServicosComponent } from './sessao-servicos.component';

describe('SessaoServicosComponent', () => {
  let component: SessaoServicosComponent;
  let fixture: ComponentFixture<SessaoServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessaoServicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessaoServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
