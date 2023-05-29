import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmCalenderComponent } from './mm-calender.component';

describe('MmCalenderComponent', () => {
  let component: MmCalenderComponent;
  let fixture: ComponentFixture<MmCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
