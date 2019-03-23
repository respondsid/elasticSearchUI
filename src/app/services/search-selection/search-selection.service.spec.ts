import { TestBed } from '@angular/core/testing';

import { SearchSelectionService } from './search-selection.service';

describe('SearchSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchSelectionService = TestBed.get(SearchSelectionService);
    expect(service).toBeTruthy();
  });
});
