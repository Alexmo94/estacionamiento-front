import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstacionadosComponent } from './listar-estacionados.component';

describe('ListarEstacionadosComponent', () => {
  let component: ListarEstacionadosComponent;
  let fixture: ComponentFixture<ListarEstacionadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEstacionadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEstacionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
