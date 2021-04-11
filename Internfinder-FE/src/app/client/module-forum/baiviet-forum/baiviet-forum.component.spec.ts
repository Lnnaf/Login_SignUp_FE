import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaivietForumComponent } from './baiviet-forum.component';

describe('BaivietForumComponent', () => {
  let component: BaivietForumComponent;
  let fixture: ComponentFixture<BaivietForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaivietForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaivietForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
