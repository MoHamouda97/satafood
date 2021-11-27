import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReportFilterComponent } from './order-report-filter.component';

describe('OrderReportFilterComponent', () => {
  let component: OrderReportFilterComponent;
  let fixture: ComponentFixture<OrderReportFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReportFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
