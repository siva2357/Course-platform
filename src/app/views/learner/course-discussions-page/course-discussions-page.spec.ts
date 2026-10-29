import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDiscussionsPage } from './course-discussions-page';

describe('CourseDiscussionsPage', () => {
  let component: CourseDiscussionsPage;
  let fixture: ComponentFixture<CourseDiscussionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDiscussionsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDiscussionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
