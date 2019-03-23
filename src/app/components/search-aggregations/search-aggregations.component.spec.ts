import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAggregationsComponent } from './search-aggregations.component';

describe('SearchAggregationsComponent', () => {
  let component: SearchAggregationsComponent;
  let fixture: ComponentFixture<SearchAggregationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAggregationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAggregationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
