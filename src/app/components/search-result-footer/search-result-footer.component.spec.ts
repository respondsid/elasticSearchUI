import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultFooterComponent } from './search-result-footer.component';

describe('SearchResultFooterComponent', () => {
  let component: SearchResultFooterComponent;
  let fixture: ComponentFixture<SearchResultFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
