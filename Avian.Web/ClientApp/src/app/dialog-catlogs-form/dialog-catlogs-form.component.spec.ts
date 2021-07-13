import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCatlogsFormComponent } from './dialog-catlogs-form.component';

describe('DialogCatlogsFormComponent', () => {
  let component: DialogCatlogsFormComponent;
  let fixture: ComponentFixture<DialogCatlogsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCatlogsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCatlogsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
