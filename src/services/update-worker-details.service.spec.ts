import { TestBed } from '@angular/core/testing';

import { UpdateWorkerDetailsService } from './update-worker-details.service';

describe('UpdateWorkerDetailsService', () => {
  let service: UpdateWorkerDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateWorkerDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
