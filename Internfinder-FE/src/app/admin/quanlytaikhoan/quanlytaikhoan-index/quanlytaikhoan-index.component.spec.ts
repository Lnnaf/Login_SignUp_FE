import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlytaikhoanIndexComponent } from './quanlytaikhoan-index.component';

describe('QuanlytaikhoanIndexComponent', () => {
  let component: QuanlytaikhoanIndexComponent;
  let fixture: ComponentFixture<QuanlytaikhoanIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlytaikhoanIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlytaikhoanIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
