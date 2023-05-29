import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmPostureBaithakComponent } from './mm-posture-baithak.component';

describe('MmPostureBaithakComponent', () => {
  let component: MmPostureBaithakComponent;
  let fixture: ComponentFixture<MmPostureBaithakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmPostureBaithakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmPostureBaithakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
