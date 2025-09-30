import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDemo } from './parent-demo';

describe('ParentDemo', () => {
  let component: ParentDemo;
  let fixture: ComponentFixture<ParentDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
