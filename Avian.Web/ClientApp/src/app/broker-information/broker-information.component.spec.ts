import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerInformationComponent } from './broker-information.component';

describe('BrokerInformationComponent', () => {
  let component: BrokerInformationComponent;
  let fixture: ComponentFixture<BrokerInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
