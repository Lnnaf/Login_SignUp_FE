import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlybaidangCreateComponent } from './quanlybaidang-create.component';

describe('QuanlybaidangCreateComponent', () => {
  let component: QuanlybaidangCreateComponent;
  let fixture: ComponentFixture<QuanlybaidangCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlybaidangCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlybaidangCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
