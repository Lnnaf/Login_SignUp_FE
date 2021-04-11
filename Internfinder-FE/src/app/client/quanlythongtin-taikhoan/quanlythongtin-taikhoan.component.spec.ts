import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlythongtinTaikhoanComponent } from './quanlythongtin-taikhoan.component';

describe('QuanlythongtinTaikhoanComponent', () => {
  let component: QuanlythongtinTaikhoanComponent;
  let fixture: ComponentFixture<QuanlythongtinTaikhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlythongtinTaikhoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlythongtinTaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
