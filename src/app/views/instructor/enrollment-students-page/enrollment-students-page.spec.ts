import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentStudentsPage } from './enrollment-students-page';

describe('EnrollmentStudentsPage', () => {
  let component: EnrollmentStudentsPage;
  let fixture: ComponentFixture<EnrollmentStudentsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmentStudentsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentStudentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
