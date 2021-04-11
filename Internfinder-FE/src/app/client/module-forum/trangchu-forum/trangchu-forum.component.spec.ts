import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchuForumComponent } from './trangchu-forum.component';

describe('TrangchuForumComponent', () => {
  let component: TrangchuForumComponent;
  let fixture: ComponentFixture<TrangchuForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrangchuForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangchuForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
