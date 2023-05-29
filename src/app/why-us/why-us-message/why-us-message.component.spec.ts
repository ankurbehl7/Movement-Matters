import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsMessageComponent } from './why-us-message.component';

describe('WhyUsMessageComponent', () => {
  let component: WhyUsMessageComponent;
  let fixture: ComponentFixture<WhyUsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyUsMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyUsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
