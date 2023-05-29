import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmFacilitatorsComponent } from './mm-facilitators.component';

describe('MmFacilitatorsComponent', () => {
  let component: MmFacilitatorsComponent;
  let fixture: ComponentFixture<MmFacilitatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmFacilitatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmFacilitatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
