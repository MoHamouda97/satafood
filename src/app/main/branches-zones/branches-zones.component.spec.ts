import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesZonesComponent } from './branches-zones.component';

describe('BranchesZonesComponent', () => {
  let component: BranchesZonesComponent;
  let fixture: ComponentFixture<BranchesZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchesZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchesZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
