import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBudgetComponent } from './upload-budget.component';

describe('UploadBudgetComponent', () => {
  let component: UploadBudgetComponent;
  let fixture: ComponentFixture<UploadBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
