import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultTitleComponent } from './search-result-title.component';

describe('SearchResultTitleComponent', () => {
  let component: SearchResultTitleComponent;
  let fixture: ComponentFixture<SearchResultTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
