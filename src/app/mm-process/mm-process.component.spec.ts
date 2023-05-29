import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmProcessComponent } from './mm-process.component';

describe('MmProcessComponent', () => {
  let component: MmProcessComponent;
  let fixture: ComponentFixture<MmProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
