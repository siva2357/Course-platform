import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCertificationsPage } from './my-certifications-page';

describe('MyCertificationsPage', () => {
  let component: MyCertificationsPage;
  let fixture: ComponentFixture<MyCertificationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCertificationsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCertificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
