import { TestBed } from '@angular/core/testing';

import { WorkersListService } from './workers-list.service';

describe('WorkersListService', () => {
  let service: WorkersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
