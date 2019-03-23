import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLayoutComponent } from './search-layout.component';

describe('SearchLayoutComponent', () => {
  let component: SearchLayoutComponent;
  let fixture: ComponentFixture<SearchLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
