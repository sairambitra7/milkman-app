import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseregistrationComponent } from './useregistration.component';

describe('UseregistrationComponent', () => {
  let component: UseregistrationComponent;
  let fixture: ComponentFixture<UseregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
