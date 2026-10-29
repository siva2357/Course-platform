import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManagementAnalyticsPage } from './course-management-analytics-page';

describe('CourseManagementAnalyticsPage', () => {
  let component: CourseManagementAnalyticsPage;
  let fixture: ComponentFixture<CourseManagementAnalyticsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseManagementAnalyticsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseManagementAnalyticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
