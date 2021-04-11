import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlybaichiaseEditComponent } from './quanlybaichiase-edit.component';

describe('QuanlybaichiaseEditComponent', () => {
  let component: QuanlybaichiaseEditComponent;
  let fixture: ComponentFixture<QuanlybaichiaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlybaichiaseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlybaichiaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
