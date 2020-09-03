import { TestBed } from '@angular/core/testing';

import { ElectionlistService } from './electionlist.service';

describe('ElectionlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectionlistService = TestBed.get(ElectionlistService);
    expect(service).toBeTruthy();
  });
});
