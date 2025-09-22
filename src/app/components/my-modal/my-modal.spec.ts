import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModal } from './my-modal';

describe('MyModal', () => {
  let component: MyModal;
  let fixture: ComponentFixture<MyModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
