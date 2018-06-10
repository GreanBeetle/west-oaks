import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHeadlineComponent } from './display-headline.component';

describe('DisplayHeadlineComponent', () => {
  let component: DisplayHeadlineComponent;
  let fixture: ComponentFixture<DisplayHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
