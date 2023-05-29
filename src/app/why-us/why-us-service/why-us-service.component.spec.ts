import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsServiceComponent } from './why-us-service.component';

describe('WhyUsServiceComponent', () => {
  let component: WhyUsServiceComponent;
  let fixture: ComponentFixture<WhyUsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyUsServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyUsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
