import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlytaikhoanEditComponent } from './quanlytaikhoan-edit.component';

describe('QuanlytaikhoanEditComponent', () => {
  let component: QuanlytaikhoanEditComponent;
  let fixture: ComponentFixture<QuanlytaikhoanEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlytaikhoanEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlytaikhoanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
