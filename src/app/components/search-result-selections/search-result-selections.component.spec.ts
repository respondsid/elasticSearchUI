import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultSelectionsComponent } from './search-result-selections.component';

describe('SearchResultSelectionsComponent', () => {
  let component: SearchResultSelectionsComponent;
  let fixture: ComponentFixture<SearchResultSelectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultSelectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultSelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
