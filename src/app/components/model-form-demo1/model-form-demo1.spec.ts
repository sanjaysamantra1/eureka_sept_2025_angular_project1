import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFormDemo1 } from './model-form-demo1';

describe('ModelFormDemo1', () => {
  let component: ModelFormDemo1;
  let fixture: ComponentFixture<ModelFormDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelFormDemo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelFormDemo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
