import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrud } from './user-crud';

describe('UserCrud', () => {
  let component: UserCrud;
  let fixture: ComponentFixture<UserCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCrud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
