import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlymaucvIndexComponent } from './quanlymaucv-index.component';

describe('QuanlymaucvIndexComponent', () => {
  let component: QuanlymaucvIndexComponent;
  let fixture: ComponentFixture<QuanlymaucvIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlymaucvIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlymaucvIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
