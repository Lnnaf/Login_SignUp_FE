import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlybaichiaseIndexComponent } from './quanlybaichiase-index.component';

describe('QuanlybaichiaseIndexComponent', () => {
  let component: QuanlybaichiaseIndexComponent;
  let fixture: ComponentFixture<QuanlybaichiaseIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlybaichiaseIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlybaichiaseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
