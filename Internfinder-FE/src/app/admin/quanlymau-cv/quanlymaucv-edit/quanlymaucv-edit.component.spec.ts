import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlymaucvEditComponent } from './quanlymaucv-edit.component';

describe('QuanlymaucvEditComponent', () => {
  let component: QuanlymaucvEditComponent;
  let fixture: ComponentFixture<QuanlymaucvEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlymaucvEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlymaucvEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
