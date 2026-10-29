import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAnalyticsPage } from './course-analytics-page';

describe('CourseAnalyticsPage', () => {
  let component: CourseAnalyticsPage;
  let fixture: ComponentFixture<CourseAnalyticsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseAnalyticsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseAnalyticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
