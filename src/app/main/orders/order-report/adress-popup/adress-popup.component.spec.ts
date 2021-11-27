import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressPopupComponent } from './adress-popup.component';

describe('AdressPopupComponent', () => {
  let component: AdressPopupComponent;
  let fixture: ComponentFixture<AdressPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
