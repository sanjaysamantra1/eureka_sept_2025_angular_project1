import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDemo } from './comment-demo';

describe('CommentDemo', () => {
  let component: CommentDemo;
  let fixture: ComponentFixture<CommentDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
