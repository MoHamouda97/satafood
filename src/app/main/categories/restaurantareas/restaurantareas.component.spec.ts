import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantareasComponent } from './restaurantareas.component';

describe('RestaurantareasComponent', () => {
  let component: RestaurantareasComponent;
  let fixture: ComponentFixture<RestaurantareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
