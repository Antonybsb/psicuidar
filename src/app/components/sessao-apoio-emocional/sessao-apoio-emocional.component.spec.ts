import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoApoioEmocionalComponent } from './sessao-apoio-emocional.component';

describe('SessaoApoioEmocionalComponent', () => {
  let component: SessaoApoioEmocionalComponent;
  let fixture: ComponentFixture<SessaoApoioEmocionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessaoApoioEmocionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessaoApoioEmocionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
