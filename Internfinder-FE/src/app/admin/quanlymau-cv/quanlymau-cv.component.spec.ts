import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlymauCVComponent } from './quanlymau-cv.component';

describe('QuanlymauCVComponent', () => {
  let component: QuanlymauCVComponent;
  let fixture: ComponentFixture<QuanlymauCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlymauCVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlymauCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
