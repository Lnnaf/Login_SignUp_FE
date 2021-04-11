import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleCreateCvComponent } from './module-create-cv.component';

describe('ModuleCreateCvComponent', () => {
  let component: ModuleCreateCvComponent;
  let fixture: ComponentFixture<ModuleCreateCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleCreateCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleCreateCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
