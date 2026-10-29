import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPurchasesPage } from './my-purchases-page';

describe('MyPurchasesPage', () => {
  let component: MyPurchasesPage;
  let fixture: ComponentFixture<MyPurchasesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPurchasesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPurchasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
