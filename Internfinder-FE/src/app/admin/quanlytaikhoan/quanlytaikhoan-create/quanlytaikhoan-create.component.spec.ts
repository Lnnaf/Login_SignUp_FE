import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlytaikhoanCreateComponent } from './quanlytaikhoan-create.component';

describe('QuanlytaikhoanCreateComponent', () => {
  let component: QuanlytaikhoanCreateComponent;
  let fixture: ComponentFixture<QuanlytaikhoanCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlytaikhoanCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlytaikhoanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
