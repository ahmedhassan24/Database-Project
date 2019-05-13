import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteStaffComponent } from './invite-staff.component';

describe('InviteStaffComponent', () => {
  let component: InviteStaffComponent;
  let fixture: ComponentFixture<InviteStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
