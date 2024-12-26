import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoTodosArtigosComponent } from './sessao-todos-artigos.component';

describe('SessaoTodosArtigosComponent', () => {
  let component: SessaoTodosArtigosComponent;
  let fixture: ComponentFixture<SessaoTodosArtigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessaoTodosArtigosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessaoTodosArtigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
