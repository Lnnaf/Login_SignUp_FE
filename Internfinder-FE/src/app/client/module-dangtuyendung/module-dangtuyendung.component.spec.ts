import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleDangtuyendungComponent } from './module-dangtuyendung.component';

describe('ModuleDangtuyendungComponent', () => {
  let component: ModuleDangtuyendungComponent;
  let fixture: ComponentFixture<ModuleDangtuyendungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleDangtuyendungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDangtuyendungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
