import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseClassroomPage } from './course-classroom-page';

describe('CourseClassroomPage', () => {
  let component: CourseClassroomPage;
  let fixture: ComponentFixture<CourseClassroomPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseClassroomPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseClassroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
