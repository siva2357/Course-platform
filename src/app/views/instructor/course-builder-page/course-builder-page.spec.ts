import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBuilderPage } from './course-builder-page';

describe('CourseBuilderPage', () => {
  let component: CourseBuilderPage;
  let fixture: ComponentFixture<CourseBuilderPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseBuilderPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseBuilderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
