import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMeetingComponent } from './display-meeting.component';

describe('DisplayMeetingComponent', () => {
  let component: DisplayMeetingComponent;
  let fixture: ComponentFixture<DisplayMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
