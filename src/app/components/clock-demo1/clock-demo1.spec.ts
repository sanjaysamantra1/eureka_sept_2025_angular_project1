import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDemo1 } from './clock-demo1';

describe('ClockDemo1', () => {
  let component: ClockDemo1;
  let fixture: ComponentFixture<ClockDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockDemo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockDemo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
