import { TestBed } from '@angular/core/testing';

import { MockElectionService } from './mock-election.service';

describe('MockElectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockElectionService = TestBed.get(MockElectionService);
    expect(service).toBeTruthy();
  });
});
