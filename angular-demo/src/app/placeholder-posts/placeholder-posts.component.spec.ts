import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderPostsComponent } from './placeholder-posts.component';

describe('PlaceholderPostsComponent', () => {
  let component: PlaceholderPostsComponent;
  let fixture: ComponentFixture<PlaceholderPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
