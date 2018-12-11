import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomePopupComponent } from './awesome-popup.component';

describe('AwesomePopupComponent', () => {
  let component: AwesomePopupComponent;
  let fixture: ComponentFixture<AwesomePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
