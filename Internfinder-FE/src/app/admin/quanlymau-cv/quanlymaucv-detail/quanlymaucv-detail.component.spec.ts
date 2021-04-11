import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlymaucvDetailComponent } from './quanlymaucv-detail.component';

describe('QuanlymaucvDetailComponent', () => {
  let component: QuanlymaucvDetailComponent;
  let fixture: ComponentFixture<QuanlymaucvDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlymaucvDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlymaucvDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
