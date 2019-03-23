import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultHeaderComponent } from './search-result-header.component';

describe('SearchResultHeaderComponent', () => {
  let component: SearchResultHeaderComponent;
  let fixture: ComponentFixture<SearchResultHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
