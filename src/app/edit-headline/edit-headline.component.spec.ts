import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeadlineComponent } from './edit-headline.component';

describe('EditHeadlineComponent', () => {
  let component: EditHeadlineComponent;
  let fixture: ComponentFixture<EditHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
