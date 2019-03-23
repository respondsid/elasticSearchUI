import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregationValueComponent } from './aggregation-value.component';

describe('AggregationValueComponent', () => {
  let component: AggregationValueComponent;
  let fixture: ComponentFixture<AggregationValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregationValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregationValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
