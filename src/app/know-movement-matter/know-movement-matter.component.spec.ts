import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMovementMatterComponent } from './know-movement-matter.component';

describe('KnowMovementMatterComponent', () => {
  let component: KnowMovementMatterComponent;
  let fixture: ComponentFixture<KnowMovementMatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowMovementMatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowMovementMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
