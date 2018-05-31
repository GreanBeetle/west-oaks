import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMinutesComponent } from './upload-minutes.component';

describe('UploadMinutesComponent', () => {
  let component: UploadMinutesComponent;
  let fixture: ComponentFixture<UploadMinutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMinutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
