import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmTakewayComponent } from './mm-takeway.component';

describe('MmTakewayComponent', () => {
  let component: MmTakewayComponent;
  let fixture: ComponentFixture<MmTakewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmTakewayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmTakewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
