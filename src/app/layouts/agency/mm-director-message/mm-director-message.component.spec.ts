import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmDirectorMessageComponent } from './mm-director-message.component';

describe('MmDirectorMessageComponent', () => {
  let component: MmDirectorMessageComponent;
  let fixture: ComponentFixture<MmDirectorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmDirectorMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmDirectorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
