import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlybaichiaseCreateComponent } from './quanlybaichiase-create.component';

describe('QuanlybaichiaseCreateComponent', () => {
  let component: QuanlybaichiaseCreateComponent;
  let fixture: ComponentFixture<QuanlybaichiaseCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlybaichiaseCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlybaichiaseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
