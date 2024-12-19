import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapeutaEspecialistaComponent } from './terapeuta-especialista.component';

describe('TerapeutaEspecialistaComponent', () => {
  let component: TerapeutaEspecialistaComponent;
  let fixture: ComponentFixture<TerapeutaEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerapeutaEspecialistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerapeutaEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
