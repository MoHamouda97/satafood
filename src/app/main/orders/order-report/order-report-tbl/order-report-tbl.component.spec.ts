import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReportTblComponent } from './order-report-tbl.component';

describe('OrderReportTblComponent', () => {
  let component: OrderReportTblComponent;
  let fixture: ComponentFixture<OrderReportTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReportTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReportTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
