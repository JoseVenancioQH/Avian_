import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserPermissionsComponent } from './dialog-user-permissions.component';

describe('DialogUserPermissionsComponent', () => {
  let component: DialogUserPermissionsComponent;
  let fixture: ComponentFixture<DialogUserPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUserPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUserPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
