import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleXemvcNtdComponent } from './module-xemvc-ntd.component';

describe('ModuleXemvcNtdComponent', () => {
  let component: ModuleXemvcNtdComponent;
  let fixture: ComponentFixture<ModuleXemvcNtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleXemvcNtdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleXemvcNtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
