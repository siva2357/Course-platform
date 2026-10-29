import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeInstructor } from './become-instructor';

describe('BecomeInstructor', () => {
  let component: BecomeInstructor;
  let fixture: ComponentFixture<BecomeInstructor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeInstructor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeInstructor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
