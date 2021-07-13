import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatlogsFormComponent } from './catlogs-form.component';

describe('CatlogsFormComponent', () => {
  let component: CatlogsFormComponent;
  let fixture: ComponentFixture<CatlogsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatlogsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatlogsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
