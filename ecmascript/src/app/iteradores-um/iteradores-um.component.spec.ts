import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteradoresUmComponent } from './iteradores-um.component';

describe('IteradoresUmComponent', () => {
  let component: IteradoresUmComponent;
  let fixture: ComponentFixture<IteradoresUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteradoresUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteradoresUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
