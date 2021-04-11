import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlybaidangEditComponent } from './quanlybaidang-edit.component';

describe('QuanlybaidangEditComponent', () => {
  let component: QuanlybaidangEditComponent;
  let fixture: ComponentFixture<QuanlybaidangEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlybaidangEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlybaidangEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
