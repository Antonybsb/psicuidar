import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoSobreLgComponent } from './sessao-sobre-lg.component';

describe('SessaoSobreLgComponent', () => {
  let component: SessaoSobreLgComponent;
  let fixture: ComponentFixture<SessaoSobreLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessaoSobreLgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessaoSobreLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
