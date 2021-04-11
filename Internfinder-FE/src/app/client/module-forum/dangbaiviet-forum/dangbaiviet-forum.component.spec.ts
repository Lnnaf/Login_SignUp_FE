import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangbaivietForumComponent } from './dangbaiviet-forum.component';

describe('DangbaivietForumComponent', () => {
  let component: DangbaivietForumComponent;
  let fixture: ComponentFixture<DangbaivietForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangbaivietForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangbaivietForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
