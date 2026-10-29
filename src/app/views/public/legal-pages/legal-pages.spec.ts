import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalPages } from './legal-pages';

describe('LegalPages', () => {
  let component: LegalPages;
  let fixture: ComponentFixture<LegalPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
