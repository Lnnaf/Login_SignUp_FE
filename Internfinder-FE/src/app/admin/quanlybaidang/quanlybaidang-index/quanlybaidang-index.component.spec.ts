import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlybaidangIndexComponent } from './quanlybaidang-index.component';

describe('QuanlybaidangIndexComponent', () => {
  let component: QuanlybaidangIndexComponent;
  let fixture: ComponentFixture<QuanlybaidangIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlybaidangIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlybaidangIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
