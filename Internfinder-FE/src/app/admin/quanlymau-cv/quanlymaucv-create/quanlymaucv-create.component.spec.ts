import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlymaucvCreateComponent } from './quanlymaucv-create.component';

describe('QuanlymaucvCreateComponent', () => {
  let component: QuanlymaucvCreateComponent;
  let fixture: ComponentFixture<QuanlymaucvCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlymaucvCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlymaucvCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
