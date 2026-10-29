import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseReviewsPage } from './course-reviews-page';

describe('CourseReviewsPage', () => {
  let component: CourseReviewsPage;
  let fixture: ComponentFixture<CourseReviewsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseReviewsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
