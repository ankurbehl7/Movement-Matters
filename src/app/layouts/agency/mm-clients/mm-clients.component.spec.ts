import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmClientsComponent } from './mm-clients.component';

describe('MmClientsComponent', () => {
  let component: MmClientsComponent;
  let fixture: ComponentFixture<MmClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
