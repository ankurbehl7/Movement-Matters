import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsDescriptionComponent } from './why-us-description.component';

describe('WhyUsDescriptionComponent', () => {
  let component: WhyUsDescriptionComponent;
  let fixture: ComponentFixture<WhyUsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyUsDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyUsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
