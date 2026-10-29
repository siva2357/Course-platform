import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingAndPlans } from './pricing-and-plans';

describe('PricingAndPlans', () => {
  let component: PricingAndPlans;
  let fixture: ComponentFixture<PricingAndPlans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingAndPlans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingAndPlans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
