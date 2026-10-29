import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEarningsPayoutsPage } from './my-earnings-payouts-page';

describe('MyEarningsPayoutsPage', () => {
  let component: MyEarningsPayoutsPage;
  let fixture: ComponentFixture<MyEarningsPayoutsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyEarningsPayoutsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyEarningsPayoutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
