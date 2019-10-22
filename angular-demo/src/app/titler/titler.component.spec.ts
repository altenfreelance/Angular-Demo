import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlerComponent } from './titler.component';

describe('TitlerComponent', () => {
  let component: TitlerComponent;
  let fixture: ComponentFixture<TitlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
