import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCurriculumPage } from './course-curriculum-page';

describe('CourseCurriculumPage', () => {
  let component: CourseCurriculumPage;
  let fixture: ComponentFixture<CourseCurriculumPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCurriculumPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCurriculumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
